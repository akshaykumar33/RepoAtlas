import { TreeNode } from '@repo-atlas/core';
import { BaseTreeRenderer } from '../engine/base';
import { UNICODE_THEME } from '../theme/presets';
import { RenderOptions, RenderedOutput, RendererPlugin } from '../types';

export const unicodeRendererPlugin: RendererPlugin = {
  name: 'unicode',
  description: 'Unicode box-drawing tree renderer',
  fileExtension: 'txt',
  render(tree: TreeNode, options?: RenderOptions): RenderedOutput {
    const baseRenderer = new BaseTreeRenderer();
    return baseRenderer.renderTree(tree, options, UNICODE_THEME);
  },
};
