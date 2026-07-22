import { TreeNode } from '@repo-atlas/core';
import { ExporterPlugin, ExportResult } from '../types';

export class PlantUmlExporter implements ExporterPlugin {
  readonly name = 'plantuml';
  readonly fileExtension = 'puml';
  readonly mimeType = 'text/x-plantuml';

  export(tree: TreeNode): ExportResult {
    const lines: string[] = ['@startuml', `package "${tree.name}" {`];

    function processNode(node: TreeNode, indent: string) {
      if (!node.children || node.children.length === 0) return;

      for (const child of node.children) {
        if (child.type === 'directory') {
          lines.push(`${indent}package "${child.name}" {`);
          processNode(child, `${indent}  `);
          lines.push(`${indent}}`);
        } else {
          lines.push(`${indent}[${child.name}]`);
        }
      }
    }

    processNode(tree, '  ');
    lines.push('}', '@enduml');

    return {
      format: this.name,
      fileExtension: this.fileExtension,
      mimeType: this.mimeType,
      content: lines.join('\n'),
      filename: `${tree.name}-diagram.puml`,
    };
  }
}
