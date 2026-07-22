import { TreeNode } from '@repo-atlas/core';
import { RenderOptions, RenderedOutput, RendererPlugin } from '../types';

export const jsonRendererPlugin: RendererPlugin = {
  name: 'json',
  description: 'JSON structured tree renderer',
  fileExtension: 'json',
  render(tree: TreeNode, _options?: RenderOptions): RenderedOutput {
    return {
      format: 'json',
      content: JSON.stringify(tree, null, 2),
    };
  },
};
