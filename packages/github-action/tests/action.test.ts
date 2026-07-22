import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { runAction } from '../src/action';

describe('GitHub Action Suite', () => {
  it('runs action and creates PROJECT_STRUCTURE.md and MERMAID.md', async () => {
    const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'repo-atlas-action-test-'));
    try {
      await fs.writeFile(path.join(tmpDir, 'package.json'), '{}');
      await fs.mkdir(path.join(tmpDir, 'src'));
      await fs.writeFile(path.join(tmpDir, 'src', 'index.ts'), '// hello');

      const result = await runAction({
        targetDir: tmpDir,
        outputFile: 'PROJECT_STRUCTURE.md',
        theme: 'unicode',
        generateMermaid: true,
        autoCommit: false,
      });

      expect(result.structurePath).toBeDefined();
      expect(result.mermaidPath).toBeDefined();

      const structContent = await fs.readFile(result.structurePath, 'utf-8');
      expect(structContent).toContain('Project Structure');
      expect(structContent).toContain('src');

      const mermaidContent = await fs.readFile(result.mermaidPath!, 'utf-8');
      expect(mermaidContent).toContain('```mermaid');
    } finally {
      await fs.rm(tmpDir, { recursive: true, force: true });
    }
  });
});
