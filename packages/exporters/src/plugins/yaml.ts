import { TreeNode } from '@repoatlasdev/core';
import { ExporterPlugin, ExportResult } from '../types';

export class YamlExporter implements ExporterPlugin {
  readonly name = 'yaml';
  readonly fileExtension = 'yaml';
  readonly mimeType = 'text/yaml';

  export(tree: TreeNode): ExportResult {
    function renderYaml(node: TreeNode, indent = ''): string {
      let yaml = `${indent}- name: "${node.name}"\n${indent}  type: "${node.type}"\n`;
      if (node.children && node.children.length > 0) {
        yaml += `${indent}  children:\n`;
        for (const child of node.children) {
          yaml += renderYaml(child, `${indent}    `);
        }
      }
      return yaml;
    }

    return {
      format: this.name,
      fileExtension: this.fileExtension,
      mimeType: this.mimeType,
      content: renderYaml(tree),
      filename: `${tree.name}-tree.yaml`,
    };
  }
}
