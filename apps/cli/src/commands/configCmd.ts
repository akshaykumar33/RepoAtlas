import fs from 'node:fs/promises';
import path from 'node:path';
import { loadConfig } from '@repoatlasdev/config';
import { Command } from 'commander';

export async function configCommand(
  action: 'list' | 'get' | 'set',
  key?: string,
  value?: string,
  targetDir: string = process.cwd()
): Promise<string> {
  const configPath = path.resolve(targetDir, 'repo-atlas.config.json');
  const conf = await loadConfig(configPath);

  if (action === 'list') {
    return `RepoAtlas Configuration:\n${JSON.stringify(conf, null, 2)}`;
  }

  if (action === 'get' && key) {
    const val = (conf as Record<string, unknown>)[key];
    return `${key} = ${val !== undefined ? JSON.stringify(val) : 'undefined'}`;
  }

  if (action === 'set' && key && value !== undefined) {
    const parsedVal = !isNaN(Number(value))
      ? Number(value)
      : value === 'true'
        ? true
        : value === 'false'
          ? false
          : value;
    (conf as Record<string, unknown>)[key] = parsedVal;
    await fs.writeFile(configPath, JSON.stringify(conf, null, 2), 'utf-8');
    return `Set '${key}' to ${value}`;
  }

  return 'Invalid config command action or parameters.';
}

export function registerConfigCommand(program: Command) {
  const configCmd = program.command('config').description('Manage RepoAtlas configuration options');

  configCmd
    .command('list')
    .description('List resolved configuration options')
    .action(async () => {
      const res = await configCommand('list');
      console.log(res);
    });

  configCmd
    .command('get <key>')
    .description('Get a configuration value by key')
    .action(async (key: string) => {
      const res = await configCommand('get', key);
      console.log(res);
    });
}
