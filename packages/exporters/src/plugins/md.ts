import { TreeNode } from '@repoatlasdev/core';
import { ExporterPlugin, ExportResult } from '../types';

export class MarkdownExporter implements ExporterPlugin {
  readonly name = 'md';
  readonly fileExtension = 'md';
  readonly mimeType = 'text/markdown';

  export(tree: TreeNode): ExportResult {
    function renderMd(node: TreeNode, depth = 0): string {
      const indent = '  '.repeat(depth);
      const icon = node.type === 'directory' ? '📁' : '📄';
      let md = `${indent}- ${icon} **${node.name}**\n`;

      if (node.children) {
        for (const child of node.children) {
          md += renderMd(child, depth + 1);
        }
      }
      return md;
    }

    const content = `# Project Structure: ${tree.name}\n\n\`\`\`\n${renderMd(tree)}\`\`\`\n`;

    return {
      format: this.name,
      fileExtension: this.fileExtension,
      mimeType: this.mimeType,
      content,
      filename: `${tree.name}-structure.md`,
    };
  }
}
