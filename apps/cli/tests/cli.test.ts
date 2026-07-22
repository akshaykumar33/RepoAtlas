import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { configCommand } from '../src/commands/configCmd';
import { doctorCommand } from '../src/commands/doctor';
import { generateCommand } from '../src/commands/generate';
import { initCommand } from '../src/commands/init';

describe('CLI Commands & Options Suite', () => {
  it('runs generateCommand with custom depth and theme', async () => {
    const rootDir = path.resolve(__dirname, '../../..');
    const result = await generateCommand(rootDir, { theme: 'vscode', depth: 2 });

    expect(result).toBeDefined();
    expect(result).toContain('repo-atlas');
    expect(result).toContain('packages');
  });

  it('runs generateCommand with --only directories filter', async () => {
    const rootDir = path.resolve(__dirname, '../../..');
    const result = await generateCommand(rootDir, { only: 'directories', depth: 2 });

    expect(result).toBeDefined();
    expect(result).toContain('apps');
    expect(result).toContain('packages');
  });

  it('runs generateCommand with --sort size option', async () => {
    const rootDir = path.resolve(__dirname, '../../..');
    const result = await generateCommand(rootDir, { sort: 'size', showSize: true, depth: 2 });

    expect(result).toBeDefined();
    expect(result).toContain('repo-atlas');
  });

  it('runs doctorCommand and returns system diagnostics', async () => {
    const output = await doctorCommand();
    expect(output).toContain('RepoAtlas Doctor Diagnostics');
    expect(output).toContain('vscode');
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

  it('runs configCommand list, get, and set', async () => {
    const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'repo-atlas-config-test-'));
    try {
      await initCommand(tmpDir);
      const listOutput = await configCommand('list', undefined, undefined, tmpDir);
      expect(listOutput).toContain('RepoAtlas Configuration');

      const setOutput = await configCommand('set', 'maxDepth', '5', tmpDir);
      expect(setOutput).toContain("Set 'maxDepth' to 5");

      const getOutput = await configCommand('get', 'maxDepth', undefined, tmpDir);
      expect(getOutput).toContain('maxDepth = 5');
    } finally {
      await fs.rm(tmpDir, { recursive: true, force: true });
    }
  });
});
