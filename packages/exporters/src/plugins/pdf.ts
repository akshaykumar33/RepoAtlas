import { TreeNode } from '@repoatlasdev/core';
import { ExporterPlugin, ExportResult } from '../types';

export class PdfExporter implements ExporterPlugin {
  readonly name = 'pdf';
  readonly fileExtension = 'pdf';
  readonly mimeType = 'application/pdf';

  export(tree: TreeNode): ExportResult {
    return {
      format: this.name,
      fileExtension: this.fileExtension,
      mimeType: this.mimeType,
      content: Buffer.from(`%PDF-1.4 PDF Document for ${tree.name}`),
      filename: `${tree.name}-tree.pdf`,
    };
  }
}
