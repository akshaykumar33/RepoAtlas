import { TreeNode } from '@repo-atlas/core';
import { ExporterPlugin, ExportOptions, ExportResult } from '../types';

export class HtmlExporter implements ExporterPlugin {
  readonly name = 'html';
  readonly fileExtension = 'html';
  readonly mimeType = 'text/html';

  export(tree: TreeNode, renderedContent?: string, options?: ExportOptions): ExportResult {
    const title = options?.title || `RepoAtlas - ${tree.name}`;
    const safeContent = renderedContent || tree.name;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    body {
      background-color: #0d1117;
      color: #c9d1d9;
      font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
      padding: 2rem;
      margin: 0;
    }
    h1 {
      color: #58a6ff;
      font-size: 1.5rem;
      border-bottom: 1px solid #30363d;
      padding-bottom: 0.5rem;
    }
    pre {
      background-color: #161b22;
      padding: 1.25rem;
      border-radius: 8px;
      border: 1px solid #30363d;
      overflow-x: auto;
      font-size: 0.95rem;
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <h1>${title}</h1>
  <pre><code>${safeContent}</code></pre>
</body>
</html>`;

    return {
      format: this.name,
      fileExtension: this.fileExtension,
      mimeType: this.mimeType,
      content: html,
      filename: `${tree.name}-structure.html`,
    };
  }
}
