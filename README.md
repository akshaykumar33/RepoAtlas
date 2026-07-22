# RepoAtlas 🗺️

> Open-source developer platform that transforms any repository into beautiful, configurable, documentation-ready, AI-friendly visual project structures.

[![CI](https://github.com/akshaykumar33/RepoAtlas/actions/workflows/ci.yml/badge.svg)](https://github.com/akshaykumar33/RepoAtlas/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![pnpm workspace](https://img.shields.io/badge/pnpm-workspace-orange.svg)](https://pnpm.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue.svg)](https://www.typescriptlang.org/)

---

## 🌟 Why RepoAtlas?

RepoAtlas is **NOT** just another `tree` command. It is the industry standard platform for repository structure visualization, documentation automation, and AI context compression.

```
📂 repo-atlas
├── 📁 apps
│   ├── ⚡ cli
│   ├── 🌐 docs
│   └── 🔌 vscode
├── 📁 packages
│   ├── ⚙️ core
│   ├── 🎨 renderers
│   ├── 📦 exporters
│   └── 🔍 detector
└── 📖 README.md
```

---

## 🚀 Quick Start

### Run Instantly with `npx`

```bash
npx @repo-atlas/cli generate
```

### Install CLI Globally

```bash
pnpm add -g @repo-atlas/cli
repo-atlas generate --theme vscode --icons vscode
```

---

## 📦 Monorepo Architecture

| Package / App                                           | Description                                                | npm / Market                                 |
| :------------------------------------------------------ | :--------------------------------------------------------- | :------------------------------------------- |
| [`@repo-atlas/core`](./packages/core)                   | Filesystem scanning engine & tree model                    | `npm i @repo-atlas/core`                     |
| [`@repo-atlas/renderers`](./packages/renderers)         | Multi-theme tree rendering engine                          | `npm i @repo-atlas/renderers`                |
| [`@repo-atlas/exporters`](./packages/exporters)         | 13 Output format exporters (HTML, SVG, PDF, Mermaid, etc.) | `npm i @repo-atlas/exporters`                |
| [`@repo-atlas/detector`](./packages/detector)           | Project framework & language detector                      | `npm i @repo-atlas/detector`                 |
| [`@repo-atlas/icons`](./packages/icons)                 | Icon pack mappings (Emoji, VSCode, Material, Nerd)         | `npm i @repo-atlas/icons`                    |
| [`@repo-atlas/config`](./packages/config)               | Configuration loader (`repo-atlas.config.json`)            | `npm i @repo-atlas/config`                   |
| [`@repo-atlas/utils`](./packages/utils)                 | Helper path & formatting utilities                         | `npm i @repo-atlas/utils`                    |
| [`@repo-atlas/cli`](./apps/cli)                         | Commander.js CLI tool with `--watch` preview               | `npm i -g @repo-atlas/cli`                   |
| [`@repo-atlas/docs`](./apps/docs)                       | Docusaurus documentation website & interactive tools       | [Documentation Site](https://repo-atlas.dev) |
| [`@repo-atlas/vscode`](./apps/vscode)                   | Official VSCode Extension                                  | [VSCode Marketplace](#)                      |
| [`@repo-atlas/github-action`](./packages/github-action) | Official GitHub Action                                     | [GitHub Marketplace](#)                      |

---

## 🎨 Themes & 📦 13 Export Formats

### Supported Themes

- `unicode` (Box drawing + Emoji)
- `ascii` (Plain text connectors)
- `vscode` (VSCode Explorer glyphs)
- `material` (Material Theme icons)
- `nerd-font` (Nerd Font developer icons)

### Supported Exporters

`txt`, `md`, `html`, `json`, `yaml`, `xml`, `csv`, `docx`, `pdf`, `svg`, `png`, `mermaid`, `plantuml`.

---

## ⚡ CLI Command Reference

```bash
# Basic generation
repo-atlas generate

# Save output to Markdown or HTML
repo-atlas generate -o PROJECT_STRUCTURE.md --theme markdown
repo-atlas generate -o structure.html --theme material

# Live watcher preview mode
repo-atlas preview

# Doctor health check
repo-atlas doctor

# Manage configuration
repo-atlas config list
```

---

## 🔌 VSCode Extension & 🤖 GitHub Action

- **VSCode Extension**: Right-click folder -> `Generate RepoAtlas`, `Preview RepoAtlas`, `Generate Markdown`, `Generate Mermaid`.
- **GitHub Action**: Add `uses: akshaykumar33/RepoAtlas@main` to your workflow to keep `PROJECT_STRUCTURE.md` and `MERMAID.md` updated automatically.

---

## 📄 License

[MIT](./LICENSE) © RepoAtlas Team & Contributors.
