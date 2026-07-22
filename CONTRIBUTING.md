# Contributing to RepoAtlas

Thank you for your interest in contributing to RepoAtlas!

## Engineering Architecture Rules

Always optimize for:

- SOLID principles
- DRY & KISS
- Open/Closed Principle (Extension over modification)
- Pure Functions & Functional Core
- Immutable Data Models (`TreeNode`)

Never:

- Mix application code with reusable packages
- Put filesystem calls inside renderers or exporters
- Hardcode icons or connectors
- Mutate global state

---

## Local Development Setup

```bash
# Clone repository
git clone https://github.com/akshaykumar33/RepoAtlas.git
cd RepoAtlas

# Install dependencies using pnpm
pnpm install

# Build all packages with TurboRepo
pnpm build

# Run unit tests with Vitest
pnpm test

# Run ESLint & Prettier checks
pnpm lint
pnpm format:check
```

---

## Pull Request Checklist

Before submitting a PR:

- [ ] All package code compiles cleanly (`pnpm build`).
- [ ] 100% of unit tests pass (`pnpm test`).
- [ ] ESLint and Prettier check clean (`pnpm lint`, `pnpm format:check`).
- [ ] A Changeset entry is generated (`pnpm changeset`).
- [ ] Documentation is updated if public APIs change.
