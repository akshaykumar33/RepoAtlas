import { TreeNode } from '@repoatlasdev/core';
import { AsciiTreeRenderer } from './plugins/ascii';
import { JsonTreeRenderer } from './plugins/json';
import { MarkdownTreeRenderer } from './plugins/markdown';
import { MaterialTreeRenderer } from './plugins/material';
import { MermaidTreeRenderer } from './plugins/mermaid';
import { NerdFontTreeRenderer } from './plugins/nerd';
import { UnicodeTreeRenderer } from './plugins/unicode';
import { VsCodeTreeRenderer } from './plugins/vscode';
import { RenderOptions, TreeRenderer } from './types';

export class RendererRegistry {
  private renderers = new Map<string, TreeRenderer>();

  constructor() {
    this.register(new UnicodeTreeRenderer());
    this.register(new AsciiTreeRenderer());
    this.register(new VsCodeTreeRenderer());
    this.register(new MaterialTreeRenderer());
    this.register(new NerdFontTreeRenderer());
    this.register(new MarkdownTreeRenderer());
    this.register(new JsonTreeRenderer());
    this.register(new MermaidTreeRenderer());
  }

  register(renderer: TreeRenderer): void {
    this.renderers.set(renderer.name.toLowerCase(), renderer);
  }

  get(name: string): TreeRenderer | undefined {
    return this.renderers.get(name.toLowerCase());
  }

  list(): string[] {
    return Array.from(this.renderers.keys());
  }

  render(tree: TreeNode, theme = 'unicode', options?: RenderOptions): string {
    const renderer = this.get(theme);
    if (!renderer) {
      throw new Error(
        `Unsupported theme renderer '${theme}'. Available themes: ${this.list().join(', ')}`
      );
    }
    return renderer.render(tree, options);
  }
}
