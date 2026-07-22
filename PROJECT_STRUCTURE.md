└── 📁 repo-atlas
├── 📁 apps
│ ├── 📁 cli
│ │ ├── 📁 src
│ │ │ ├── 📁 commands
│ │ │ │ ├── 🔷 configCmd.ts
│ │ │ │ ├── 🔷 doctor.ts
│ │ │ │ ├── 🔷 generate.ts
│ │ │ │ ├── 🔷 init.ts
│ │ │ │ └── 🔷 preview.ts
│ │ │ ├── 🔷 cli.ts
│ │ │ └── 🔷 index.ts
│ │ ├── 📁 tests
│ │ │ └── 🔷 cli.test.ts
│ │ ├── 📋 package.json
│ │ ├── 📋 tsconfig.json
│ │ └── 🔷 tsup.config.ts
│ ├── 📁 docs
│ │ ├── 📁 docs
│ │ │ ├── 📝 api.md
│ │ │ ├── 📝 changelog.md
│ │ │ ├── 📝 cli.md
│ │ │ ├── 📝 configuration.md
│ │ │ ├── 📝 contributing.md
│ │ │ ├── 📝 examples.md
│ │ │ ├── 📝 export-formats.md
│ │ │ ├── 📝 faq.md
│ │ │ ├── 📝 icons.md
│ │ │ ├── 📝 installation.md
│ │ │ ├── 📝 intro.md
│ │ │ ├── 📝 quick-start.md
│ │ │ └── 📝 themes.md
│ │ ├── 📁 src
│ │ │ ├── 📁 components
│ │ │ │ ├── 📄 CommandGenerator.tsx
│ │ │ │ ├── 📄 ExportPreview.tsx
│ │ │ │ ├── 📄 LiveTreePreview.tsx
│ │ │ │ └── 📄 ThemeGallery.tsx
│ │ │ ├── 📁 css
│ │ │ │ └── 🎨 custom.css
│ │ │ ├── 📁 pages
│ │ │ │ ├── 📄 index.tsx
│ │ │ │ └── 📄 tools.tsx
│ │ │ ├── 🔷 docusaurus.d.ts
│ │ │ └── 🔷 index.ts
│ │ ├── 🟨 docusaurus.config.js
│ │ ├── 📋 package.json
│ │ ├── 🟨 sidebars.js
│ │ ├── 📋 tsconfig.json
│ │ └── 🔷 tsup.config.ts
│ └── 📁 vscode
│ ├── 📁 src
│ │ ├── 🔷 extension.ts
│ │ ├── 🔷 index.ts
│ │ └── 🔷 previewWebview.ts
│ ├── 📁 tests
│ │ └── 🔷 extension.test.ts
│ ├── 📋 package.json
│ ├── 📄 repo-atlas-vscode-0.1.0.vsix
│ ├── 📋 tsconfig.json
│ └── 🔷 tsup.config.ts
├── 📁 packages
│ ├── 📁 config
│ │ ├── 📁 src
│ │ │ ├── 🔷 index.ts
│ │ │ ├── 🔷 loader.ts
│ │ │ └── 🔷 types.ts
│ │ ├── 📁 tests
│ │ │ └── 🔷 config.test.ts
│ │ ├── 📋 package.json
│ │ ├── 📋 tsconfig.json
│ │ └── 🔷 tsup.config.ts
│ ├── 📁 core
│ │ ├── 📁 src
│ │ │ ├── 📁 filter
│ │ │ │ └── 🔷 ignore.ts
│ │ │ ├── 📁 metadata
│ │ │ │ └── 🔷 index.ts
│ │ │ ├── 📁 symlink
│ │ │ │ └── 🔷 index.ts
│ │ │ ├── 📁 types
│ │ │ │ └── 🔷 tree.ts
│ │ │ ├── 🔷 index.ts
│ │ │ ├── 🔷 scanner.ts
│ │ │ └── 🔷 tree.ts
│ │ ├── 📁 tests
│ │ │ └── 🔷 scanner.test.ts
│ │ ├── 📋 package.json
│ │ ├── 📋 tsconfig.json
│ │ └── 🔷 tsup.config.ts
│ ├── 📁 detector
│ │ ├── 📁 src
│ │ │ ├── 🔷 detector.ts
│ │ │ ├── 🔷 index.ts
│ │ │ └── 🔷 types.ts
│ │ ├── 📁 tests
│ │ │ └── 🔷 detector.test.ts
│ │ ├── 📋 package.json
│ │ ├── 📋 tsconfig.json
│ │ └── 🔷 tsup.config.ts
│ ├── 📁 exporters
│ │ ├── 📁 src
│ │ │ ├── 📁 plugins
│ │ │ │ ├── 🔷 csv.ts
│ │ │ │ ├── 🔷 docx.ts
│ │ │ │ ├── 🔷 html.ts
│ │ │ │ ├── 🔷 json.ts
│ │ │ │ ├── 🔷 md.ts
│ │ │ │ ├── 🔷 mermaid.ts
│ │ │ │ ├── 🔷 pdf.ts
│ │ │ │ ├── 🔷 plantuml.ts
│ │ │ │ ├── 🔷 png.ts
│ │ │ │ ├── 🔷 svg.ts
│ │ │ │ ├── 🔷 txt.ts
│ │ │ │ ├── 🔷 xml.ts
│ │ │ │ └── 🔷 yaml.ts
│ │ │ ├── 🔷 index.ts
│ │ │ ├── 🔷 registry.ts
│ │ │ └── 🔷 types.ts
│ │ ├── 📁 tests
│ │ │ └── 🔷 exporters.test.ts
│ │ ├── 📋 package.json
│ │ ├── 📋 tsconfig.json
│ │ └── 🔷 tsup.config.ts
│ ├── 📁 github-action
│ │ ├── 📁 src
│ │ │ ├── 🔷 action.ts
│ │ │ └── 🔷 index.ts
│ │ ├── 📁 tests
│ │ │ └── 🔷 action.test.ts
│ │ ├── 📄 action.yml
│ │ ├── 📋 package.json
│ │ ├── 📋 tsconfig.json
│ │ └── 🔷 tsup.config.ts
│ ├── 📁 icons
│ │ ├── 📁 src
│ │ │ ├── 🔷 index.ts
│ │ │ ├── 🔷 presets.ts
│ │ │ ├── 🔷 resolver.ts
│ │ │ └── 🔷 types.ts
│ │ ├── 📁 tests
│ │ │ └── 🔷 icons.test.ts
│ │ ├── 📋 package.json
│ │ ├── 📋 tsconfig.json
│ │ └── 🔷 tsup.config.ts
│ ├── 📁 renderers
│ │ ├── 📁 src
│ │ │ ├── 📁 engine
│ │ │ │ └── 🔷 base.ts
│ │ │ ├── 📁 plugins
│ │ │ │ ├── 🔷 ascii.ts
│ │ │ │ ├── 🔷 json.ts
│ │ │ │ ├── 🔷 markdown.ts
│ │ │ │ ├── 🔷 material.ts
│ │ │ │ ├── 🔷 mermaid.ts
│ │ │ │ ├── 🔷 nerd.ts
│ │ │ │ ├── 🔷 unicode.ts
│ │ │ │ └── 🔷 vscode.ts
│ │ │ ├── 📁 theme
│ │ │ │ ├── 🔷 presets.ts
│ │ │ │ └── 🔷 types.ts
│ │ │ ├── 🔷 index.ts
│ │ │ ├── 🔷 registry.ts
│ │ │ └── 🔷 types.ts
│ │ ├── 📁 tests
│ │ │ └── 🔷 renderers.test.ts
│ │ ├── 📋 package.json
│ │ ├── 📋 tsconfig.json
│ │ └── 🔷 tsup.config.ts
│ └── 📁 utils
│ ├── 📁 src
│ │ ├── 🔷 format.ts
│ │ ├── 🔷 index.ts
│ │ └── 🔷 path.ts
│ ├── 📁 tests
│ │ └── 🔷 utils.test.ts
│ ├── 📋 package.json
│ ├── 📋 tsconfig.json
│ └── 🔷 tsup.config.ts
├── 📝 AGENTS.md
├── 📝 CODE_OF_CONDUCT.md
├── 📝 CONTRIBUTING.md
├── 🟨 eslint.config.js
├── 📄 LICENSE
├── 📋 package.json
├── 📄 pnpm-lock.yaml
├── 📄 pnpm-workspace.yaml
├── 📝 PROJECT_STRUCTURE.md
├── 📝 README.md
├── 📝 SECURITY.md
├── 📋 tsconfig.base.json
├── 📋 tsconfig.json
├── 📋 turbo.json
└── 🔷 vitest.workspace.ts
