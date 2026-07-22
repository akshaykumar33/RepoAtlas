# @repoatlasdev/exporters

> Multi-format export engine for RepoAtlas (`md`, `html`, `json`, `yaml`, `xml`, `csv`, `docx`, `pdf`, `svg`, `png`, `mermaid`, `plantuml`).

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Installation

```bash
npm install @repoatlasdev/exporters
```

## Usage

```typescript
import { ExporterRegistry } from '@repoatlasdev/exporters';

const exporters = new ExporterRegistry();
const result = exporters.export(tree, 'mermaid');
console.log(result.content);
```
