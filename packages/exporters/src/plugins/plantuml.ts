import { TreeNode } from '@repoatlasdev/core';
import { ExporterPlugin, ExportResult } from '../types';

export class PlantUmlExporter implements ExporterPlugin {
  readonly name = 'plantuml';
  readonly fileExtension = 'puml';
  readonly mimeType = 'text/plain';

  export(tree: TreeNode): ExportResult {
    const lines: string[] = ['@startuml', `package "${tree.name}" {`];

    function renderPuml(node: TreeNode, indent = '  ') {
      if (node.children) {
        for (const child of node.children) {
          if (child.type === 'directory') {
            lines.push(`${indent}folder "${child.name}" {`);
            renderPuml(child, `${indent}  `);
            lines.push(`${indent}}`);
          } else {
            lines.push(`${indent}[${child.name}]`);
          }
        }
      }
    }

    renderPuml(tree);
    lines.push('}', '@enduml');

    return {
      format: this.name,
      fileExtension: this.fileExtension,
      mimeType: this.mimeType,
      content: lines.join('\n'),
      filename: `${tree.name}-structure.puml`,
    };
  }
}
