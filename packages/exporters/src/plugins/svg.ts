import { TreeNode } from '@repo-atlas/core';
import { ExporterPlugin, ExportOptions, ExportResult } from '../types';

export class SvgExporter implements ExporterPlugin {
  readonly name = 'svg';
  readonly fileExtension = 'svg';
  readonly mimeType = 'image/svg+xml';

  export(tree: TreeNode, renderedContent?: string, options?: ExportOptions): ExportResult {
    const title = options?.title || tree.name;
    const lines = (renderedContent || tree.name).split('\n');
    const lineHeight = 20;
    const height = Math.max(300, lines.length * lineHeight + 80);
    const width = 800;

    const svgLines = lines
      .map((line, i) => {
        const escaped = line
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/ /g, '&#160;');
        return `<tspan x="20" y="${60 + i * lineHeight}">${escaped}</tspan>`;
      })
      .join('\n    ');

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" fill="#0d1117" rx="8"/>
  <text x="20" y="30" fill="#58a6ff" font-family="monospace" font-size="16" font-weight="bold">${title}</text>
  <text font-family="monospace" font-size="14" fill="#c9d1d9">
    ${svgLines}
  </text>
</svg>`;

    return {
      format: this.name,
      fileExtension: this.fileExtension,
      mimeType: this.mimeType,
      content: svg,
      filename: `${tree.name}-structure.svg`,
    };
  }
}
