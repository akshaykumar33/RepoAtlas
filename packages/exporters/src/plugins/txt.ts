import { TreeNode } from '@repo-atlas/core';
import { ExporterPlugin, ExportResult } from '../types';

export class TxtExporter implements ExporterPlugin {
  readonly name = 'txt';
  readonly fileExtension = 'txt';
  readonly mimeType = 'text/plain';

  export(tree: TreeNode, renderedContent?: string): ExportResult {
    const content = renderedContent || tree.name;
    return {
      format: this.name,
      fileExtension: this.fileExtension,
      mimeType: this.mimeType,
      content,
      filename: `${tree.name}-structure.txt`,
    };
  }
}
