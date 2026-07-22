# @repoatlasdev/github-action

> GitHub Action to automatically generate `PROJECT_STRUCTURE.md` and `MERMAID.md` in repository workflows.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Usage in GitHub Workflow

```yaml
name: Update Repository Structure
on:
  push:
    branches: [main]

jobs:
  structure:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: repoatlasdev/github-action@v0.2.0
        with:
          auto_commit: true
          generate_mermaid: true
```
