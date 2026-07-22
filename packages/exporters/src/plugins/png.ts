import { TreeNode } from '@repo-atlas/core';
import { ExporterPlugin, ExportResult } from '../types';

export class PngExporter implements ExporterPlugin {
  readonly name = 'png';
  readonly fileExtension = 'png';
  readonly mimeType = 'image/png';

  export(tree: TreeNode, renderedContent?: string): ExportResult {
    const rawText = renderedContent || tree.name;
    const buffer = Buffer.from(rawText, 'utf-8');

    return {
      format: this.name,
      fileExtension: this.fileExtension,
      mimeType: this.mimeType,
      content: buffer,
      filename: `${tree.name}-structure.png`,
    };
  }
}
