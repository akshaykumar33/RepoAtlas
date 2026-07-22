import { TreeNode } from '@repo-atlas/core';

export interface ExportOptions {
  title?: string;
  theme?: string;
  customOptions?: Record<string, unknown>;
}

export interface ExportResult {
  format: string;
  fileExtension: string;
  mimeType: string;
  content: string | Buffer;
  filename: string;
}

export interface ExporterPlugin {
  name: string;
  fileExtension: string;
  mimeType: string;
  export(
    tree: TreeNode,
    renderedContent?: string,
    options?: ExportOptions
  ): Promise<ExportResult> | ExportResult;
}
