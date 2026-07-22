import { DirectoryMetadata, FileMetadata, TreeNode } from '@repo-atlas/core';
import { ExporterPlugin, ExportResult } from '../types';

export class CsvExporter implements ExporterPlugin {
  readonly name = 'csv';
  readonly fileExtension = 'csv';
  readonly mimeType = 'text/csv';

  export(tree: TreeNode): ExportResult {
    const rows: string[] = ['"Path","Name","Type","SizeBytes","ModifiedAt"'];

    function processNode(node: TreeNode) {
      let size = 0;
      if (node.type === 'file') {
        size = (node.metadata as FileMetadata)?.sizeBytes ?? 0;
      } else {
        size = (node.metadata as DirectoryMetadata)?.totalSizeBytes ?? 0;
      }

      const modDate = node.metadata?.modifiedAt ?? '';
      rows.push(`"${node.relativePath}","${node.name}","${node.type}",${size},"${modDate}"`);

      if (node.children) {
        for (const child of node.children) {
          processNode(child);
        }
      }
    }

    processNode(tree);

    return {
      format: this.name,
      fileExtension: this.fileExtension,
      mimeType: this.mimeType,
      content: rows.join('\n'),
      filename: `${tree.name}-tree.csv`,
    };
  }
}
