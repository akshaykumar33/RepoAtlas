import { TreeNode } from '@repoatlasdev/core';
import { ExporterPlugin, ExportResult } from '../types';

export class DocxExporter implements ExporterPlugin {
  readonly name = 'docx';
  readonly fileExtension = 'docx';
  readonly mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

  export(tree: TreeNode): ExportResult {
    return {
      format: this.name,
      fileExtension: this.fileExtension,
      mimeType: this.mimeType,
      content: Buffer.from(`DOCX Document for ${tree.name}`),
      filename: `${tree.name}-tree.docx`,
    };
  }
}
