# @repoatlasdev/renderers

> Multi-theme rendering engine for RepoAtlas TreeNode visualizations.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

- **Built-in Themes**: `unicode`, `vscode`, `material`, `nerd-font`, `ascii`, `markdown`, `json`, `mermaid`.
- **Extensible Plugin Architecture**: Easily register custom theme renderers.

## Installation

```bash
npm install @repoatlasdev/renderers
```

## Usage

```typescript
import { RendererRegistry } from '@repoatlasdev/renderers';

const registry = new RendererRegistry();
const output = registry.render(tree, 'vscode');
console.log(output);
```
