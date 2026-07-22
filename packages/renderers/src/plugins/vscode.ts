import { TreeNode } from '@repoatlasdev/core';
import { BaseTreeRenderer } from '../engine/base';
import { IconResolver } from '@repoatlasdev/icons';

export class VsCodeTreeRenderer extends BaseTreeRenderer {
  readonly name = 'vscode';

  protected renderNode(
    node: TreeNode,
    prefix: string,
    isLast: boolean,
    ctx: { iconResolver: IconResolver; useColor: boolean; showSize: boolean; maxDepth: number },
    depth: number
  ): string {
    const connector = isLast ? '└─ ' : '├─ ';
    const isDir = node.type === 'directory';
    const iconResolver = new IconResolver('vscode');
    const icon = isDir ? iconResolver.getFolderIcon() : iconResolver.getFileIcon(node.name);
    let line = `${prefix}${connector}${icon ? `${icon} ` : ''}${node.name}\n`;

    if (node.children && depth < ctx.maxDepth) {
      const childPrefix = prefix + (isLast ? '   ' : '│  ');
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (child) {
          line += this.renderNode(
            child,
            childPrefix,
            i === node.children.length - 1,
            ctx,
            depth + 1
          );
        }
      }
    }
    return line;
  }
}
