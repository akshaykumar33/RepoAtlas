---
sidebar_position: 2
---

# Installation

RepoAtlas can be installed globally as a CLI or added locally to a monorepo project.

## Global CLI Installation

```bash
# Using pnpm
pnpm add -g @repo-atlas/cli

# Using npm
npm install -g @repo-atlas/cli

# Using yarn
yarn global add @repo-atlas/cli

# Using bun
bun add -g @repo-atlas/cli
```

## Running without Installation (npx / pnpm dlx)

```bash
npx @repo-atlas/cli generate
# or
pnpm dlx @repo-atlas/cli generate
```

## Monorepo Library Installation

To consume RepoAtlas programmatically in Node.js/TypeScript applications:

```bash
pnpm add @repo-atlas/core @repo-atlas/renderers @repo-atlas/exporters @repo-atlas/detector
```
