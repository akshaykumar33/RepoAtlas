import { TreeNode } from '@repoatlasdev/core';
import { BaseTreeRenderer } from '../engine/base';
import { IconResolver } from '@repoatlasdev/icons';

export class JsonTreeRenderer extends BaseTreeRenderer {
  readonly name = 'json';

  render(tree: TreeNode): string {
    return JSON.stringify(tree, null, 2);
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
