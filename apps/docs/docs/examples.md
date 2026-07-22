---
sidebar_position: 9
---

# Examples & Automation

## 1. Automated GitHub Action Workflow

Generate `PROJECT_STRUCTURE.md` automatically on pull requests:

```yaml
name: Generate Repository Structure

on:
  push:
    branches: [main]

jobs:
  structure:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
      - run: pnpm dlx @repo-atlas/cli generate -o PROJECT_STRUCTURE.md --theme markdown
```

## 2. Programmatic Node SDK Usage

```typescript
import { scanRepository } from '@repo-atlas/core';
import { RendererRegistry } from '@repo-atlas/renderers';
import { ExporterRegistry } from '@repo-atlas/exporters';

const tree = await scanRepository({ rootDir: './my-app', maxDepth: 4 });
const rendered = await RendererRegistry.getInstance().render('vscode', tree);
const exported = await ExporterRegistry.getInstance().export('html', tree, rendered.content);

console.log(exported.content);
```
