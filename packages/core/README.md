# @repoatlasdev/core

> High-throughput repository scanner engine and unified tree data model for RepoAtlas.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

- **Asynchronous Concurrent Scanning**: High performance folder recursion.
- **GitIgnore Integration**: Respects `.gitignore` and `.ignore` rules automatically.
- **Node Metadata**: Calculates file sizes, directory child counts, node depth, and extensions.

## Installation

```bash
npm install @repoatlasdev/core
```

## Usage

```typescript
import { scanRepository } from '@repoatlasdev/core';

const tree = await scanRepository({
  rootDir: './my-project',
  maxDepth: 4,
  respectGitIgnore: true,
});

console.log(tree);
```
