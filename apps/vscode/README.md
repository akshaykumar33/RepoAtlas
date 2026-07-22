# repo-atlas-vscode

> **RepoAtlas VSCode Extension** — Transform any repository into beautiful, configurable, documentation-ready visual project structures directly inside VS Code.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/repo-atlas-vscode.svg)](https://www.npmjs.com/package/repo-atlas-vscode)

---

## Features

- **Interactive Tree Preview**: View live visual repository tree models directly inside VS Code Webview panels.
- **Multi-Theme Support**: Render tree structures in `VSCode`, `Unicode`, `Material`, `Nerd Font`, `ASCII`, `Markdown`, `JSON`, and `Mermaid`.
- **Clipboard & Export Integration**: Instantly copy formatted tree visualizations or export to `PROJECT_STRUCTURE.md` or `PROJECT_STRUCTURE.json`.
- **Explorer Context Menu Integration**: Right-click any folder in VS Code Explorer to generate or preview structure diagrams.

---

## Installation & Usage

1. Open **VS Code Command Palette** (`Ctrl+Shift+P` / `Cmd+Shift+P`).
2. Search and run:
   - `RepoAtlas: Generate Structure`
   - `RepoAtlas: Preview Structure`
   - `RepoAtlas: Copy Tree to Clipboard`
   - `RepoAtlas: Generate Markdown`
   - `RepoAtlas: Generate Mermaid Diagram`

---

## Extension Settings

Customize configuration via VS Code Settings (`settings.json`):

```json
{
  "repoAtlas.theme": "vscode",
  "repoAtlas.maxDepth": 4,
  "repoAtlas.respectGitIgnore": true
}
```

---

## License

[MIT](LICENSE) © [RepoAtlas Team](https://github.com/akshaykumar33/RepoAtlas)
