import { TreeNode } from '@repo-atlas/core';
import { formatBytes } from '@repo-atlas/utils';
import { RenderOptions, RenderedOutput, RendererPlugin } from '../types';

export const asciiRendererPlugin: RendererPlugin = {
  name: 'ascii',
  description: 'ASCII text tree renderer',
  fileExtension: 'txt',
  render(tree: TreeNode, options?: RenderOptions): RenderedOutput {
    const lines: string[] = [tree.name];

    function renderNode(node: TreeNode, indent: string) {
      if (!node.children || node.children.length === 0) return;

      node.children.forEach((child, index) => {
        const isLast = index === node.children!.length - 1;
        const connector = isLast ? '`-- ' : '|-- ';
        const nextIndent = indent + (isLast ? '    ' : '|   ');

        let label = child.name;
        if (options?.showSize && child.metadata?.sizeBytes !== undefined) {
          label += ` (${formatBytes(child.metadata.sizeBytes)})`;
        }

        lines.push(`${indent}${connector}${label}`);

        if (child.type === 'directory') {
          renderNode(child, nextIndent);
        }
      });
    }

    renderNode(tree, '');

    return {
      format: 'ascii',
      content: lines.join('\n'),
    };
  },
};
