import { TreeNode } from '@repoatlasdev/core';
import { describe, expect, it } from 'vitest';
import { RendererRegistry } from '../src/registry';

describe('Multi-Theme Rendering Engine', () => {
  const sampleTree: TreeNode = {
    id: '.',
    name: 'my-project',
    path: '/path/to/my-project',
    relativePath: '.',
    type: 'directory',
    children: [
      {
        id: 'src',
        name: 'src',
        path: '/path/to/my-project/src',
        relativePath: 'src',
        type: 'directory',
        children: [
          {
            id: 'src/index.ts',
            name: 'index.ts',
            path: '/path/to/my-project/src/index.ts',
            relativePath: 'src/index.ts',
            type: 'file',
          },
        ],
      },
      {
        id: 'package.json',
        name: 'package.json',
        path: '/path/to/my-project/package.json',
        relativePath: 'package.json',
        type: 'file',
      },
    ],
  };

  it('renders ASCII theme format', () => {
    const registry = new RendererRegistry();
    const result = registry.render(sampleTree, 'ascii');
    expect(result).toContain('src');
    expect(result).toContain('index.ts');
  });

  it('renders Unicode theme format', () => {
    const registry = new RendererRegistry();
    const result = registry.render(sampleTree, 'unicode');
    expect(result).toContain('📁 src');
  });

  it('renders VSCode style format', () => {
    const registry = new RendererRegistry();
    const result = registry.render(sampleTree, 'vscode');
    expect(result).toContain('📁 src');
  });

  it('renders Material Theme format with colors', () => {
    const registry = new RendererRegistry();
    const result = registry.render(sampleTree, 'material', { useColor: true });
    expect(result).toBeDefined();
  });

  it('renders Nerd Font format', () => {
    const registry = new RendererRegistry();
    const result = registry.render(sampleTree, 'nerd-font');
    expect(result).toBeDefined();
  });

  it('supports max depth limit options', () => {
    const registry = new RendererRegistry();
    const result = registry.render(sampleTree, 'unicode', { maxDepth: 1 });
    expect(result).toContain('src');
    expect(result).not.toContain('index.ts');
  });
});
