---
sidebar_position: 5
---

# Configuration

RepoAtlas supports declarative configuration files. CLI flags automatically override values specified in configuration files.

## Supported Config Files

- `repo-atlas.config.json`
- `.repo-atlasrc`
- `.repo-atlasrc.json`

## Example `repo-atlas.config.json`

```json
{
  "format": "unicode",
  "maxDepth": 5,
  "ignorePatterns": [".git", "node_modules", "dist", ".turbo", "coverage"],
  "includeHidden": false,
  "showSize": true,
  "iconPack": "emoji",
  "theme": "default"
}
```
