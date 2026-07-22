import { ProjectInfo } from '@repoatlasdev/detector';

export type NodeType = 'file' | 'directory' | 'symlink';

export type SortOption = 'name' | 'size' | 'type';

export type OnlyOption = 'all' | 'files' | 'directories';

export interface FileMetadata {
  sizeBytes?: number;
  modifiedAt?: string;
  extension?: string;
  isSymlink?: boolean;
  symlinkTarget?: string;
}

export interface DirectoryMetadata {
  fileCount?: number;
  directoryCount?: number;
  totalSizeBytes?: number;
  modifiedAt?: string;
  projectInfo?: ProjectInfo;
  isSymlink?: boolean;
  symlinkTarget?: string;
}

export type NodeMetadata = FileMetadata | DirectoryMetadata;

export interface TreeNode {
  id: string;
  name: string;
  path: string;
  relativePath: string;
  type: NodeType;
  children?: TreeNode[];
  metadata?: NodeMetadata;
}

export interface ScanOptions {
  rootDir: string;
  maxDepth?: number;
  ignorePatterns?: string[];
  includeHidden?: boolean;
  respectGitIgnore?: boolean;
  followSymlinks?: boolean;
  detectProject?: boolean;
  sortBy?: SortOption;
  only?: OnlyOption;
}
