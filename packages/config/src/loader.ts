import fs from 'node:fs/promises';
import path from 'node:path';
import { RepoAtlasConfig } from './types';

export const DEFAULT_CONFIG: RepoAtlasConfig = {
  format: 'unicode',
  maxDepth: 4,
  ignorePatterns: [],
  includeHidden: false,
  showSize: false,
  iconPack: 'emoji',
  theme: 'unicode',
  outputFile: 'PROJECT_STRUCTURE.md',
};

export async function loadConfig(
  cwdOrConfigPath?: string,
  overrides?: Partial<RepoAtlasConfig>
): Promise<RepoAtlasConfig> {
  let fileConfig: Partial<RepoAtlasConfig> = {};

  if (cwdOrConfigPath && cwdOrConfigPath.endsWith('.json')) {
    try {
      const fullPath = path.resolve(cwdOrConfigPath);
      const content = await fs.readFile(fullPath, 'utf-8');
      fileConfig = JSON.parse(content);
    } catch {
      // Ignore
    }
  } else {
    const baseDir = cwdOrConfigPath ? path.resolve(cwdOrConfigPath) : process.cwd();
    const defaultFiles = ['repo-atlas.config.json', '.repo-atlasrc', '.repo-atlasrc.json'];
    for (const file of defaultFiles) {
      try {
        const fullPath = path.resolve(baseDir, file);
        const content = await fs.readFile(fullPath, 'utf-8');
        fileConfig = JSON.parse(content);
        break;
      } catch {
        // Ignore missing files
      }
    }
  }

  return { ...DEFAULT_CONFIG, ...fileConfig, ...overrides };
}
