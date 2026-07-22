import { TreeNode } from '@repoatlasdev/core';
import { IconResolver } from '@repoatlasdev/icons';
import { RenderOptions, TreeRenderer } from '../types';

export abstract class BaseTreeRenderer implements TreeRenderer {
  abstract readonly name: string;

  render(tree: TreeNode, options: RenderOptions = {}): string {
    const iconResolver = options.iconResolver ?? new IconResolver(options.icons ?? 'unicode');
    const useColor = options.useColor ?? false;
    const showSize = options.showSize ?? false;

    return this.renderNode(
      tree,
      '',
      true,
      { iconResolver, useColor, showSize, maxDepth: options.maxDepth ?? Infinity },
      0
    );
  }

  protected abstract renderNode(
    node: TreeNode,
    prefix: string,
    isLast: boolean,
    ctx: { iconResolver: IconResolver; useColor: boolean; showSize: boolean; maxDepth: number },
    depth: number
  ): string;
}
