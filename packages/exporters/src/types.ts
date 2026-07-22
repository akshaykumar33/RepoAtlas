import { TreeNode } from '@repoatlasdev/core';

export interface ExportResult {
  format: string;
  fileExtension: string;
  mimeType: string;
  content: string | Buffer;
  filename: string;
}

export interface ExporterPlugin {
  readonly name: string;
  readonly fileExtension: string;
  readonly mimeType: string;

  export(tree: TreeNode): ExportResult;
}
