import { RendererRegistry } from './registry';
import { asciiRendererPlugin } from './plugins/ascii';
import { unicodeRendererPlugin } from './plugins/unicode';
import { vscodeRendererPlugin } from './plugins/vscode';
import { materialRendererPlugin } from './plugins/material';
import { nerdFontRendererPlugin } from './plugins/nerd';
import { markdownRendererPlugin } from './plugins/markdown';
import { jsonRendererPlugin } from './plugins/json';
import { mermaidRendererPlugin } from './plugins/mermaid';

export * from './types';
export * from './registry';
export * from './theme/types';
export * from './theme/presets';
export * from './engine/base';
export * from './plugins/ascii';
export * from './plugins/unicode';
export * from './plugins/vscode';
export * from './plugins/material';
export * from './plugins/nerd';
export * from './plugins/markdown';
export * from './plugins/json';
export * from './plugins/mermaid';

// Auto-register built-in renderer plugins into default registry
const registry = RendererRegistry.getInstance();
registry.register(asciiRendererPlugin);
registry.register(unicodeRendererPlugin);
registry.register(vscodeRendererPlugin);
registry.register(materialRendererPlugin);
registry.register(nerdFontRendererPlugin);
registry.register(markdownRendererPlugin);
registry.register(jsonRendererPlugin);
registry.register(mermaidRendererPlugin);
