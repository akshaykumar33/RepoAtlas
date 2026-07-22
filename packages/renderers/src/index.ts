import { RendererRegistry } from './registry';
import { asciiRendererPlugin } from './plugins/ascii';
import { unicodeRendererPlugin } from './plugins/unicode';
import { markdownRendererPlugin } from './plugins/markdown';
import { jsonRendererPlugin } from './plugins/json';
import { mermaidRendererPlugin } from './plugins/mermaid';

export * from './types';
export * from './registry';
export * from './plugins/ascii';
export * from './plugins/unicode';
export * from './plugins/markdown';
export * from './plugins/json';
export * from './plugins/mermaid';

// Auto-register built-in renderer plugins into the default registry
const registry = RendererRegistry.getInstance();
registry.register(asciiRendererPlugin);
registry.register(unicodeRendererPlugin);
registry.register(markdownRendererPlugin);
registry.register(jsonRendererPlugin);
registry.register(mermaidRendererPlugin);
