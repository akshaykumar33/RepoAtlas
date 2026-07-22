import { TreeNode } from '@repo-atlas/core';
import { ExporterPlugin, ExportResult } from '../types';

export class MermaidExporter implements ExporterPlugin {
  readonly name = 'mermaid';
  readonly fileExtension = 'mmd';
  readonly mimeType = 'text/x-mermaid';

  export(tree: TreeNode): ExportResult {
    const lines: string[] = ['graph TD'];
    let counter = 0;

    function processNode(node: TreeNode, parentId?: string) {
      const id = `n_${++counter}`;
      lines.push(`  ${id}["${node.name}"]`);
      if (parentId) {
        lines.push(`  ${parentId} --> ${id}`);
      }
      if (node.children) {
        for (const child of node.children) {
          processNode(child, id);
        }
      }
    }

    processNode(tree);

    return {
      format: this.name,
      fileExtension: this.fileExtension,
      mimeType: this.mimeType,
      content: lines.join('\n'),
      filename: `${tree.name}-diagram.mmd`,
    };
  }
}
