import path from 'node:path';
import { scanRepository } from '@repoatlasdev/core';
import { RendererRegistry } from '@repoatlasdev/renderers';
import { describe, expect, it } from 'vitest';

describe('CLI Commands & Options Suite', () => {
  it('scans repository with custom depth and theme', async () => {
    const rootDir = path.resolve(__dirname, '../../..');
    const tree = await scanRepository({ rootDir, maxDepth: 2 });
    const registry = new RendererRegistry();
    const result = registry.render(tree, 'vscode');

    expect(result).toBeDefined();
    expect(result).toContain('packages');
  });

  it('scans repository with --only directories filter', async () => {
    const rootDir = path.resolve(__dirname, '../../..');
    const tree = await scanRepository({ rootDir, maxDepth: 2, only: 'directories' });
    const registry = new RendererRegistry();
    const result = registry.render(tree, 'unicode');

    expect(result).toBeDefined();
    expect(result).toContain('apps');
  });

  it('scans repository with --sort size option', async () => {
    const rootDir = path.resolve(__dirname, '../../..');
    const tree = await scanRepository({ rootDir, maxDepth: 2, sortBy: 'size' });
    const registry = new RendererRegistry();
    const result = registry.render(tree, 'unicode', { showSize: true });

    expect(result).toBeDefined();
    expect(result).toContain('packages');
  });
});
