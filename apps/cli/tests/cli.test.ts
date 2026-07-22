import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { doctorCommand } from '../src/commands/doctor';
import { generateCommand } from '../src/commands/generate';
import { initCommand } from '../src/commands/init';

describe('CLI Commands', () => {
  it('runs generateCommand and outputs repository tree', async () => {
    const rootDir = path.resolve(__dirname, '../../..');
    const result = await generateCommand(rootDir, { format: 'ascii', depth: 2 });

    expect(result).toBeDefined();
    expect(result).toContain('repo-atlas');
    expect(result).toContain('packages');
  });

  it('runs doctorCommand and returns system diagnostics', async () => {
    const output = await doctorCommand();
    expect(output).toContain('RepoAtlas Doctor Diagnostics');
    expect(output).toContain('unicode');
  });

  it('runs initCommand and creates config file', async () => {
    const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'repo-atlas-test-'));
    try {
      const output = await initCommand(tmpDir);
      expect(output).toContain('Created configuration file');
    } finally {
      await fs.rm(tmpDir, { recursive: true, force: true });
    }
  });
});
