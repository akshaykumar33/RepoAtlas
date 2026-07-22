import fs from 'node:fs/promises';
import path from 'node:path';
import { loadConfig } from '@repo-atlas/config';
import { scanRepository } from '@repo-atlas/core';
import { IconResolver } from '@repo-atlas/icons';
import { RendererRegistry } from '@repo-atlas/renderers';

export interface GenerateCmdOptions {
  format?: string;
  depth?: number;
  iconPack?: 'emoji' | 'unicode' | 'plain' | 'ascii' | 'vscode' | 'material' | 'nerd';
  showSize?: boolean;
  compact?: boolean;
  color?: boolean;
  output?: string;
}

export async function generateCommand(
  targetDir: string,
  options: GenerateCmdOptions
): Promise<string> {
  const absoluteTarget = path.resolve(targetDir || process.cwd());
  const config = await loadConfig(absoluteTarget, {
    format: options.format,
    maxDepth: options.depth,
    iconPack: options.iconPack,
    showSize: options.showSize,
    outputFile: options.output,
  });

  const tree = await scanRepository({
    rootDir: absoluteTarget,
    maxDepth: config.maxDepth,
    ignorePatterns: config.ignorePatterns,
    includeHidden: config.includeHidden,
  });

  const iconResolver = new IconResolver({ pack: config.iconPack });
  const registry = RendererRegistry.getInstance();

  const rendered = await registry.render(config.format, tree, {
    showSize: config.showSize,
    compact: options.compact ?? false,
    useColor: options.color ?? false,
    iconResolver,
  });

  if (config.outputFile) {
    const outputPath = path.resolve(config.outputFile);
    await fs.writeFile(outputPath, rendered.content, 'utf-8');
    return `Output successfully saved to ${outputPath}`;
  }

  return rendered.content;
}
