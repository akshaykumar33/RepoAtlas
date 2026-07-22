import { TreeNode } from '@repo-atlas/core';
import { ExporterPlugin, ExportOptions, ExportResult } from './types';

export class ExporterRegistry {
  private static instance: ExporterRegistry;
  private plugins = new Map<string, ExporterPlugin>();

  public static getInstance(): ExporterRegistry {
    if (!ExporterRegistry.instance) {
      ExporterRegistry.instance = new ExporterRegistry();
    }
    return ExporterRegistry.instance;
  }

  register(plugin: ExporterPlugin): void {
    if (this.plugins.has(plugin.name)) {
      throw new Error(`Exporter plugin with format '${plugin.name}' is already registered.`);
    }
    this.plugins.set(plugin.name, plugin);
  }

  unregister(name: string): boolean {
    return this.plugins.delete(name);
  }

  get(name: string): ExporterPlugin | undefined {
    return this.plugins.get(name);
  }

  listPlugins(): ExporterPlugin[] {
    return Array.from(this.plugins.values());
  }

  async export(
    name: string,
    tree: TreeNode,
    renderedContent?: string,
    options?: ExportOptions
  ): Promise<ExportResult> {
    const plugin = this.plugins.get(name);
    if (!plugin) {
      const available = Array.from(this.plugins.keys()).join(', ');
      throw new Error(`Exporter '${name}' not found. Available exporters: ${available}`);
    }
    return plugin.export(tree, renderedContent, options);
  }
}
