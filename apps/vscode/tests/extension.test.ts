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

import { scanRepository } from '@repoatlasdev/core';
import { RendererRegistry } from '@repoatlasdev/renderers';

describe('VSCode Extension Suite', () => {
  it('generates structure for workspace root', async () => {
    const rootDir = path.resolve(__dirname, '../../..');
    const tree = await scanRepository({ rootDir, maxDepth: 2 });
    const registry = new RendererRegistry();
    const rendered = registry.render(tree, 'unicode');

    expect(tree).toBeDefined();
    expect(rendered).toContain('packages');
  });
});
