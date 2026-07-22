import { TreeNode } from '@repo-atlas/core';
import { BaseTreeRenderer } from '../engine/base';
import { NERD_FONT_THEME } from '../theme/presets';
import { RenderOptions, RenderedOutput, RendererPlugin } from '../types';

export const nerdFontRendererPlugin: RendererPlugin = {
  name: 'nerd-font',
  description: 'Nerd Font developer glyph tree renderer',
  fileExtension: 'txt',
  render(tree: TreeNode, options?: RenderOptions): RenderedOutput {
    const baseRenderer = new BaseTreeRenderer();
    return baseRenderer.renderTree(tree, options, NERD_FONT_THEME);
  },
};
