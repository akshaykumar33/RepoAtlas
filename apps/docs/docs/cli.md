---
sidebar_position: 4
---

# CLI Reference

RepoAtlas CLI provides subcommands and options for visual repository structure generation.

## Commands

### `repo-atlas generate [dir]`

Alias: `gen`  
Generates visualization for target repository directory.

### `repo-atlas preview [dir]`

Launches an interactive live watcher that clears the terminal and re-renders tree output on file modifications.

### `repo-atlas doctor`

Runs environment diagnostics, Node version checks, loaded configuration settings, and lists all registered renderer plugins.

### `repo-atlas init [dir]`

Creates a default `repo-atlas.config.json` configuration file.

### `repo-atlas config <list|get|set>`

Manages configuration parameters.

## CLI Options

| Flag | Option                         | Description                                                                                         |
| :--- | :----------------------------- | :-------------------------------------------------------------------------------------------------- |
| `-e` | `--exclude <patterns...>`      | Exclude glob patterns                                                                               |
| `-i` | `--include <patterns...>`      | Include glob patterns                                                                               |
| -    | `--only <type>`                | Limit display to `files` or `directories`                                                           |
| `-d` | `--depth <depth>`              | Maximum directory scan depth                                                                        |
| `-o` | `--output <file>`              | Target output destination file                                                                      |
| `-t` | `--theme <preset>`             | Theme preset (`ascii`, `unicode`, `vscode`, `material`, `nerd-font`, `markdown`, `json`, `mermaid`) |
| -    | `--icons <pack>`               | Icon pack name (`emoji`, `unicode`, `plain`, `ascii`, `vscode`, `material`, `nerd`)                 |
| `-s` | `--sort <field>`               | Sort order (`name`, `size`, `type`, `date`)                                                         |
| -    | `--gitignore / --no-gitignore` | Respect or ignore `.gitignore` rules                                                                |
| `-c` | `--config <path>`              | Path to custom configuration file                                                                   |
| `-w` | `--watch`                      | Live watch mode                                                                                     |
| -    | `--compact`                    | Collapse single-child directory chains                                                              |
| -    | `--color`                      | Enable ANSI colored terminal output                                                                 |
| -    | `--show-size`                  | Display file and directory sizes                                                                    |
