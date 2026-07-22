import { TreeNode } from '@repo-atlas/core';
import { ExporterPlugin, ExportOptions, ExportResult } from '../types';

export class DocxExporter implements ExporterPlugin {
  readonly name = 'docx';
  readonly fileExtension = 'docx';
  readonly mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

  export(tree: TreeNode, renderedContent?: string, options?: ExportOptions): ExportResult {
    const title = options?.title || `Project Structure - ${tree.name}`;
    const safeContent = renderedContent || tree.name;

    const docxXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    <w:p>
      <w:r>
        <w:rPr><w:b/></w:rPr>
        <w:t>${title}</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r>
        <w:t xml:space="preserve">${safeContent.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</w:t>
      </w:r>
    </w:p>
  </w:body>
</w:document>`;

    return {
      format: this.name,
      fileExtension: this.fileExtension,
      mimeType: this.mimeType,
      content: docxXml,
      filename: `${tree.name}-structure.docx`,
    };
  }
}
