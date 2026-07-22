---
sidebar_position: 13
---

# Contributing Guide

Contributions to RepoAtlas are welcome! Please follow these guidelines.

## Development Setup

```bash
git clone https://github.com/akshaykumar33/RepoAtlas.git
cd RepoAtlas
pnpm install
pnpm build
pnpm test
```

## Architecture Layers

```
Filesystem -> Scanner -> Tree Model -> Transformer -> Renderer -> Exporter -> Output
```

Always follow SOLID principles and never modify existing plugins to add new formats.
