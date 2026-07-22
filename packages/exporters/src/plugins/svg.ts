import { TreeNode } from '@repoatlasdev/core';
import { ExporterPlugin, ExportResult } from '../types';

export class SvgExporter implements ExporterPlugin {
  readonly name = 'svg';
  readonly fileExtension = 'svg';
  readonly mimeType = 'image/svg+xml';

  export(tree: TreeNode): ExportResult {
    let yPos = 30;
    const lines: string[] = [];

    function renderSvgNode(node: TreeNode, x: number) {
      const icon = node.type === 'directory' ? '📁' : '📄';
      lines.push(
        `<text x="${x}" y="${yPos}" fill="#e2e8f0" font-family="monospace" font-size="14">${icon} ${node.name}</text>`
      );
      yPos += 24;

      if (node.children) {
        for (const child of node.children) {
          renderSvgNode(child, x + 20);
        }
      }
    }

    renderSvgNode(tree, 20);

    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="${yPos + 20}" style="background:#0f172a;">
${lines.join('\n')}
</svg>`;

    return {
      format: this.name,
      fileExtension: this.fileExtension,
      mimeType: this.mimeType,
      content: svgContent,
      filename: `${tree.name}-tree.svg`,
    };
  }
}
