import { TreeNode } from '@repo-atlas/core';
import { IconResolver } from '@repo-atlas/icons';
import { ThemeConfig } from './theme/types';

export interface RenderOptions {
  showSize?: boolean;
  showIcons?: boolean;
  compact?: boolean;
  useColor?: boolean;
  theme?: ThemeConfig;
  iconResolver?: IconResolver;
  indentSize?: number;
  customOptions?: Record<string, unknown>;
}

export interface RenderedOutput {
  format: string;
  content: string;
  metadata?: Record<string, unknown>;
}

export interface RendererPlugin {
  name: string;
  description: string;
  fileExtension?: string;
  render(tree: TreeNode, options?: RenderOptions): Promise<RenderedOutput> | RenderedOutput;
}
