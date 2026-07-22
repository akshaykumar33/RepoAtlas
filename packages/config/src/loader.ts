import fs from 'node:fs/promises';
import path from 'node:path';
import { RepoAtlasConfig } from './types';

export const DEFAULT_CONFIG: Required<RepoAtlasConfig> = {
  format: 'unicode',
  maxDepth: 10,
  ignorePatterns: ['.git', 'node_modules', 'dist', '.turbo', '.DS_Store'],
  includeHidden: false,
  showSize: false,
  iconPack: 'emoji',
  theme: 'default',
  outputFile: '',
};

export async function loadConfig(
  cwd: string = process.cwd(),
  cliOverrides?: Partial<RepoAtlasConfig>
): Promise<Required<RepoAtlasConfig>> {
  const configNames = ['repo-atlas.config.json', '.repo-atlasrc', '.repo-atlasrc.json'];

  let fileConfig: Partial<RepoAtlasConfig> = {};

  for (const name of configNames) {
    const fullPath = path.join(cwd, name);
    try {
      const content = await fs.readFile(fullPath, 'utf-8');
      fileConfig = JSON.parse(content);
      break;
    } catch {
      // Continue to next config file check
    }
  }

  return {
    ...DEFAULT_CONFIG,
    ...fileConfig,
    ...cliOverrides,
  };
}
