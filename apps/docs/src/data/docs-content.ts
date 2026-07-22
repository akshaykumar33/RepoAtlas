export interface DocItem {
  slug: string;
  title: string;
  category: string;
  description: string;
  readingTime: string;
  lastUpdated: string;
  content: string;
}

export const DOCS_DATA: Record<string, DocItem> = {
  introduction: {
    slug: 'introduction',
    title: 'Introduction to RepoAtlas',
    category: 'Getting Started',
    description:
      'RepoAtlas transforms any repository into beautiful, configurable, documentation-ready visual project structures.',
    readingTime: '3 min read',
    lastUpdated: 'July 22, 2026',
    content: `RepoAtlas is an open-source developer platform designed to make software repositories readable, understandable, and visually stunning.

> It is **NOT** just another CLI tree command — it's the **Prettier + ESLint equivalent for repository visualization**.

---

### Why RepoAtlas?

Traditional \`tree\` output lacks contextual icons, theme palettes, Markdown formatting, and exporter plugins. RepoAtlas provides:

- 🚀 **High-Throughput Core** — Scans 100,000+ files in sub-milliseconds using async filesystem APIs
- 🎨 **Multi-Theme Engine** — Render in VSCode, Material, Unicode, Nerd Font, ASCII, Markdown, and Mermaid
- 📦 **13 Exporter Formats** — Export trees to \`md\`, \`html\`, \`json\`, \`yaml\`, \`xml\`, \`csv\`, \`docx\`, \`pdf\`, \`svg\`, \`png\`, and \`mermaid\`
- 🤖 **AI Prompt Generator** — Compress repo trees into token-optimized context for LLMs
- ⚡ **VSCode & GitHub Action** — Visualize in VS Code Explorer or auto-commit in CI/CD workflows

---

### Core Data Pipeline

Every repository scan in RepoAtlas moves strictly through a unidirectional architecture:

\`\`\`
Filesystem → Scanner → Tree Model → Transformer → Renderer → Exporter → Output
\`\`\`

This ensures clean separation of concerns and allows every layer to be independently extended via plugins.

---

### Package Ecosystem

| Package | Description |
| :--- | :--- |
| \`@repoatlasdev/core\` | Scanner, parser, TreeNode model |
| \`@repoatlasdev/renderers\` | Multi-theme rendering engine |
| \`@repoatlasdev/exporters\` | Format exporters (Markdown, Mermaid, JSON, etc.) |
| \`@repoatlasdev/icons\` | Icon pack mapping & symbol lookup |
| \`@repoatlasdev/config\` | Config file loader |
| \`@repoatlasdev/detector\` | Framework & language detection |
| \`@repoatlasdev/utils\` | Pure functional utilities |
| \`@repoatlasdev/cli\` | Command-line interface |

---

### Quick Start

Install the CLI globally and generate your first structure:

\`\`\`bash
npm install -g @repoatlasdev/cli

# Generate a tree visualization
repo-atlas generate ./my-project

# Generate with a specific theme
repo-atlas generate ./my-project --theme material --icons emoji

# Export as Markdown
repo-atlas generate ./my-project --theme markdown --output PROJECT_STRUCTURE.md
\`\`\`
`,
  },
  cli: {
    slug: 'cli',
    title: 'CLI Command Reference',
    category: 'Core Modules',
    description: 'Complete reference for the @repoatlasdev/cli command line tool.',
    readingTime: '4 min read',
    lastUpdated: 'July 22, 2026',
    content: `The \`@repoatlasdev/cli\` package provides a fast, predictable CLI tool for generating repository visualizations.

---

### Installation

\`\`\`bash
# Global install
npm install -g @repoatlasdev/cli

# Or run with npx (no install)
npx @repoatlasdev/cli generate .
\`\`\`

---

### Primary Commands

#### \`repo-atlas generate [dir]\`

Generates a visual repository tree.

| Option | Alias | Description | Default |
| :--- | :--- | :--- | :--- |
| \`--theme <name>\` | \`-t\` | Rendering theme | \`unicode\` |
| \`--icons <pack>\` | \`-i\` | Icon pack | \`emoji\` |
| \`--depth <number>\` | \`-d\` | Max recursion depth | \`10\` |
| \`--sort <type>\` | \`-s\` | Sort strategy (\`name\`, \`size\`, \`type\`) | \`name\` |
| \`--only <type>\` | | Filter nodes (\`all\`, \`files\`, \`directories\`) | \`all\` |
| \`--output <file>\` | \`-o\` | Output file path | stdout |

**Example:**

\`\`\`bash
repo-atlas generate ./my-project --theme vscode --icons material --depth 5 --output STRUCTURE.md
\`\`\`

---

#### \`repo-atlas preview [dir]\`

Launches a live interactive watcher that re-renders the tree structure in real-time as files change.

\`\`\`bash
repo-atlas preview ./my-project --theme material
\`\`\`

---

#### \`repo-atlas doctor\`

Executes environment health diagnostics, checking Node version, platform, and registered plugins.

\`\`\`bash
repo-atlas doctor
\`\`\`

---

### Available Themes

| Theme | Description |
| :--- | :--- |
| \`unicode\` | Clean Unicode box-drawing characters |
| \`vscode\` | VS Code-native file tree style |
| \`material\` | Material Design icons & colors |
| \`nerd-font\` | Nerd Font glyphs |
| \`ascii\` | Classic ASCII pipes & dashes |
| \`markdown\` | Markdown-formatted nested lists |
| \`json\` | Structured JSON output |
| \`mermaid\` | Mermaid.js diagram syntax |

---

### Available Icon Packs

| Pack | Description |
| :--- | :--- |
| \`emoji\` | Colorful emoji icons (📁 📄 ⚙️) |
| \`vscode\` | VS Code file icons |
| \`material\` | Material Design file icons |
| \`nerd\` | Nerd Font devicons |
| \`none\` | No icons |
`,
  },
  config: {
    slug: 'config',
    title: 'Configuration File Guide',
    category: 'Configuration',
    description:
      'Configure RepoAtlas project defaults using repo-atlas.config.json or .repo-atlasrc.',
    readingTime: '2 min read',
    lastUpdated: 'July 22, 2026',
    content: `RepoAtlas automatically resolves configuration options from your project root. CLI arguments always override configuration file values.

---

### Supported Config Files

| File | Format |
| :--- | :--- |
| \`repo-atlas.config.json\` | JSON |
| \`repo-atlas.config.yaml\` | YAML |
| \`repo-atlas.config.ts\` | TypeScript |
| \`repo-atlas.config.js\` | JavaScript |
| \`.repo-atlasrc\` | JSON |

---

### Configuration Options

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| \`theme\` | \`string\` | \`"unicode"\` | Default rendering theme |
| \`iconPack\` | \`string\` | \`"emoji"\` | Default icon pack |
| \`maxDepth\` | \`number\` | \`10\` | Maximum recursion depth |
| \`sort\` | \`string\` | \`"name"\` | Sort strategy |
| \`only\` | \`string\` | \`"all"\` | Filter nodes |
| \`respectGitIgnore\` | \`boolean\` | \`true\` | Honor .gitignore rules |
| \`ignorePatterns\` | \`string[]\` | \`[]\` | Additional glob patterns to ignore |
| \`outputFile\` | \`string\` | \`undefined\` | Default output file path |

---

### Example: \`repo-atlas.config.json\`

\`\`\`json
{
  "theme": "vscode",
  "iconPack": "emoji",
  "maxDepth": 4,
  "sort": "name",
  "only": "all",
  "respectGitIgnore": true,
  "ignorePatterns": [
    "*.log",
    "dist/",
    "coverage/"
  ],
  "outputFile": "PROJECT_STRUCTURE.md"
}
\`\`\`

---

### Example: \`repo-atlas.config.ts\`

\`\`\`typescript
import { defineConfig } from '@repoatlasdev/config';

export default defineConfig({
  theme: 'material',
  iconPack: 'vscode',
  maxDepth: 6,
  respectGitIgnore: true,
  ignorePatterns: ['*.log', 'coverage/', '.cache/'],
});
\`\`\`
`,
  },
  'github-action': {
    slug: 'github-action',
    title: 'GitHub Action Integration',
    category: 'Integrations',
    description: 'Automate PROJECT_STRUCTURE.md generation in GitHub Actions CI/CD workflows.',
    readingTime: '3 min read',
    lastUpdated: 'July 22, 2026',
    content: `The \`@repoatlasdev/github-action\` allows you to automatically generate and maintain \`PROJECT_STRUCTURE.md\` and \`MERMAID.md\` files in your GitHub repository.

---

### Quick Start

Add this workflow to your repository at \`.github/workflows/structure.yml\`:

\`\`\`yaml
name: Generate Repository Structure
on:
  push:
    branches: [ main ]

jobs:
  structure:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: akshaykumar33/RepoAtlas@main
        with:
          auto_commit: true
          generate_mermaid: true
          output_file: 'PROJECT_STRUCTURE.md'
\`\`\`

---

### Action Inputs

| Input | Required | Default | Description |
| :--- | :--- | :--- | :--- |
| \`target_dir\` | No | \`.\` | Directory to scan |
| \`output_file\` | No | \`PROJECT_STRUCTURE.md\` | Output file path |
| \`theme\` | No | \`unicode\` | Rendering theme |
| \`icons\` | No | \`emoji\` | Icon pack |
| \`max_depth\` | No | \`10\` | Max recursion depth |
| \`generate_mermaid\` | No | \`false\` | Also generate Mermaid diagram |
| \`auto_commit\` | No | \`false\` | Auto-commit generated files |
| \`commit_message\` | No | \`docs: update project structure\` | Commit message |

---

### Advanced: Multiple Output Formats

\`\`\`yaml
- uses: akshaykumar33/RepoAtlas@main
  with:
    theme: 'material'
    icons: 'vscode'
    max_depth: '6'
    output_file: 'docs/STRUCTURE.md'
    generate_mermaid: 'true'
    auto_commit: 'true'
    commit_message: 'docs(ci): auto-update project structure'
\`\`\`

---

### Permissions

The action requires **write permissions** to commit files. Add this to your workflow:

\`\`\`yaml
permissions:
  contents: write
\`\`\`
`,
  },
  publishing: {
    slug: 'publishing',
    title: 'Publishing & Release Guide',
    category: 'Maintainers',
    description:
      'Step-by-step procedures for building, releasing, and publishing RepoAtlas packages.',
    readingTime: '3 min read',
    lastUpdated: 'July 22, 2026',
    content: `RepoAtlas packages are distributed across **npm** (core engine packages) and the **Visual Studio Code Marketplace** (VS Code extension).

---

### npm Package Publishing

#### Automated (GitHub Actions — Recommended)

Add your \`NPM_TOKEN\` to GitHub Repository Secrets. When code merges to \`main\` with a Changeset version bump, GitHub Actions automatically publishes all packages.

**Published packages:**

| Package | Registry |
| :--- | :--- |
| \`@repoatlasdev/core\` | npm |
| \`@repoatlasdev/renderers\` | npm |
| \`@repoatlasdev/exporters\` | npm |
| \`@repoatlasdev/icons\` | npm |
| \`@repoatlasdev/config\` | npm |
| \`@repoatlasdev/detector\` | npm |
| \`@repoatlasdev/utils\` | npm |
| \`@repoatlasdev/cli\` | npm |

#### Manual Publishing

\`\`\`bash
pnpm build
pnpm publish -r --access public --no-git-checks
\`\`\`

---

### VS Code Extension Publishing

The VS Code Extension is published **manually** via the [Marketplace web portal](https://marketplace.visualstudio.com/manage/publishers/repo-atlas).

#### Build & Package

\`\`\`bash
pnpm --filter repo-atlas-vscode build
cd apps/vscode
npx -y @vscode/vsce package --no-dependencies --out repo-atlas-<version>.vsix
\`\`\`

#### Upload to Marketplace

1. Go to the [Marketplace Manager](https://marketplace.visualstudio.com/manage/publishers/repo-atlas)
2. Click **⋮** next to the extension → **Update**
3. Select your \`.vsix\` file and upload

---

### Version Bumping with Changesets

\`\`\`bash
# Create a changeset
pnpm changeset

# Apply version bumps
pnpm changeset version

# Commit and push
git add . && git commit -m "chore: version packages" && git push
\`\`\`
`,
  },
};
