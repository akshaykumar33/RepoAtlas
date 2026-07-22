import fs from 'node:fs/promises';
import path from 'node:path';
import { loadConfig } from '@repo-atlas/config';

export async function configCommand(
  action: 'get' | 'set' | 'list',
  key?: string,
  value?: string,
  targetDir?: string
): Promise<string> {
  const cwd = path.resolve(targetDir || process.cwd());
  const config = await loadConfig(cwd);

  if (action === 'list') {
    return ['=== RepoAtlas Configuration ===', JSON.stringify(config, null, 2)].join('\n');
  }

  if (action === 'get') {
    if (!key) throw new Error('Please specify a configuration key to get.');
    const val = (config as Record<string, unknown>)[key];
    if (val === undefined) {
      return `Key '${key}' is not set.`;
    }
    return `${key} = ${JSON.stringify(val)}`;
  }

  if (action === 'set') {
    if (!key || value === undefined) throw new Error('Usage: repo-atlas config set <key> <value>');
    const configFilePath = path.join(cwd, 'repo-atlas.config.json');

    let currentConfig: Record<string, unknown> = {};
    try {
      const content = await fs.readFile(configFilePath, 'utf-8');
      currentConfig = JSON.parse(content);
    } catch {
      // Create new config file
    }

    // Parse primitive values
    let parsedValue: unknown = value;
    if (value === 'true') parsedValue = true;
    else if (value === 'false') parsedValue = false;
    else if (!isNaN(Number(value))) parsedValue = Number(value);

    currentConfig[key] = parsedValue;
    await fs.writeFile(configFilePath, JSON.stringify(currentConfig, null, 2), 'utf-8');
    return `Set '${key}' to ${JSON.stringify(parsedValue)} in ${configFilePath}`;
  }

  throw new Error(`Unknown config action '${action}'.`);
}
