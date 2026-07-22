import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { IgnoreFilter, scanRepository } from '../src/index';

describe('Core Scanner Engine', () => {
  it('scans a directory and returns clean TreeNode structure with metadata', async () => {
    const rootDir = path.resolve(__dirname, '..');
    const tree = await scanRepository({ rootDir, maxDepth: 2, detectProject: true });

    expect(tree).toBeDefined();
    expect(tree.type).toBe('directory');
    expect(tree.id).toBe('.');
    expect(tree.metadata).toBeDefined();
    expect(tree.children).toBeDefined();
    expect(tree.children!.length).toBeGreaterThan(0);
  });

  it('respects maxDepth scan limit', async () => {
    const rootDir = path.resolve(__dirname, '../../..');
    const tree = await scanRepository({ rootDir, maxDepth: 1 });

    expect(tree.children).toBeDefined();
    for (const child of tree.children!) {
      if (child.type === 'directory') {
        expect(child.children).toHaveLength(0);
      }
    }
  });

  it('correctly filters ignored files via IgnoreFilter', () => {
    const filter = new IgnoreFilter(['custom-ignore.log']);
    expect(filter.isIgnored('node_modules', true)).toBe(true);
    expect(filter.isIgnored('custom-ignore.log', false)).toBe(true);
    expect(filter.isIgnored('src/index.ts', false)).toBe(false);
  });
});
