import { TreeNode } from '@repoatlasdev/core';
import { BaseTreeRenderer } from '../engine/base';
import { IconResolver } from '@repoatlasdev/icons';

export class MermaidTreeRenderer extends BaseTreeRenderer {
  readonly name = 'mermaid';

  render(tree: TreeNode): string {
    let out = 'graph TD\n';
    function walk(node: TreeNode) {
      if (node.children) {
        for (const child of node.children) {
          const parentClean = node.name.replace(/[^a-zA-Z0-9_]/g, '_');
          const childClean = child.name.replace(/[^a-zA-Z0-9_]/g, '_');
          out += `  ${parentClean}["${node.name}"] --> ${childClean}["${child.name}"]\n`;
          walk(child);
        }
      }
    }
    walk(tree);
    return out;
  }

  protected renderNode(
    _node: TreeNode,
    _prefix: string,
    _isLast: boolean,
    _ctx: { iconResolver: IconResolver; useColor: boolean; showSize: boolean; maxDepth: number },
    _depth: number
  ): string {
    return '';
  }
}
