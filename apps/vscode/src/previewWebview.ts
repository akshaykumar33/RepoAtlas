import { TreeNode } from '@repo-atlas/core';

export function getWebviewContent(
  tree: TreeNode,
  renderedText: string,
  currentTheme: string
): string {
  const safeTreeName = tree.name;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RepoAtlas Preview - ${safeTreeName}</title>
  <style>
    body {
      background-color: var(--vscode-editor-background, #1e1e1e);
      color: var(--vscode-editor-foreground, #d4d4d4);
      font-family: var(--vscode-editor-font-family, monospace);
      padding: 1.5rem;
      margin: 0;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--vscode-widget-border, #333);
      padding-bottom: 1rem;
      margin-bottom: 1.5rem;
    }
    h2 {
      margin: 0;
      color: var(--vscode-textLink-foreground, #3794ff);
    }
    .badge {
      background: var(--vscode-button-background, #0e639c);
      color: var(--vscode-button-foreground, #fff);
      padding: 0.25rem 0.75rem;
      border-radius: 4px;
      font-size: 0.85rem;
    }
    pre {
      background: var(--vscode-textCodeBlock-background, #141414);
      padding: 1.25rem;
      border-radius: 8px;
      border: 1px solid var(--vscode-widget-border, #2a2a2a);
      overflow-x: auto;
      font-size: 0.95rem;
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <div class="header">
    <h2>📂 ${safeTreeName}</h2>
    <span class="badge">Theme: ${currentTheme}</span>
  </div>

  <pre><code>${renderedText.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
</body>
</html>`;
}
