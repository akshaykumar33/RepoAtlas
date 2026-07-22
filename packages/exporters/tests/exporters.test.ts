import { describe, expect, it } from 'vitest';
import { TreeNode } from '@repo-atlas/core';
import { ExporterPlugin, ExporterRegistry, ExportResult } from '../src/index';

const mockTree: TreeNode = {
  id: '.',
  name: 'my-project',
  path: '/my-project',
  relativePath: '.',
  type: 'directory',
  children: [
    {
      id: 'src',
      name: 'src',
      path: '/my-project/src',
      relativePath: 'src',
      type: 'directory',
      children: [
        {
          id: 'src/index.ts',
          name: 'index.ts',
          path: '/my-project/src/index.ts',
          relativePath: 'src/index.ts',
          type: 'file',
          metadata: { sizeBytes: 1024, extension: 'ts', modifiedAt: new Date().toISOString() },
        },
      ],
    },
    {
      id: 'README.md',
      name: 'README.md',
      path: '/my-project/README.md',
      relativePath: 'README.md',
      type: 'file',
      metadata: { sizeBytes: 2048, extension: 'md', modifiedAt: new Date().toISOString() },
    },
  ],
  metadata: { modifiedAt: new Date().toISOString() },
};

describe('Exporters Package Suite', () => {
  const registry = ExporterRegistry.getInstance();

  const formats = [
    'txt',
    'md',
    'html',
    'json',
    'yaml',
    'xml',
    'csv',
    'docx',
    'pdf',
    'svg',
    'png',
    'mermaid',
    'plantuml',
  ];

  formats.forEach((fmt) => {
    it(`exports format '${fmt}' successfully`, async () => {
      const result = await registry.export(fmt, mockTree, 'mock rendered tree');
      expect(result).toBeDefined();
      expect(result.format).toBe(fmt);
      expect(result.content).toBeDefined();
      expect(result.filename).toBeDefined();
    });
  });

  it('allows adding a new exporter with only ONE new class', async () => {
    // Single new class implementing ExporterPlugin
    class CustomIniExporter implements ExporterPlugin {
      readonly name = 'ini';
      readonly fileExtension = 'ini';
      readonly mimeType = 'text/plain';

      export(tree: TreeNode): ExportResult {
        return {
          format: this.name,
          fileExtension: this.fileExtension,
          mimeType: this.mimeType,
          content: `[project]\nname=${tree.name}`,
          filename: `${tree.name}.ini`,
        };
      }
    }

    // Register single class
    registry.register(new CustomIniExporter());

    const result = await registry.export('ini', mockTree);
    expect(result.format).toBe('ini');
    expect(result.content).toBe('[project]\nname=my-project');
  });
});
