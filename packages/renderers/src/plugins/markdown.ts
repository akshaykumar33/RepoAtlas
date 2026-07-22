import { TreeNode } from '@repo-atlas/core';
import { RenderOptions, RenderedOutput, RendererPlugin } from '../types';

export const markdownRendererPlugin: RendererPlugin = {
  name: 'markdown',
  description: 'Markdown code block tree renderer',
  fileExtension: 'md',
  render(tree: TreeNode, _options?: RenderOptions): RenderedOutput {
    const lines: string[] = ['```', tree.name];

    function renderNode(node: TreeNode, indent: string) {
      if (!node.children || node.children.length === 0) return;

      node.children.forEach((child, index) => {
        const isLast = index === node.children!.length - 1;
        const connector = isLast ? '└── ' : '├── ';
        const nextIndent = indent + (isLast ? '    ' : '│   ');

        lines.push(`${indent}${connector}${child.name}`);

        if (child.type === 'directory') {
          renderNode(child, nextIndent);
        }
      });
    }

    renderNode(tree, '');
    lines.push('```');

    return {
      format: 'markdown',
      content: lines.join('\n'),
    };
  },
};
