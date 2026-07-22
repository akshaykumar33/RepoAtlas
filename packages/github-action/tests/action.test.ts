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

      process.env.INPUT_TARGET_DIR = tmpDir;
      process.env.INPUT_OUTPUT_FILE = 'PROJECT_STRUCTURE.md';
      process.env.INPUT_THEME = 'unicode';
      process.env.INPUT_GENERATE_MERMAID = 'true';
      process.env.INPUT_AUTO_COMMIT = 'false';

      await runAction();

      const structContent = await fs.readFile(path.join(tmpDir, 'PROJECT_STRUCTURE.md'), 'utf-8');
      expect(structContent).toBeDefined();

      const mermaidContent = await fs.readFile(path.join(tmpDir, 'MERMAID.md'), 'utf-8');
      expect(mermaidContent).toContain('graph TD');
    } finally {
      await fs.rm(tmpDir, { recursive: true, force: true });
    }
  }, 20000);
});
