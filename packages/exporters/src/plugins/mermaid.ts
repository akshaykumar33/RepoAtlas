import { TreeNode } from '@repoatlasdev/core';
import { ExporterPlugin, ExportResult } from '../types';

export class MermaidExporter implements ExporterPlugin {
  readonly name = 'mermaid';
  readonly fileExtension = 'mermaid';
  readonly mimeType = 'text/plain';

  export(tree: TreeNode): ExportResult {
    const lines: string[] = ['graph TD'];
    let counter = 0;

    function processNode(node: TreeNode, parentId?: string): string {
      const currentId = `node_${counter++}`;
      const isDir = node.type === 'directory';
      const shape = isDir ? `["📁 ${node.name}"]` : `["📄 ${node.name}"]`;

      lines.push(`  ${currentId}${shape}`);
      if (parentId) {
        lines.push(`  ${parentId} --> ${currentId}`);
      }

      if (node.children) {
        for (const child of node.children) {
          processNode(child, currentId);
        }
      }
      return currentId;
    }

    processNode(tree);

    return {
      format: this.name,
      fileExtension: this.fileExtension,
      mimeType: this.mimeType,
      content: lines.join('\n'),
      filename: `${tree.name}-diagram.mermaid`,
    };
  }
}
