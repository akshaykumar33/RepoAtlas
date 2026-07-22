import fs from 'node:fs/promises';
import path from 'node:path';
import { getExtension, normalizePath, relativePath } from '@repo-atlas/utils';
import { ScanOptions, TreeNode } from './types/tree';
import { sortTreeNodes } from './tree';

const DEFAULT_IGNORE = ['.git', 'node_modules', 'dist', '.turbo', '.DS_Store'];

export async function scanRepository(options: ScanOptions): Promise<TreeNode> {
  const rootDir = path.resolve(options.rootDir);
  const ignorePatterns = options.ignorePatterns || DEFAULT_IGNORE;
  const maxDepth = options.maxDepth ?? Infinity;
  const includeHidden = options.includeHidden ?? false;

  async function scanDir(currentPath: string, currentDepth: number): Promise<TreeNode> {
    const name = path.basename(currentPath) || currentPath;
    const relPath = relativePath(rootDir, currentPath) || '.';
    const stats = await fs.stat(currentPath);

    if (!stats.isDirectory()) {
      return {
        name,
        path: normalizePath(currentPath),
        relativePath: relPath,
        type: 'file',
        metadata: {
          sizeBytes: stats.size,
          extension: getExtension(name),
          modifiedAt: stats.mtime,
        },
      };
    }

    const node: TreeNode = {
      name,
      path: normalizePath(currentPath),
      relativePath: relPath,
      type: 'directory',
      children: [],
      metadata: {
        modifiedAt: stats.mtime,
      },
    };

    if (currentDepth >= maxDepth) {
      return node;
    }

    const entries = await fs.readdir(currentPath, { withFileTypes: true });
    const children: TreeNode[] = [];

    for (const entry of entries) {
      const entryName = entry.name;

      if (!includeHidden && entryName.startsWith('.') && entryName !== '.') {
        continue;
      }

      if (ignorePatterns.includes(entryName)) {
        continue;
      }

      const fullPath = path.join(currentPath, entryName);

      if (entry.isDirectory()) {
        children.push(await scanDir(fullPath, currentDepth + 1));
      } else if (entry.isFile()) {
        const fileStats = await fs.stat(fullPath);
        children.push({
          name: entryName,
          path: normalizePath(fullPath),
          relativePath: relativePath(rootDir, fullPath),
          type: 'file',
          metadata: {
            sizeBytes: fileStats.size,
            extension: getExtension(entryName),
            modifiedAt: fileStats.mtime,
          },
        });
      }
    }

    node.children = sortTreeNodes(children);
    return node;
  }

  return scanDir(rootDir, 0);
}
