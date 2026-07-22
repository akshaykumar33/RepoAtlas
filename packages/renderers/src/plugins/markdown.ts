import { TreeNode } from '@repoatlasdev/core';
import { BaseTreeRenderer } from '../engine/base';
import { IconResolver } from '@repoatlasdev/icons';

export class MarkdownTreeRenderer extends BaseTreeRenderer {
  readonly name = 'markdown';

  protected renderNode(
    node: TreeNode,
    prefix: string,
    isLast: boolean,
    ctx: { iconResolver: IconResolver; useColor: boolean; showSize: boolean; maxDepth: number },
    depth: number
  ): string {
    const indent = '  '.repeat(depth);
    const icon = ctx.iconResolver.getFileIcon(node.name);
    let line = `${indent}- ${icon ? `${icon} ` : ''}**${node.name}**\n`;

    if (node.children && depth < ctx.maxDepth) {
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (child) {
          line += this.renderNode(child, prefix, i === node.children.length - 1, ctx, depth + 1);
        }
      }
    }
    return line;
  }
}
