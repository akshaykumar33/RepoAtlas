import { RendererPlugin, RenderOptions, RenderedOutput } from './types';
import { TreeNode } from '@repo-atlas/core';

export class RendererRegistry {
  private static instance: RendererRegistry;
  private plugins = new Map<string, RendererPlugin>();

  public static getInstance(): RendererRegistry {
    if (!RendererRegistry.instance) {
      RendererRegistry.instance = new RendererRegistry();
    }
    return RendererRegistry.instance;
  }

  register(plugin: RendererPlugin): void {
    if (this.plugins.has(plugin.name)) {
      throw new Error(`Renderer plugin with name '${plugin.name}' is already registered.`);
    }
    this.plugins.set(plugin.name, plugin);
  }

  unregister(name: string): boolean {
    return this.plugins.delete(name);
  }

  get(name: string): RendererPlugin | undefined {
    return this.plugins.get(name);
  }

  listPlugins(): RendererPlugin[] {
    return Array.from(this.plugins.values());
  }

  async render(name: string, tree: TreeNode, options?: RenderOptions): Promise<RenderedOutput> {
    const plugin = this.plugins.get(name);
    if (!plugin) {
      const available = Array.from(this.plugins.keys()).join(', ');
      throw new Error(`Renderer plugin '${name}' not found. Registered plugins: ${available}`);
    }
    return plugin.render(tree, options);
  }
}
