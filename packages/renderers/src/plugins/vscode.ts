import { TreeNode } from '@repo-atlas/core';
import { BaseTreeRenderer } from '../engine/base';
import { VSCODE_THEME } from '../theme/presets';
import { RenderOptions, RenderedOutput, RendererPlugin } from '../types';

export const vscodeRendererPlugin: RendererPlugin = {
  name: 'vscode',
  description: 'VSCode explorer style tree renderer',
  fileExtension: 'txt',
  render(tree: TreeNode, options?: RenderOptions): RenderedOutput {
    const baseRenderer = new BaseTreeRenderer();
    return baseRenderer.renderTree(tree, options, VSCODE_THEME);
  },
};
