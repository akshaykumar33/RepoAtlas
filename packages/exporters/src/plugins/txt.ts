import { TreeNode } from '@repoatlasdev/core';
import { ExporterPlugin, ExportResult } from '../types';

export class TxtExporter implements ExporterPlugin {
  readonly name = 'txt';
  readonly fileExtension = 'txt';
  readonly mimeType = 'text/plain';

  export(tree: TreeNode): ExportResult {
    function renderTxt(node: TreeNode, indent = ''): string {
      let txt = `${indent}${node.name}\n`;
      if (node.children) {
        for (const child of node.children) {
          txt += renderTxt(child, `${indent}  `);
        }
      }
      return txt;
    }

    return {
      format: this.name,
      fileExtension: this.fileExtension,
      mimeType: this.mimeType,
      content: renderTxt(tree),
      filename: `${tree.name}-tree.txt`,
    };
  }
}
