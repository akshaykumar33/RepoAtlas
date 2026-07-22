import path from 'node:path';
import { describe, expect, it, vi } from 'vitest';

vi.mock('vscode', () => ({
  workspace: {
    workspaceFolders: [{ uri: { fsPath: path.resolve(__dirname, '../../..') } }],
    getConfiguration: () => ({
      get: (key: string) => {
        if (key === 'maxDepth') return 4;
        if (key === 'respectGitIgnore') return true;
        return undefined;
      },
    }),
    openTextDocument: vi.fn(),
  },
  commands: {
    registerCommand: vi.fn(),
  },
  window: {
    showInformationMessage: vi.fn(),
    showErrorMessage: vi.fn(),
    createWebviewPanel: vi.fn(),
  },
}));

import { generateStructure } from '../src/extension';
import { getWebviewContent } from '../src/previewWebview';

describe('VSCode Extension Suite', () => {
  it('generates structure for workspace root', async () => {
    const rootDir = path.resolve(__dirname, '../../..');
    const result = await generateStructure(rootDir, 'unicode');

    expect(result).toBeDefined();
    expect(result.tree).toBeDefined();
    expect(result.rendered).toContain('repo-atlas');
    expect(result.rendered).toContain('packages');
  });

  it('generates Webview HTML content', async () => {
    const rootDir = path.resolve(__dirname, '../../..');
    const { tree, rendered } = await generateStructure(rootDir, 'vscode');
    const html = getWebviewContent(tree, rendered, 'VSCode');

    expect(html).toContain('<!DOCTYPE html>');
    expect(html).toContain('RepoAtlas Preview');
    expect(html).toContain('repo-atlas');
  });
});
