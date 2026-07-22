import { describe, expect, it } from 'vitest';
import { TreeNode } from '@repo-atlas/core';
import { RendererPlugin, RendererRegistry } from '../src/index';

const mockTree: TreeNode = {
  name: 'root',
  path: '/root',
  relativePath: '.',
  type: 'directory',
  children: [
    {
      name: 'src',
      path: '/root/src',
      relativePath: 'src',
      type: 'directory',
      children: [
        {
          name: 'index.ts',
          path: '/root/src/index.ts',
          relativePath: 'src/index.ts',
          type: 'file',
          metadata: { sizeBytes: 1024 },
        },
      ],
    },
    {
      name: 'README.md',
      path: '/root/README.md',
      relativePath: 'README.md',
      type: 'file',
      metadata: { sizeBytes: 2048 },
    },
  ],
};

describe('Renderers & Plugin Architecture', () => {
  const registry = RendererRegistry.getInstance();

  it('renders ASCII output format', async () => {
    const result = await registry.render('ascii', mockTree);
    expect(result.format).toBe('ascii');
    expect(result.content).toContain('root');
    expect(result.content).toContain('|-- src');
    expect(result.content).toContain('`-- index.ts');
  });

  it('renders Unicode output format', async () => {
    const result = await registry.render('unicode', mockTree, { showIcons: false });
    expect(result.format).toBe('unicode');
    expect(result.content).toContain('├── src');
    expect(result.content).toContain('└── index.ts');
  });

  it('renders JSON output format', async () => {
    const result = await registry.render('json', mockTree);
    const parsed = JSON.parse(result.content);
    expect(parsed.name).toBe('root');
  });

  it('allows registering a NEW output format plugin without modifying core code', async () => {
    // Custom YAML renderer plugin added dynamically
    const yamlPlugin: RendererPlugin = {
      name: 'custom-yaml',
      description: 'Custom YAML plugin format',
      fileExtension: 'yaml',
      render: (tree) => ({
        format: 'custom-yaml',
        content: `name: ${tree.name}\nchildren_count: ${tree.children?.length ?? 0}`,
      }),
    };

    registry.register(yamlPlugin);

    const result = await registry.render('custom-yaml', mockTree);
    expect(result.format).toBe('custom-yaml');
    expect(result.content).toBe('name: root\nchildren_count: 2');
  });
});
