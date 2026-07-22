import { describe, expect, it } from 'vitest';
import { TreeNode } from '@repo-atlas/core';
import { RendererRegistry } from '../src/index';

const mockTree: TreeNode = {
  id: '.',
  name: 'root',
  path: '/root',
  relativePath: '.',
  type: 'directory',
  children: [
    {
      id: 'src',
      name: 'src',
      path: '/root/src',
      relativePath: 'src',
      type: 'directory',
      children: [
        {
          id: 'src/components',
          name: 'components',
          path: '/root/src/components',
          relativePath: 'src/components',
          type: 'directory',
          children: [
            {
              id: 'src/components/index.ts',
              name: 'index.ts',
              path: '/root/src/components/index.ts',
              relativePath: 'src/components/index.ts',
              type: 'file',
              metadata: { sizeBytes: 1024, extension: 'ts', modifiedAt: new Date().toISOString() },
            },
          ],
        },
      ],
    },
    {
      id: 'README.md',
      name: 'README.md',
      path: '/root/README.md',
      relativePath: 'README.md',
      type: 'file',
      metadata: { sizeBytes: 2048, extension: 'md', modifiedAt: new Date().toISOString() },
    },
  ],
  metadata: { modifiedAt: new Date().toISOString() },
};

describe('Multi-Theme Rendering Engine', () => {
  const registry = RendererRegistry.getInstance();

  it('renders ASCII theme format', async () => {
    const result = await registry.render('ascii', mockTree, { showIcons: false });
    expect(result.format).toBe('ascii');
    expect(result.content).toContain('root');
    expect(result.content).toContain('|-- src');
    expect(result.content).toContain('`-- index.ts');
  });

  it('renders Unicode theme format', async () => {
    const result = await registry.render('unicode', mockTree, { showIcons: false });
    expect(result.format).toBe('unicode');
    expect(result.content).toContain('├── src');
    expect(result.content).toContain('└── index.ts');
  });

  it('renders VSCode style format', async () => {
    const result = await registry.render('vscode', mockTree);
    expect(result.format).toBe('vscode');
    expect(result.content).toContain('├─ 📁 src');
  });

  it('renders Material Theme format with colors', async () => {
    const result = await registry.render('material', mockTree, { useColor: true });
    expect(result.format).toBe('material');
    expect(result.content).toContain('root');
  });

  it('renders Nerd Font format', async () => {
    const result = await registry.render('nerd-font', mockTree);
    expect(result.format).toBe('nerd-font');
    expect(result.content).toContain('root');
  });

  it('supports Compact Mode (collapsing single-child folder chains)', async () => {
    const result = await registry.render('unicode', mockTree, { compact: true, showIcons: false });
    expect(result.content).toContain('src/components');
  });
});
