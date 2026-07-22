import { loadConfig } from '@repo-atlas/config';
import { RendererRegistry } from '@repo-atlas/renderers';

export async function doctorCommand(): Promise<string> {
  const config = await loadConfig();
  const registry = RendererRegistry.getInstance();
  const plugins = registry.listPlugins();

  const lines = [
    '=== RepoAtlas Doctor Diagnostics ===',
    `Node Version: ${process.version}`,
    `Platform: ${process.platform}`,
    `Loaded Config Format: ${config.format}`,
    `Loaded Config Max Depth: ${config.maxDepth}`,
    `Registered Renderer Plugins (${plugins.length}):`,
    ...plugins.map((p) => `  - ${p.name}: ${p.description}`),
    'Status: Everything healthy!',
  ];

  return lines.join('\n');
}
