---
sidebar_position: 3
---

# Quick Start Guide

Get up and running with RepoAtlas in under 60 seconds.

## 1. Run in Target Directory

Navigate to any repository and run:

```bash
repo-atlas generate
```

Output:

```
📂 my-project
├── 📁 src
│   ├── 📁 components
│   └── 📘 index.ts
├── 📦 package.json
└── 📖 README.md
```

## 2. Customize Theme and Icons

```bash
repo-atlas generate --theme vscode --icons vscode
```

## 3. Limit Depth & Compact Mode

```bash
repo-atlas generate --depth 2 --compact
```

## 4. Export to Markdown or HTML

```bash
repo-atlas generate -o PROJECT_STRUCTURE.md --theme markdown
repo-atlas generate -o structure.html --theme material
```

## 5. System Doctor Check

```bash
repo-atlas doctor
```
