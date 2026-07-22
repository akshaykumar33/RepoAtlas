import { TreeNode } from '@repo-atlas/core';
import { ExporterPlugin, ExportResult } from '../types';

export class JsonExporter implements ExporterPlugin {
  readonly name = 'json';
  readonly fileExtension = 'json';
  readonly mimeType = 'application/json';

  export(tree: TreeNode): ExportResult {
    return {
      format: this.name,
      fileExtension: this.fileExtension,
      mimeType: this.mimeType,
      content: JSON.stringify(tree, null, 2),
      filename: `${tree.name}-tree.json`,
    };
  }
}
