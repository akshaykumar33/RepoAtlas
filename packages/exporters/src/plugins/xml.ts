import { TreeNode } from '@repo-atlas/core';
import { ExporterPlugin, ExportResult } from '../types';

export class XmlExporter implements ExporterPlugin {
  readonly name = 'xml';
  readonly fileExtension = 'xml';
  readonly mimeType = 'application/xml';

  export(tree: TreeNode): ExportResult {
    const lines: string[] = ['<?xml version="1.0" encoding="UTF-8"?>'];

    function escapeXml(str: string): string {
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
    }

    function toXml(node: TreeNode, indent: string) {
      const tagName = node.type === 'directory' ? 'directory' : 'file';
      const nameAttr = `name="${escapeXml(node.name)}"`;
      const pathAttr = `path="${escapeXml(node.relativePath)}"`;

      if (!node.children || node.children.length === 0) {
        lines.push(`${indent}<${tagName} ${nameAttr} ${pathAttr} />`);
        return;
      }

      lines.push(`${indent}<${tagName} ${nameAttr} ${pathAttr}>`);
      for (const child of node.children) {
        toXml(child, `${indent}  `);
      }
      lines.push(`${indent}</${tagName}>`);
    }

    toXml(tree, '');

    return {
      format: this.name,
      fileExtension: this.fileExtension,
      mimeType: this.mimeType,
      content: lines.join('\n'),
      filename: `${tree.name}-tree.xml`,
    };
  }
}
