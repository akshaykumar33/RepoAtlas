import fs from 'node:fs/promises';
import path from 'node:path';
import * as core from '@actions/core';
import * as exec from '@actions/exec';
import { scanRepository } from '@repoatlasdev/core';
import { ExporterRegistry } from '@repoatlasdev/exporters';
import { IconPack, IconResolver } from '@repoatlasdev/icons';
import { RendererRegistry } from '@repoatlasdev/renderers';

export async function runAction(): Promise<void> {
  try {
    const targetDirInput = core.getInput('target_dir') || '.';
    const outputFile = core.getInput('output_file') || 'PROJECT_STRUCTURE.md';
    const theme = core.getInput('theme') || 'unicode';
    const iconPack = core.getInput('icons') || 'emoji';
    const maxDepthInput = core.getInput('depth');
    const sortBy = core.getInput('sort') || 'name';
    const only = core.getInput('only') || 'all';
    const generateMermaid = core.getInput('generate_mermaid') === 'true';
    const autoCommit = core.getInput('auto_commit') === 'true';
    const commitMessage =
      core.getInput('commit_message') ||
      'docs: update repository structure visualization [skip ci]';

    const rootDir = path.resolve(process.cwd(), targetDirInput);
    const maxDepth = maxDepthInput ? parseInt(maxDepthInput, 10) : Infinity;

    core.info(`🔍 Scanning repository at: ${rootDir}`);
    const tree = await scanRepository({
      rootDir,
      maxDepth,
      sortBy: sortBy as 'name' | 'size' | 'type',
      only: only as 'all' | 'files' | 'directories',
    });

    const rendererRegistry = new RendererRegistry();
    const iconResolver = new IconResolver(iconPack as IconPack);
    const renderedContent = rendererRegistry.render(tree, theme, { iconResolver });

    const outputPath = path.resolve(rootDir, outputFile);
    await fs.writeFile(outputPath, renderedContent, 'utf-8');
    core.info(`✅ Generated repository structure at: ${outputPath}`);

    if (generateMermaid) {
      const exporterRegistry = new ExporterRegistry();
      const mermaidResult = exporterRegistry.export(tree, 'mermaid');
      const mermaidPath = path.resolve(rootDir, 'MERMAID.md');
      await fs.writeFile(mermaidPath, String(mermaidResult.content), 'utf-8');
      core.info(`🎨 Generated Mermaid diagram at: ${mermaidPath}`);
    }

    if (autoCommit) {
      core.info('🤖 Automating git commit and push...');
      await exec.exec('git', ['config', 'user.name', 'github-actions[bot]']);
      await exec.exec('git', [
        'config',
        'user.email',
        'github-actions[bot]@users.noreply.github.com',
      ]);
      await exec.exec('git', ['add', outputFile]);
      if (generateMermaid) {
        await exec.exec('git', ['add', 'MERMAID.md']);
      }

      const statusExit = await exec.exec('git', ['diff', '--staged', '--quiet'], {
        ignoreReturnCode: true,
      });
      if (statusExit !== 0) {
        await exec.exec('git', ['commit', '-m', commitMessage]);
        await exec.exec('git', ['push']);
        core.info('🚀 Repository structure changes committed and pushed cleanly!');
      } else {
        core.info('ℹ️ No changes detected in structure output.');
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(`RepoAtlas Action Failed: ${error.message}`);
    } else {
      core.setFailed(`RepoAtlas Action Failed: ${String(error)}`);
    }
  }
}
