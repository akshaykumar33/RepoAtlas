import { ProjectInfo } from '@repo-atlas/detector';

export type NodeType = 'file' | 'directory' | 'symlink';
export type SortOption = 'name' | 'size' | 'type' | 'date';
export type OnlyOption = 'files' | 'directories' | 'all';

export interface FileMetadata {
  sizeBytes: number;
  extension: string;
  modifiedAt: string;
  createdAt?: string;
  isSymlink?: boolean;
  symlinkTarget?: string;
  isIgnored?: boolean;
}

export interface DirectoryMetadata {
  modifiedAt: string;
  fileCount?: number;
  directoryCount?: number;
  totalSizeBytes?: number;
  projectInfo?: ProjectInfo;
  isSymlink?: boolean;
  symlinkTarget?: string;
  isIgnored?: boolean;
}

export interface TreeNode {
  id: string;
  name: string;
  path: string;
  relativePath: string;
  type: NodeType;
  children?: TreeNode[];
  metadata: FileMetadata | DirectoryMetadata;
}

export interface ScanOptions {
  rootDir: string;
  maxDepth?: number;
  ignorePatterns?: string[];
  includePatterns?: string[];
  excludePatterns?: string[];
  only?: OnlyOption;
  sortBy?: SortOption;
  includeHidden?: boolean;
  respectGitIgnore?: boolean;
  followSymlinks?: boolean;
  detectProject?: boolean;
}
