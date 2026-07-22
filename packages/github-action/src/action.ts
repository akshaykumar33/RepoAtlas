import fs from 'node:fs/promises';
import path from 'node:path';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import { scanRepository } from '@repo-atlas/core';
import { RendererRegistry } from '@repo-atlas/renderers';
import { ExporterRegistry } from '@repo-atlas/exporters';
import { IconPack, IconResolver } from '@repo-atlas/icons';

const execAsync = promisify(exec);

export interface ActionInputs {
  targetDir?: string;
  outputFile?: string;
  theme?: string;
  icons?: string;
  depth?: number;
  sort?: 'name' | 'size' | 'type' | 'date';
  only?: 'all' | 'files' | 'directories';
  exclude?: string[];
  include?: string[];
  compact?: boolean;
  generateMermaid?: boolean;
  autoCommit?: boolean;
  commitMessage?: string;
}

export async function runAction(
  inputs: ActionInputs
): Promise<{ structurePath: string; mermaidPath?: string }> {
  const rootDir = path.resolve(inputs.targetDir || process.env.INPUT_TARGET_DIR || '.');
  const outputFile = inputs.outputFile || process.env.INPUT_OUTPUT_FILE || 'PROJECT_STRUCTURE.md';
  const theme = inputs.theme || process.env.INPUT_THEME || 'unicode';
  const icons = inputs.icons || process.env.INPUT_ICONS || 'emoji';
  const depth =
    inputs.depth ?? (process.env.INPUT_DEPTH ? parseInt(process.env.INPUT_DEPTH, 10) : undefined);
  const sort = inputs.sort || (process.env.INPUT_SORT as ActionInputs['sort']) || 'name';
  const only = inputs.only || (process.env.INPUT_ONLY as ActionInputs['only']) || 'all';
  const compact = inputs.compact ?? process.env.INPUT_COMPACT === 'true';
  const generateMermaid = inputs.generateMermaid ?? process.env.INPUT_GENERATE_MERMAID === 'true';
  const autoCommit = inputs.autoCommit ?? process.env.INPUT_AUTO_COMMIT !== 'false';
  const commitMessage =
    inputs.commitMessage ||
    process.env.INPUT_COMMIT_MESSAGE ||
    'docs(repo-atlas): update project structure visualizer';

  const rawExclude =
    inputs.exclude || (process.env.INPUT_EXCLUDE ? process.env.INPUT_EXCLUDE.split(/[\s,]+/) : []);

  // Scan repository
  const tree = await scanRepository({
    rootDir,
    maxDepth: depth,
    sortBy: sort,
    only,
    excludePatterns: rawExclude,
    respectGitIgnore: true,
  });

  const rendererRegistry = RendererRegistry.getInstance();
  const exporterRegistry = ExporterRegistry.getInstance();
  const iconResolver = new IconResolver({ pack: icons as IconPack });

  const rendered = await rendererRegistry.render(theme, tree, {
    compact,
    showIcons: true,
    iconResolver,
  });

  // Export structure document (Markdown)
  const mdExport = await exporterRegistry.export('md', tree, rendered.content);
  const structurePath = path.resolve(rootDir, outputFile);
  await fs.writeFile(structurePath, mdExport.content, 'utf-8');

  let mermaidPath: string | undefined = undefined;
  if (generateMermaid) {
    const mermaidExport = await exporterRegistry.export('mermaid', tree);
    mermaidPath = path.resolve(rootDir, 'MERMAID.md');
    const mmdContent = `# Architecture Diagram - ${tree.name}\n\n\`\`\`mermaid\n${mermaidExport.content}\n\`\`\`\n`;
    await fs.writeFile(mermaidPath, mmdContent, 'utf-8');
  }

  // Auto-commit git changes if enabled and running in git env
  if (autoCommit) {
    try {
      await execAsync('git config user.name "github-actions[bot]"', { cwd: rootDir });
      await execAsync('git config user.email "github-actions[bot]@users.noreply.github.com"', {
        cwd: rootDir,
      });
      await execAsync(`git add "${structurePath}"`, { cwd: rootDir });
      if (mermaidPath) {
        await execAsync(`git add "${mermaidPath}"`, { cwd: rootDir });
      }
      await execAsync(`git commit -m "${commitMessage}"`, { cwd: rootDir });
      await execAsync('git push', { cwd: rootDir });
    } catch {
      // Git commit or push ignored if no changes detected or non-git env
    }
  }

  return { structurePath, mermaidPath };
}
