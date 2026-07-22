import fs from 'node:fs/promises';
import path from 'node:path';
import { ProjectDetector } from '@repoatlasdev/detector';
import { normalizePath, relativePath } from '@repoatlasdev/utils';
import { IgnoreFilter } from './filter/ignore';
import { MetadataResolver } from './metadata';
import { SymlinkResolver } from './symlink';
import { sortTreeNodes } from './tree';
import { DirectoryMetadata, FileMetadata, ScanOptions, TreeNode } from './types/tree';

export async function scanRepository(options: ScanOptions): Promise<TreeNode> {
  const rootDir = path.resolve(options.rootDir);
  const maxDepth = options.maxDepth ?? Infinity;
  const includeHidden = options.includeHidden ?? false;
  const respectGitIgnore = options.respectGitIgnore ?? true;
  const followSymlinks = options.followSymlinks ?? false;
  const detectProject = options.detectProject ?? true;
  const sortBy = options.sortBy ?? 'name';
  const only = options.only ?? 'all';

  const ignoreFilter = new IgnoreFilter(options.ignorePatterns);
  if (respectGitIgnore) {
    await ignoreFilter.loadGitIgnore(rootDir);
  }

  const metadataResolver = new MetadataResolver();
  const symlinkResolver = new SymlinkResolver();
  const projectDetector = new ProjectDetector();

  async function scanNode(currentPath: string, currentDepth: number): Promise<TreeNode | null> {
    const name = path.basename(currentPath) || currentPath;
    const relPath = relativePath(rootDir, currentPath) || '.';
    const normalizedPath = normalizePath(currentPath);

    // Hidden file filter check
    if (!includeHidden && name.startsWith('.') && name !== '.' && name !== '..') {
      return null;
    }

    const symlinkInfo = await symlinkResolver.resolve(currentPath);
    let stats;
    try {
      stats =
        followSymlinks && symlinkInfo.isSymlink
          ? await fs.stat(currentPath)
          : await fs.lstat(currentPath);
    } catch {
      return null;
    }

    const isDirectory = stats.isDirectory();

    // Check ignore filter
    if (ignoreFilter.isIgnored(relPath, isDirectory)) {
      return null;
    }

    // Only filter check
    if (only === 'directories' && !isDirectory) {
      return null;
    }

    const id = relPath;

    if (!isDirectory) {
      const fileMeta: FileMetadata = await metadataResolver.resolveFileMetadata(currentPath, name);
      if (symlinkInfo.isSymlink) {
        fileMeta.isSymlink = true;
        fileMeta.symlinkTarget = symlinkInfo.target;
      }

      return {
        id,
        name,
        path: normalizedPath,
        relativePath: relPath,
        type: symlinkInfo.isSymlink ? 'symlink' : 'file',
        metadata: fileMeta,
      };
    }

    // Directory handling
    symlinkResolver.markVisited(currentPath);
    if (respectGitIgnore) {
      await ignoreFilter.loadGitIgnore(currentPath);
    }

    const dirMeta: DirectoryMetadata = await metadataResolver.resolveDirectoryMetadata(currentPath);
    if (symlinkInfo.isSymlink) {
      dirMeta.isSymlink = true;
      dirMeta.symlinkTarget = symlinkInfo.target;
    }

    if (currentDepth === 0 && detectProject) {
      dirMeta.projectInfo = await projectDetector.detect(currentPath);
    }

    const node: TreeNode = {
      id,
      name,
      path: normalizedPath,
      relativePath: relPath,
      type: symlinkInfo.isSymlink ? 'symlink' : 'directory',
      children: [],
      metadata: dirMeta,
    };

    if (currentDepth >= maxDepth) {
      return node;
    }

    let entries: string[] = [];
    try {
      entries = await fs.readdir(currentPath);
    } catch {
      return node;
    }

    // Parallel child scanning for high throughput performance
    const childTasks = entries.map((entryName) => {
      const childPath = path.join(currentPath, entryName);
      return scanNode(childPath, currentDepth + 1);
    });

    const scannedChildren = await Promise.all(childTasks);

    const children: TreeNode[] = [];
    let fileCount = 0;
    let directoryCount = 0;
    let totalSizeBytes = 0;

    for (const childNode of scannedChildren) {
      if (childNode) {
        children.push(childNode);
        if (childNode.type === 'directory') {
          directoryCount++;
          const meta = childNode.metadata as DirectoryMetadata;
          fileCount += meta.fileCount ?? 0;
          directoryCount += meta.directoryCount ?? 0;
          totalSizeBytes += meta.totalSizeBytes ?? 0;
        } else {
          fileCount++;
          const meta = childNode.metadata as FileMetadata;
          totalSizeBytes += meta.sizeBytes ?? 0;
        }
      }
    }

    node.children = sortTreeNodes(children, sortBy);
    (node.metadata as DirectoryMetadata).fileCount = fileCount;
    (node.metadata as DirectoryMetadata).directoryCount = directoryCount;
    (node.metadata as DirectoryMetadata).totalSizeBytes = totalSizeBytes;

    return node;
  }

  const result = await scanNode(rootDir, 0);
  if (!result) {
    throw new Error(`Failed to scan root directory at '${rootDir}'`);
  }
  return result;
}
