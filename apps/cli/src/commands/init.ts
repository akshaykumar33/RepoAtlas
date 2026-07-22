import fs from 'node:fs/promises';
import path from 'node:path';

export async function initCommand(targetDir?: string): Promise<string> {
  const destDir = path.resolve(targetDir || process.cwd());
  const configPath = path.join(destDir, 'repo-atlas.config.json');

  const defaultConfigContent = JSON.stringify(
    {
      format: 'unicode',
      maxDepth: 10,
      ignorePatterns: ['.git', 'node_modules', 'dist', '.turbo', '.DS_Store'],
      includeHidden: false,
      showSize: false,
      iconPack: 'emoji',
    },
    null,
    2
  );

  try {
    await fs.writeFile(configPath, defaultConfigContent, { flag: 'wx' });
    return `Created configuration file at ${configPath}`;
  } catch (err: unknown) {
    if (
      typeof err === 'object' &&
      err !== null &&
      'code' in err &&
      (err as { code: string }).code === 'EEXIST'
    ) {
      return `Configuration file already exists at ${configPath}`;
    }
    throw err;
  }
}
