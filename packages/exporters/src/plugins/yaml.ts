import { TreeNode } from '@repo-atlas/core';
import { ExporterPlugin, ExportResult } from '../types';

export class YamlExporter implements ExporterPlugin {
  readonly name = 'yaml';
  readonly fileExtension = 'yaml';
  readonly mimeType = 'text/yaml';

  export(tree: TreeNode): ExportResult {
    const lines: string[] = [];

    function toYaml(node: TreeNode, indent: string) {
      lines.push(`${indent}name: "${node.name}"`);
      lines.push(`${indent}type: "${node.type}"`);
      lines.push(`${indent}path: "${node.relativePath}"`);

      if (node.children && node.children.length > 0) {
        lines.push(`${indent}children:`);
        for (const child of node.children) {
          lines.push(`${indent}  -`);
          toYaml(child, `${indent}    `);
        }
      }
    }

    toYaml(tree, '');

    return {
      format: this.name,
      fileExtension: this.fileExtension,
      mimeType: this.mimeType,
      content: lines.join('\n'),
      filename: `${tree.name}-tree.yaml`,
    };
  }
}
