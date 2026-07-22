'use client';

import { Check, Copy, Play, Terminal } from 'lucide-react';
import { useState } from 'react';

const CLI_EXAMPLES = [
  {
    cmd: 'repo-atlas generate --theme vscode --sort size',
    desc: 'Generate VSCode-styled tree sorted by file size',
    output: `my-awesome-app
├── 📁 apps
│   ├── 📁 docs
│   │   ├── 📋 package.json (1.3 KB)
│   │   └── 📘 next.config.mjs (850 B)
│   └── 📁 web (4.2 MB)
├── 📁 packages
│   ├── 🔷 core (1.8 MB)
│   └── 🎨 renderers (950 KB)
└── 📝 README.md (3.4 KB)`,
  },
  {
    cmd: 'repo-atlas generate -o PROJECT_STRUCTURE.md --theme markdown',
    desc: 'Export structured Markdown file for documentation & PRs',
    output: `✨ Scanned repository in 12ms (84 files, 14 directories)
📄 Created PROJECT_STRUCTURE.md

# Project Structure
- 📁 **src**
  - 🔷 **index.ts**
  - 🔷 **cli.ts**
- 📋 **package.json**
- 📝 **README.md**`,
  },
  {
    cmd: 'repo-atlas doctor',
    desc: 'Verify local environment health and active plugins',
    output: `🩺 RepoAtlas Doctor Diagnostic Report
Node.js Version : v20.19.43
Platform        : win32 (x64)
Config Keys     : 8 resolved
Render Themes   : 8 available [ascii, unicode, vscode, material, nerd-font, markdown, json, mermaid]
Exporter Plugins: 13 registered [txt, md, html, json, yaml, xml, csv, docx, pdf, svg, png, mermaid, plantuml]
Status          : 0 errors detected. System healthy!`,
  },
  {
    cmd: 'repo-atlas config list',
    desc: 'Inspect resolved configuration settings',
    output: `{
  "format": "unicode",
  "maxDepth": 4,
  "theme": "vscode",
  "iconPack": "emoji",
  "respectGitIgnore": true,
  "ignorePatterns": ["*.log", "dist/"]
}`,
  },
];

export function CliSimulator() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeExample = CLI_EXAMPLES[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeExample.cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="rounded-2xl border border-border/80 bg-card/90 shadow-2xl shadow-purple-500/5 backdrop-blur-xl overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-muted/40">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-2 font-mono text-xs text-muted-foreground flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5 text-blue-500" /> bash — repo-atlas-cli
            </span>
          </div>

          {/* Command Selector Tabs */}
          <div className="flex items-center gap-1">
            {CLI_EXAMPLES.map((ex, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-2.5 py-1 rounded-md font-mono text-xs transition-colors ${
                  activeTab === idx
                    ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                    : 'text-muted-foreground hover:bg-muted/80'
                }`}
              >
                Cmd {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Terminal Content Body */}
        <div className="p-6 font-mono text-xs sm:text-sm space-y-4 bg-black/90 text-neutral-100 min-h-[300px]">
          {/* Active Command Line */}
          <div className="flex items-center justify-between gap-4 bg-white/5 p-3 rounded-lg border border-white/10">
            <div className="flex items-center gap-2 overflow-x-auto text-blue-400 font-semibold">
              <span className="text-emerald-400">➜</span>
              <span className="text-purple-400">~/my-repo</span>
              <span className="text-white">$</span>
              <span>{activeExample.cmd}</span>
            </div>
            <button
              onClick={handleCopy}
              className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-neutral-300 transition-colors"
              title="Copy Command"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-emerald-400" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </button>
          </div>

          {/* Description */}
          <p className="text-neutral-400 text-xs flex items-center gap-2 italic">
            <Play className="h-3 w-3 text-emerald-400 fill-emerald-400" />
            {activeExample.desc}
          </p>

          {/* Rendered Output */}
          <pre className="text-neutral-200 leading-relaxed overflow-x-auto p-4 rounded-lg bg-black/60 border border-white/5 selection:bg-purple-500/30">
            {activeExample.output}
          </pre>
        </div>
      </div>
    </section>
  );
}
