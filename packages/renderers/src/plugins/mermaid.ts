import { TreeNode } from '@repo-atlas/core';
import { RenderOptions, RenderedOutput, RendererPlugin } from '../types';

export const mermaidRendererPlugin: RendererPlugin = {
  name: 'mermaid',
  description: 'Mermaid graph diagram renderer',
  fileExtension: 'mmd',
  render(tree: TreeNode, _options?: RenderOptions): RenderedOutput {
    const lines: string[] = ['graph TD'];
    let idCounter = 0;

    function getId(): string {
      return `node_${++idCounter}`;
    }

    function processNode(node: TreeNode, parentId?: string) {
      const currentId = getId();
      const label = `${currentId}["${node.name}"]`;
      lines.push(`  ${label}`);

      if (parentId) {
        lines.push(`  ${parentId} --> ${currentId}`);
      }

      if (node.children) {
        for (const child of node.children) {
          processNode(child, currentId);
        }
      }
    }

    processNode(tree);

    return {
      format: 'mermaid',
      content: lines.join('\n'),
    };
  },
};
