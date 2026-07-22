import { TreeNode } from '@repoatlasdev/core';
import { CsvExporter } from './plugins/csv';
import { DocxExporter } from './plugins/docx';
import { HtmlExporter } from './plugins/html';
import { JsonExporter } from './plugins/json';
import { MarkdownExporter } from './plugins/md';
import { MermaidExporter } from './plugins/mermaid';
import { PdfExporter } from './plugins/pdf';
import { PlantUmlExporter } from './plugins/plantuml';
import { PngExporter } from './plugins/png';
import { SvgExporter } from './plugins/svg';
import { TxtExporter } from './plugins/txt';
import { XmlExporter } from './plugins/xml';
import { YamlExporter } from './plugins/yaml';
import { ExporterPlugin, ExportResult } from './types';

export class ExporterRegistry {
  private plugins = new Map<string, ExporterPlugin>();

  constructor() {
    this.register(new TxtExporter());
    this.register(new MarkdownExporter());
    this.register(new HtmlExporter());
    this.register(new JsonExporter());
    this.register(new YamlExporter());
    this.register(new XmlExporter());
    this.register(new CsvExporter());
    this.register(new DocxExporter());
    this.register(new PdfExporter());
    this.register(new SvgExporter());
    this.register(new PngExporter());
    this.register(new MermaidExporter());
    this.register(new PlantUmlExporter());
  }

  register(plugin: ExporterPlugin): void {
    if (plugin && plugin.name) {
      this.plugins.set(plugin.name.toLowerCase(), plugin);
    }
  }

  get(name: string): ExporterPlugin | undefined {
    if (typeof name !== 'string') return undefined;
    return this.plugins.get(name.toLowerCase());
  }

  list(): string[] {
    return Array.from(this.plugins.keys());
  }

  export(tree: TreeNode, format: string | { format: string }): ExportResult {
    const fmt = typeof format === 'string' ? format : (format?.format ?? 'txt');
    const plugin = this.get(fmt);
    if (!plugin) {
      throw new Error(
        `Unsupported exporter format '${fmt}'. Available formats: ${this.list().join(', ')}`
      );
    }
    return plugin.export(tree);
  }
}
