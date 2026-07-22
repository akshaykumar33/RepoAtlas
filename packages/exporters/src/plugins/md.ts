import { TreeNode } from '@repo-atlas/core';
import { ExporterPlugin, ExportOptions, ExportResult } from '../types';

export class MdExporter implements ExporterPlugin {
  readonly name = 'md';
  readonly fileExtension = 'md';
  readonly mimeType = 'text/markdown';

  export(tree: TreeNode, renderedContent?: string, options?: ExportOptions): ExportResult {
    const title = options?.title || `# Project Structure - ${tree.name}`;
    const codeBlock = renderedContent
      ? `\`\`\`\n${renderedContent}\n\`\`\``
      : `\`\`\`\n${tree.name}\n\`\`\``;
    const content = `${title}\n\n${codeBlock}\n`;

    return {
      format: this.name,
      fileExtension: this.fileExtension,
      mimeType: this.mimeType,
      content,
      filename: `${tree.name}-structure.md`,
    };
  }
}
