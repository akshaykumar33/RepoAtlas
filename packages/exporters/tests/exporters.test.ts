import { TreeNode } from '@repoatlasdev/core';
import { describe, expect, it } from 'vitest';
import { ExporterRegistry } from '../src/registry';

describe('Multi-Format Exporters Package', () => {
  const sampleTree: TreeNode = {
    id: '.',
    name: 'app',
    path: '/app',
    relativePath: '.',
    type: 'directory',
    children: [
      {
        id: 'index.ts',
        name: 'index.ts',
        path: '/app/index.ts',
        relativePath: 'index.ts',
        type: 'file',
      },
    ],
  };

  it('supports 13 output export plugins', () => {
    const registry = new ExporterRegistry();
    expect(registry.list().length).toBe(13);
  });

  it('exports HTML format', () => {
    const registry = new ExporterRegistry();
    const result = registry.export(sampleTree, 'html');
    expect(result.content).toContain('<!DOCTYPE html>');
    expect(result.fileExtension).toBe('html');
  });

  it('exports Markdown format', () => {
    const registry = new ExporterRegistry();
    const result = registry.export(sampleTree, 'md');
    expect(result.content).toContain('# Project Structure: app');
  });

  it('exports Mermaid format', () => {
    const registry = new ExporterRegistry();
    const result = registry.export(sampleTree, 'mermaid');
    expect(result.content).toContain('graph TD');
  });
});
