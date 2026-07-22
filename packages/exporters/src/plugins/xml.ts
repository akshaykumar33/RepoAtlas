import { TreeNode } from '@repoatlasdev/core';
import { ExporterPlugin, ExportResult } from '../types';

export class XmlExporter implements ExporterPlugin {
  readonly name = 'xml';
  readonly fileExtension = 'xml';
  readonly mimeType = 'application/xml';

  export(tree: TreeNode): ExportResult {
    function renderXml(node: TreeNode, indent = '  '): string {
      const tag = node.type === 'directory' ? 'directory' : 'file';
      let xml = `${indent}<${tag} name="${node.name}">\n`;
      if (node.children) {
        for (const child of node.children) {
          xml += renderXml(child, `${indent}  `);
        }
      }
      xml += `${indent}</${tag}>\n`;
      return xml;
    }

    const content = `<?xml version="1.0" encoding="UTF-8"?>\n<tree>\n${renderXml(tree)}</tree>`;

    return {
      format: this.name,
      fileExtension: this.fileExtension,
      mimeType: this.mimeType,
      content,
      filename: `${tree.name}-tree.xml`,
    };
  }
}
