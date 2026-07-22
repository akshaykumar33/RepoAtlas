# RepoAtlas — Repository Visualizer for VS Code

> Transform any repository into beautiful, configurable, documentation-ready visual project structures — directly inside VS Code.

[![VS Code Marketplace](https://img.shields.io/visual-studio-marketplace/v/repo-atlas.repo-atlas-vscode?label=VS%20Code%20Marketplace&color=blue)](https://marketplace.visualstudio.com/items?itemName=repo-atlas.repo-atlas-vscode)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/akshaykumar33/RepoAtlas?style=social)](https://github.com/akshaykumar33/RepoAtlas)

---

## ✨ Why RepoAtlas?

The built-in `tree` command is ugly, unconfigurable, and useless for documentation.

**RepoAtlas** replaces it with a powerful, theme-aware, icon-rich visualization engine that works natively inside VS Code. Whether you're writing docs, onboarding new teammates, sharing architecture on GitHub, or feeding context to an AI — RepoAtlas generates the output you actually want.

---

## 🚀 Key Features

### 🎨 Multi-Theme Rendering

Choose from **8 beautiful themes** that transform how your project structure looks:

| Theme       | Style                                |
| :---------- | :----------------------------------- |
| `unicode`   | Clean Unicode box-drawing characters |
| `vscode`    | VS Code-native file tree style       |
| `material`  | Material Design icons & colors       |
| `nerd-font` | Nerd Font glyphs for terminal lovers |
| `ascii`     | Classic ASCII pipes & dashes         |
| `markdown`  | Markdown-formatted nested lists      |
| `json`      | Structured JSON output               |
| `mermaid`   | Mermaid.js diagram syntax            |

### 📋 One-Click Copy & Export

- Copy formatted tree to clipboard instantly
- Export as `PROJECT_STRUCTURE.md` for GitHub documentation
- Generate Mermaid diagrams for architecture docs

### 🗂️ Explorer Context Menu

Right-click **any folder** in the VS Code Explorer sidebar to:

- Generate a structure visualization
- Preview it in a live webview panel
- Export as Markdown or Mermaid

### ⚡ Performance at Scale

Powered by `@repoatlasdev/core`, the scanner handles repositories with **100,000+ files** without breaking a sweat. Async filesystem APIs, smart caching, and streaming ensure zero lag.

### 🧠 AI-Friendly Output

Generate token-optimized project structures perfect for pasting into ChatGPT, Claude, Gemini, or any LLM. Give AI assistants the full context of your codebase in seconds.

---

## 📦 Available Commands

Open the **Command Palette** (`Ctrl+Shift+P` / `Cmd+Shift+P`) and type `RepoAtlas`:

| Command                               | Description                                        |
| :------------------------------------ | :------------------------------------------------- |
| `RepoAtlas: Generate Structure`       | Scan workspace and generate a formatted tree       |
| `RepoAtlas: Preview Structure`        | Open a live interactive preview in a webview panel |
| `RepoAtlas: Copy Tree to Clipboard`   | Copy the rendered tree to your clipboard           |
| `RepoAtlas: Export Structure to File` | Export to `PROJECT_STRUCTURE.md` or `.json`        |
| `RepoAtlas: Generate Markdown`        | Generate a Markdown-formatted tree                 |
| `RepoAtlas: Generate Mermaid Diagram` | Generate a Mermaid.js flowchart diagram            |

---

## ⚙️ Extension Settings

Customize behavior in your VS Code `settings.json`:

```json
{
  "repoAtlas.theme": "vscode",
  "repoAtlas.maxDepth": 4,
  "repoAtlas.respectGitIgnore": true
}
```

| Setting                      | Type      | Default    | Description                                                                                            |
| :--------------------------- | :-------- | :--------- | :----------------------------------------------------------------------------------------------------- |
| `repoAtlas.theme`            | `string`  | `"vscode"` | Rendering theme (`unicode`, `vscode`, `material`, `nerd-font`, `ascii`, `markdown`, `json`, `mermaid`) |
| `repoAtlas.maxDepth`         | `number`  | `4`        | Maximum directory recursion depth                                                                      |
| `repoAtlas.respectGitIgnore` | `boolean` | `true`     | Exclude files/folders listed in `.gitignore`                                                           |

---

## 💡 Use Cases

### 📖 Documentation

Generate beautiful `PROJECT_STRUCTURE.md` files for your GitHub README, wiki, or onboarding guides.

### 🤖 AI Context

Paste your project tree into LLM prompts so AI assistants understand your full codebase architecture.

### 🏗️ Architecture Reviews

Visualize folder structures during code reviews, sprint planning, or architecture discussions.

### 👋 Team Onboarding

Help new developers instantly understand how a repository is organized.

### 📊 Open Source READMEs

Make your open-source project stand out with professional, auto-generated structure diagrams.

---

## 🛠️ Part of the RepoAtlas Ecosystem

This extension is powered by the same core engine used across the entire RepoAtlas platform:

| Package                                                                            | Purpose                                       |
| :--------------------------------------------------------------------------------- | :-------------------------------------------- |
| [`@repoatlasdev/core`](https://www.npmjs.com/package/@repoatlasdev/core)           | Scanner, parser, TreeNode model               |
| [`@repoatlasdev/renderers`](https://www.npmjs.com/package/@repoatlasdev/renderers) | Multi-theme rendering engine                  |
| [`@repoatlasdev/exporters`](https://www.npmjs.com/package/@repoatlasdev/exporters) | Markdown, Mermaid, JSON, YAML, HTML exporters |
| [`@repoatlasdev/icons`](https://www.npmjs.com/package/@repoatlasdev/icons)         | Icon pack mapping                             |
| [`@repoatlasdev/cli`](https://www.npmjs.com/package/@repoatlasdev/cli)             | Command-line interface                        |

---

## 🔗 Links

- 🌐 [Documentation Website](https://repo-atlas-docs.vercel.app)
- 🐙 [GitHub Repository](https://github.com/akshaykumar33/RepoAtlas)
- 📦 [npm Packages](https://www.npmjs.com/org/repoatlasdev)
- 🎮 [Live Playground](https://repo-atlas-docs.vercel.app/playground)

---

## 📄 License

[MIT](https://github.com/akshaykumar33/RepoAtlas/blob/main/LICENSE) © [RepoAtlas Team](https://github.com/akshaykumar33/RepoAtlas)

---

**If you find RepoAtlas useful, please leave a ⭐ review on the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=repo-atlas.repo-atlas-vscode) and star us on [GitHub](https://github.com/akshaykumar33/RepoAtlas)!**
