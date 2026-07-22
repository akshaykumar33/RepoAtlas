import { TreeNode } from '@repo-atlas/core';
import { BaseTreeRenderer } from '../engine/base';
import { MATERIAL_THEME } from '../theme/presets';
import { RenderOptions, RenderedOutput, RendererPlugin } from '../types';

export const materialRendererPlugin: RendererPlugin = {
  name: 'material',
  description: 'Material Theme tree renderer with vibrant colors',
  fileExtension: 'txt',
  render(tree: TreeNode, options?: RenderOptions): RenderedOutput {
    const baseRenderer = new BaseTreeRenderer();
    return baseRenderer.renderTree(tree, options, MATERIAL_THEME);
  },
};
