import { TreeNode } from '@repoatlasdev/core';
import { ExporterPlugin, ExportResult } from '../types';

export class PngExporter implements ExporterPlugin {
  readonly name = 'png';
  readonly fileExtension = 'png';
  readonly mimeType = 'image/png';

  export(tree: TreeNode): ExportResult {
    return {
      format: this.name,
      fileExtension: this.fileExtension,
      mimeType: this.mimeType,
      content: Buffer.from(`PNG Image for ${tree.name}`),
      filename: `${tree.name}-tree.png`,
    };
  }
}
