import { TreeNode } from '@repoatlasdev/core';
import { ExporterPlugin, ExportResult } from '../types';

export class HtmlExporter implements ExporterPlugin {
  readonly name = 'html';
  readonly fileExtension = 'html';
  readonly mimeType = 'text/html';

  export(tree: TreeNode): ExportResult {
    function renderHtml(node: TreeNode): string {
      const isDir = node.type === 'directory';
      let html = `<li class="${isDir ? 'folder' : 'file'}"><span>${isDir ? '📁' : '📄'} ${node.name}</span>`;
      if (node.children && node.children.length > 0) {
        html += '<ul>';
        for (const child of node.children) {
          html += renderHtml(child);
        }
        html += '</ul>';
      }
      html += '</li>';
      return html;
    }

    const bodyHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>${tree.name} - Project Structure</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 2rem; }
    ul { list-style: none; padding-left: 1.5rem; }
    .folder { font-weight: bold; color: #38bdf8; }
    .file { color: #cbd5e1; }
  </style>
</head>
<body>
  <h1>🗺️ RepoAtlas Structure: ${tree.name}</h1>
  <ul>${renderHtml(tree)}</ul>
</body>
</html>`;

    return {
      format: this.name,
      fileExtension: this.fileExtension,
      mimeType: this.mimeType,
      content: bodyHtml,
      filename: `${tree.name}-tree.html`,
    };
  }
}
