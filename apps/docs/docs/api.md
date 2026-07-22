---
sidebar_position: 10
---

# API Reference

## `@repo-atlas/core`

### `scanRepository(options: ScanOptions): Promise<TreeNode>`

Asynchronously scans a directory tree and returns a `TreeNode` data model.

## `@repo-atlas/renderers`

### `RendererRegistry.getInstance()`

Singleton registry managing renderer plugins.

- `.register(plugin: RendererPlugin): void`
- `.render(name: string, tree: TreeNode, options?: RenderOptions): Promise<RenderedOutput>`

## `@repo-atlas/exporters`

### `ExporterRegistry.getInstance()`

Singleton registry managing exporter plugins.

- `.register(plugin: ExporterPlugin): void`
- `.export(name: string, tree: TreeNode, renderedContent?: string): Promise<ExportResult>`
