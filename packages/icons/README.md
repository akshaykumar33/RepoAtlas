# @repoatlasdev/icons

> Icon resolver and icon pack presets (`emoji`, `vscode`, `material`, `nerd`, `ascii`, `plain`) for RepoAtlas.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Installation

```bash
npm install @repoatlasdev/icons
```

## Usage

```typescript
import { IconResolver } from '@repoatlasdev/icons';

const resolver = new IconResolver('vscode');
const icon = resolver.getFileIcon('index.ts');
```
