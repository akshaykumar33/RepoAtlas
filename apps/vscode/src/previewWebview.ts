import { TreeNode } from '@repoatlasdev/core';
import * as vscode from 'vscode';

export function renderPreviewWebview(context: vscode.ExtensionContext, tree: TreeNode) {
  const panel = vscode.window.createWebviewPanel(
    'repoAtlasPreview',
    `RepoAtlas Preview: ${tree.name}`,
    vscode.ViewColumn.Two,
    {
      enableScripts: true,
    }
  );

  function renderHtmlTree(node: TreeNode): string {
    const isDir = node.type === 'directory';
    const icon = isDir ? '📁' : '📄';
    let html = `<div style="margin-left: 16px; font-family: monospace; line-height: 1.6;">`;
    html += `<span>${icon} <strong>${node.name}</strong></span>`;

    if (node.children) {
      for (const child of node.children) {
        html += renderHtmlTree(child);
      }
    }
    html += `</div>`;
    return html;
  }

  panel.webview.html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>RepoAtlas Interactive Preview</title>
      <style>
        body {
          font-family: var(--vscode-font-family);
          background-color: var(--vscode-editor-background);
          color: var(--vscode-editor-foreground);
          padding: 20px;
        }
        h2 { color: #3b82f6; }
      </style>
    </head>
    <body>
      <h2>🗺️ RepoAtlas Interactive Tree Preview</h2>
      <hr />
      ${renderHtmlTree(tree)}
    </body>
    </html>
  `;
}
