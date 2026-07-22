import fs from 'node:fs/promises';
import path from 'node:path';
import { loadConfig } from '@repo-atlas/config';
import { OnlyOption, scanRepository, SortOption } from '@repo-atlas/core';
import { IconPack, IconResolver } from '@repo-atlas/icons';
import { RendererRegistry } from '@repo-atlas/renderers';

export interface GenerateCmdOptions {
  exclude?: string[];
  include?: string[];
  only?: OnlyOption;
  depth?: number;
  output?: string;
  theme?: string;
  format?: string;
  icons?: string | boolean;
  sort?: SortOption;
  gitignore?: boolean;
  config?: string;
  watch?: boolean;
  compact?: boolean;
  color?: boolean;
  showSize?: boolean;
}

export async function generateCommand(
  targetDir: string,
  options: GenerateCmdOptions
): Promise<string> {
  const absoluteTarget = path.resolve(targetDir || process.cwd());

  let customCwd = absoluteTarget;
  if (options.config) {
    const configStat = await fs.stat(options.config);
    if (configStat.isFile()) {
      customCwd = path.dirname(path.resolve(options.config));
    }
  }

  const loadedConfig = await loadConfig(customCwd, {
    format: options.theme || options.format,
    maxDepth: options.depth,
    showSize: options.showSize,
    outputFile: options.output,
  });

  const selectedFormat = options.theme || options.format || loadedConfig.format || 'unicode';

  const ignorePatterns = [...(loadedConfig.ignorePatterns || []), ...(options.exclude || [])];

  const tree = await scanRepository({
    rootDir: absoluteTarget,
    maxDepth: options.depth ?? loadedConfig.maxDepth,
    ignorePatterns,
    includePatterns: options.include,
    excludePatterns: options.exclude,
    only: options.only,
    sortBy: options.sort || 'name',
    respectGitIgnore: options.gitignore ?? true,
    includeHidden: loadedConfig.includeHidden,
  });

  let packName: IconPack = 'emoji';
  if (typeof options.icons === 'string') {
    packName = options.icons as IconPack;
  } else if (typeof options.icons === 'boolean') {
    packName = options.icons ? 'emoji' : 'plain';
  } else if (loadedConfig.iconPack) {
    packName = loadedConfig.iconPack as IconPack;
  }

  const iconResolver = new IconResolver({ pack: packName });
  const registry = RendererRegistry.getInstance();

  const rendered = await registry.render(selectedFormat, tree, {
    showSize: options.showSize ?? loadedConfig.showSize,
    compact: options.compact ?? false,
    useColor: options.color ?? false,
    showIcons: options.icons !== false,
    iconResolver,
  });

  if (options.output) {
    const outputPath = path.resolve(options.output);
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, rendered.content, 'utf-8');
    return `Output successfully saved to ${outputPath}`;
  }

  return rendered.content;
}
