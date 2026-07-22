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
    content: `
RepoAtlas is an open-source developer platform designed to make software repositories readable, understandable, and visually stunning.

It is **NOT** just another CLI tree command.

### Why RepoAtlas?

Traditional \`tree\` output lacks contextual icons, theme palettes, Markdown formatting, and exporter plugins. RepoAtlas provides:

- 🚀 **High-Throughput Core**: Scans 100,000+ files in sub-milliseconds.
- 🎨 **Multi-Theme Engine**: Render in VSCode, Material, Unicode, Nerd Font, ASCII, Markdown, and Mermaid.
- 📦 **13 Exporter Formats**: Export trees to \`md\`, \`html\`, \`json\`, \`yaml\`, \`xml\`, \`csv\`, \`docx\`, \`pdf\`, \`svg\`, \`png\`, and \`mermaid\`.
- 🤖 **AI Prompt Generator**: Compress repo trees into token-optimized context for LLMs.
- ⚡ **VSCode & GitHub Action Integration**: Visualize in VS Code Explorer or auto-commit in CI/CD workflows.

---

### Core Data Pipeline

Every repository scan in RepoAtlas moves strictly through a unidirectional architecture:

\`\`\`
Filesystem ➔ Scanner ➔ Tree Model ➔ Transformer ➔ Renderer ➔ Exporter ➔ Output
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
    content: `
The \`@repoatlasdev/cli\` package provides a fast, predictable CLI tool for generating repository visualizations.

### Primary Commands

#### \`repo-atlas generate [dir]\`
Generates a visual repository tree.

**Options:**
- \`-t, --theme <name>\`: Specify theme (\`unicode\`, \`vscode\`, \`material\`, \`nerd-font\`, \`markdown\`, \`json\`, \`mermaid\`)
- \`-i, --icons <pack>\`: Specify icon pack (\`emoji\`, \`vscode\`, \`material\`, \`nerd\`, \`none\`)
- \`-d, --depth <number>\`: Maximum scan recursion depth
- \`-s, --sort <type>\`: Sort strategy (\`name\`, \`size\`, \`type\`)
- \`--only <type>\`: Filter node display (\`all\`, \`files\`, \`directories\`)
- \`-o, --output <file>\`: Output file path

#### \`repo-atlas preview [dir]\`
Launches a live interactive watcher that re-renders the tree structure in real-time as files change.

#### \`repo-atlas doctor\`
Executes environment health diagnostics, checking Node version, platform, and registered plugins.
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
    content: `
RepoAtlas automatically resolves configuration options from \`repo-atlas.config.json\` or \`.repo-atlasrc\` located in your project root.

### Sample \`repo-atlas.config.json\`

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
`,
  },
  'github-action': {
    slug: 'github-action',
    title: 'GitHub Action Integration',
    category: 'Integrations',
    description: 'Automate PROJECT_STRUCTURE.md generation in GitHub Actions CI/CD workflows.',
    readingTime: '3 min read',
    lastUpdated: 'July 22, 2026',
    content: `
The \`@repoatlasdev/github-action\` allows you to automatically generate and maintain \`PROJECT_STRUCTURE.md\` and \`MERMAID.md\` files in your GitHub repository.

### Workflow Example

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
      - uses: repoatlasdev/github-action@v0.2.1
        with:
          auto_commit: true
          generate_mermaid: true
          output_file: 'PROJECT_STRUCTURE.md'
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
    content: `
RepoAtlas packages are distributed across **npm** (core engine packages) and **Visual Studio Marketplace** (VS Code extension).

### 📦 1. npm Package Publishing (@repoatlasdev/*)

#### Automated Publishing via GitHub Actions
Add your \`NPM_TOKEN\` to GitHub Repository Secrets. Whenever code is merged to \`main\` with a version bump or Changeset, GitHub Actions automatically publishes all packages:
- \`@repoatlasdev/core\`
- \`@repoatlasdev/renderers\`
- \`@repoatlasdev/exporters\`
- \`@repoatlasdev/icons\`
- \`@repoatlasdev/config\`
- \`@repoatlasdev/detector\`
- \`@repoatlasdev/utils\`
- \`@repoatlasdev/cli\`

#### Manual Terminal Publishing
To publish updated packages directly from terminal:
\`\`\`bash
pnpm build
pnpm publish -r --access public --no-git-checks
\`\`\`

---

### 🔌 2. VS Code Extension Publishing (codeBeyond / repo-atlas)

The VS Code Extension is packaged into a \`.vsix\` installer file:

\`\`\`bash
# Build & package .vsix bundle
pnpm --filter repo-atlas build
cd apps/vscode
npx -y @vscode/vsce package --no-dependencies --out repo-atlas-0.2.1.vsix
\`\`\`

#### Web Upload to Marketplace:
1. Navigate to [Visual Studio Marketplace Manager](https://marketplace.visualstudio.com/manage/publishers/repo-atlas).
2. Click **+ New extension** ➔ **Visual Studio Code**.
3. Drag & drop the \`repo-atlas-0.2.1.vsix\` package to upload!
`,
  },
};
