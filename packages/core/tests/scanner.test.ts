import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { scanRepository } from '../src/index';

describe('Core Scanner', () => {
  it('scans a directory and returns TreeNode structure', async () => {
    const rootDir = path.resolve(__dirname, '..');
    const tree = await scanRepository({ rootDir, maxDepth: 2 });

    expect(tree).toBeDefined();
    expect(tree.type).toBe('directory');
    expect(tree.children).toBeDefined();
    expect(tree.children!.length).toBeGreaterThan(0);
  });
});
