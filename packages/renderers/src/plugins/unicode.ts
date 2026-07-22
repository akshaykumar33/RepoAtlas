import { TreeNode } from '@repo-atlas/core';
import { IconResolver } from '@repo-atlas/icons';
import { formatBytes } from '@repo-atlas/utils';
import { RenderOptions, RenderedOutput, RendererPlugin } from '../types';

export const unicodeRendererPlugin: RendererPlugin = {
  name: 'unicode',
  description: 'Unicode box-drawing tree renderer',
  fileExtension: 'txt',
  render(tree: TreeNode, options?: RenderOptions): RenderedOutput {
    const iconResolver = options?.iconResolver || new IconResolver();
    const showIcons = options?.showIcons ?? true;

    const rootIcon = showIcons ? `${iconResolver.resolveFolder(true)} ` : '';
    const lines: string[] = [`${rootIcon}${tree.name}`];

    function renderNode(node: TreeNode, indent: string) {
      if (!node.children || node.children.length === 0) return;

      node.children.forEach((child, index) => {
        const isLast = index === node.children!.length - 1;
        const connector = isLast ? '└── ' : '├── ';
        const nextIndent = indent + (isLast ? '    ' : '│   ');

        let icon = '';
        if (showIcons) {
          icon =
            child.type === 'directory'
              ? `${iconResolver.resolveFolder(false)} `
              : `${iconResolver.resolveFile(child.name)} `;
        }

        let label = `${icon}${child.name}`;
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
      format: 'unicode',
      content: lines.join('\n'),
    };
  },
};
