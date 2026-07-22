import { TreeNode } from '@repoatlasdev/core';
import { IconPack, IconResolver } from '@repoatlasdev/icons';

export interface RenderOptions {
  icons?: IconPack;
  iconResolver?: IconResolver;
  useColor?: boolean;
  showSize?: boolean;
  maxDepth?: number;
}

export interface TreeRenderer {
  readonly name: string;
  render(tree: TreeNode, options?: RenderOptions): string;
}
