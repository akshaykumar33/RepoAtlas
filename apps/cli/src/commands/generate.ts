import fs from 'node:fs/promises';
import path from 'node:path';
import { loadConfig } from '@repoatlasdev/config';
import { OnlyOption, scanRepository, SortOption } from '@repoatlasdev/core';
import { IconPack, IconResolver } from '@repoatlasdev/icons';
import { RendererRegistry } from '@repoatlasdev/renderers';
import { Command } from 'commander';

export interface GenerateCmdOptions {
  theme?: string;
  icons?: string;
  depth?: number;
  sort?: SortOption;
  only?: OnlyOption;
  exclude?: string[];
  include?: string[];
  gitignore?: boolean;
  config?: string;
  watch?: boolean;
  compact?: boolean;
  color?: boolean;
  showSize?: boolean;
  output?: string;
}

export async function generateCommand(
  dirArg?: string,
  options: GenerateCmdOptions = {}
): Promise<string> {
  const targetDir = path.resolve(dirArg || '.');
  const fileConfig = await loadConfig(options.config);

  const maxDepth = options.depth ?? fileConfig.maxDepth;
  const themeName = options.theme ?? fileConfig.theme ?? 'unicode';
  const iconPack = options.icons ?? fileConfig.icons ?? 'emoji';
  const sortBy = options.sort ?? fileConfig.sort ?? 'name';
  const only = options.only ?? fileConfig.only ?? 'all';
  const respectGitIgnore = options.gitignore !== false && (fileConfig.respectGitIgnore ?? true);
  const exclude = options.exclude ?? fileConfig.exclude ?? [];

  const tree = await scanRepository({
    rootDir: targetDir,
    maxDepth,
    ignorePatterns: exclude,
    respectGitIgnore,
    sortBy,
    only,
  });

  const registry = new RendererRegistry();
  const iconResolver = new IconResolver(iconPack as IconPack);
  const rendered = registry.render(tree, themeName, {
    iconResolver,
    useColor: options.color !== false,
    showSize: !!options.showSize,
    maxDepth,
  });

  if (options.output) {
    const outputPath = path.resolve(options.output);
    await fs.writeFile(outputPath, rendered, 'utf-8');
  }

  return rendered;
}

export function registerGenerateCommand(program: Command) {
  program
    .command('generate [dir]')
    .alias('gen')
    .description('Generate visual repository tree structure')
    .action(async (dirArg: string | undefined, options: GenerateCmdOptions) => {
      try {
        const output = await generateCommand(dirArg, options);
        if (!options.output) {
          console.log(output);
        } else {
          console.log(`✨ Saved to ${options.output}`);
        }
      } catch (err) {
        console.error(`❌ Error: ${err}`);
        process.exit(1);
      }
    });
}
