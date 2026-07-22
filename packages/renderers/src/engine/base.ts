import { DirectoryMetadata, FileMetadata, TreeNode } from '@repo-atlas/core';
import { IconResolver } from '@repo-atlas/icons';
import { formatBytes } from '@repo-atlas/utils';
import { UNICODE_THEME } from '../theme/presets';
import { ThemeConfig } from '../theme/types';
import { RenderOptions, RenderedOutput } from '../types';

export class BaseTreeRenderer {
  renderTree(
    tree: TreeNode,
    options?: RenderOptions,
    defaultTheme: ThemeConfig = UNICODE_THEME
  ): RenderedOutput {
    const theme = options?.theme || defaultTheme;
    const connectors = theme.connectors;
    const useColor = options?.useColor ?? false;
    const showIcons = options?.showIcons ?? true;
    const showSize = options?.showSize ?? false;
    const compact = options?.compact ?? false;

    const iconResolver = options?.iconResolver || new IconResolver({ pack: theme.iconPack });
    const palette = theme.palette || {};

    const colorize = (text: string, fn?: (t: string) => string): string => {
      return useColor && fn ? fn(text) : text;
    };

    const rootIcon = showIcons ? `${iconResolver.resolveFolder(true)} ` : '';
    const rootName = colorize(tree.name, palette.directory);
    const lines: string[] = [`${rootIcon}${rootName}`];

    function renderChildren(nodes: TreeNode[], indent: string) {
      if (!nodes || nodes.length === 0) return;

      for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i]!;
        const isLast = i === nodes.length - 1;

        // Compact mode: collapse single-child folder chains
        let nodeName = node.name;
        if (compact && node.type === 'directory') {
          while (
            node.children &&
            node.children.length === 1 &&
            node.children[0]!.type === 'directory'
          ) {
            node = node.children[0]!;
            nodeName += `/${node.name}`;
          }
        }

        const connectorSymbol = isLast ? connectors.lastBranch : connectors.middleBranch;
        const styledConnector = colorize(connectorSymbol, palette.connector);
        const nextIndent = indent + (isLast ? connectors.indent : connectors.vertical);

        let icon = '';
        if (showIcons) {
          icon =
            node.type === 'directory'
              ? `${iconResolver.resolveFolder(false)} `
              : `${iconResolver.resolveFile(node.name)} `;
        }

        const styledName =
          node.type === 'directory'
            ? colorize(nodeName, palette.directory)
            : colorize(nodeName, palette.file);

        let label = `${icon}${styledName}`;

        if (showSize) {
          const size =
            node.type === 'file'
              ? (node.metadata as FileMetadata)?.sizeBytes
              : (node.metadata as DirectoryMetadata)?.totalSizeBytes;
          if (size !== undefined) {
            const formattedSize = colorize(` (${formatBytes(size)})`, palette.size);
            label += formattedSize;
          }
        }

        lines.push(`${indent}${styledConnector}${label}`);

        if (node.type === 'directory' && node.children) {
          renderChildren(node.children, nextIndent);
        }
      }
    }

    if (tree.children) {
      renderChildren(tree.children, '');
    }

    return {
      format: theme.name,
      content: lines.join('\n'),
    };
  }
}
