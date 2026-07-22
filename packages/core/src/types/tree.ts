export type NodeType = 'file' | 'directory' | 'symlink';

export interface TreeMetadata {
  sizeBytes?: number;
  extension?: string;
  isIgnored?: boolean;
  modifiedAt?: Date;
  custom?: Record<string, unknown>;
}

export interface TreeNode {
  name: string;
  path: string;
  relativePath: string;
  type: NodeType;
  children?: TreeNode[];
  metadata?: TreeMetadata;
}

export interface ScanOptions {
  rootDir: string;
  maxDepth?: number;
  ignorePatterns?: string[];
  includeHidden?: boolean;
}
