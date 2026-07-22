'use client';

import { TreeNode } from '@repoatlasdev/core';
import { ExporterRegistry } from '@repoatlasdev/exporters';
import { IconPack, IconResolver } from '@repoatlasdev/icons';
import { RendererRegistry } from '@repoatlasdev/renderers';
import confetti from 'canvas-confetti';
import {
  Check,
  Copy,
  Download,
  Layers,
  Palette,
  RefreshCw,
  Settings2,
  Sliders,
  Sparkles,
} from 'lucide-react';
import { useMemo, useState } from 'react';

const PRESET_REPOS: Record<string, { name: string; tree: TreeNode }> = {
  monorepo: {
    name: 'RepoAtlas Monorepo',
    tree: {
      id: '.',
      name: 'RepoAtlas',
      path: '/RepoAtlas',
      relativePath: '.',
      type: 'directory',
      children: [
        {
          id: 'apps',
          name: 'apps',
          path: '/RepoAtlas/apps',
          relativePath: 'apps',
          type: 'directory',
          children: [
            {
              id: 'apps/cli',
              name: 'cli',
              path: '/RepoAtlas/apps/cli',
              relativePath: 'apps/cli',
              type: 'directory',
              children: [
                {
                  id: 'apps/cli/package.json',
                  name: 'package.json',
                  path: '/RepoAtlas/apps/cli/package.json',
                  relativePath: 'apps/cli/package.json',
                  type: 'file',
                },
                {
                  id: 'apps/cli/src',
                  name: 'src',
                  path: '/RepoAtlas/apps/cli/src',
                  relativePath: 'apps/cli/src',
                  type: 'directory',
                  children: [],
                },
              ],
            },
            {
              id: 'apps/docs',
              name: 'docs',
              path: '/RepoAtlas/apps/docs',
              relativePath: 'apps/docs',
              type: 'directory',
              children: [
                {
                  id: 'apps/docs/package.json',
                  name: 'package.json',
                  path: '/RepoAtlas/apps/docs/package.json',
                  relativePath: 'apps/docs/package.json',
                  type: 'file',
                },
                {
                  id: 'apps/docs/next.config.mjs',
                  name: 'next.config.mjs',
                  path: '/RepoAtlas/apps/docs/next.config.mjs',
                  relativePath: 'apps/docs/next.config.mjs',
                  type: 'file',
                },
              ],
            },
            {
              id: 'apps/vscode',
              name: 'vscode',
              path: '/RepoAtlas/apps/vscode',
              relativePath: 'apps/vscode',
              type: 'directory',
              children: [
                {
                  id: 'apps/vscode/package.json',
                  name: 'package.json',
                  path: '/RepoAtlas/apps/vscode/package.json',
                  relativePath: 'apps/vscode/package.json',
                  type: 'file',
                },
              ],
            },
          ],
        },
        {
          id: 'packages',
          name: 'packages',
          path: '/RepoAtlas/packages',
          relativePath: 'packages',
          type: 'directory',
          children: [
            {
              id: 'packages/core',
              name: 'core',
              path: '/RepoAtlas/packages/core',
              relativePath: 'packages/core',
              type: 'directory',
              children: [],
            },
            {
              id: 'packages/renderers',
              name: 'renderers',
              path: '/RepoAtlas/packages/renderers',
              relativePath: 'packages/renderers',
              type: 'directory',
              children: [],
            },
            {
              id: 'packages/exporters',
              name: 'exporters',
              path: '/RepoAtlas/packages/exporters',
              relativePath: 'packages/exporters',
              type: 'directory',
              children: [],
            },
            {
              id: 'packages/icons',
              name: 'icons',
              path: '/RepoAtlas/packages/icons',
              relativePath: 'packages/icons',
              type: 'directory',
              children: [],
            },
          ],
        },
        {
          id: 'package.json',
          name: 'package.json',
          path: '/RepoAtlas/package.json',
          relativePath: 'package.json',
          type: 'file',
        },
        {
          id: 'README.md',
          name: 'README.md',
          path: '/RepoAtlas/README.md',
          relativePath: 'README.md',
          type: 'file',
        },
        {
          id: 'pnpm-workspace.yaml',
          name: 'pnpm-workspace.yaml',
          path: '/RepoAtlas/pnpm-workspace.yaml',
          relativePath: 'pnpm-workspace.yaml',
          type: 'file',
        },
      ],
    },
  },
  nextjs: {
    name: 'Next.js 14 E-Commerce App',
    tree: {
      id: '.',
      name: 'my-store',
      path: '/my-store',
      relativePath: '.',
      type: 'directory',
      children: [
        {
          id: 'src',
          name: 'src',
          path: '/my-store/src',
          relativePath: 'src',
          type: 'directory',
          children: [
            {
              id: 'src/app',
              name: 'app',
              path: '/my-store/src/app',
              relativePath: 'src/app',
              type: 'directory',
              children: [
                {
                  id: 'src/app/page.tsx',
                  name: 'page.tsx',
                  path: '/my-store/src/app/page.tsx',
                  relativePath: 'src/app/page.tsx',
                  type: 'file',
                },
                {
                  id: 'src/app/layout.tsx',
                  name: 'layout.tsx',
                  path: '/my-store/src/app/layout.tsx',
                  relativePath: 'src/app/layout.tsx',
                  type: 'file',
                },
                {
                  id: 'src/app/globals.css',
                  name: 'globals.css',
                  path: '/my-store/src/app/globals.css',
                  relativePath: 'src/app/globals.css',
                  type: 'file',
                },
              ],
            },
            {
              id: 'src/components',
              name: 'components',
              path: '/my-store/src/components',
              relativePath: 'src/components',
              type: 'directory',
              children: [
                {
                  id: 'src/components/button.tsx',
                  name: 'button.tsx',
                  path: '/my-store/src/components/button.tsx',
                  relativePath: 'src/components/button.tsx',
                  type: 'file',
                },
                {
                  id: 'src/components/card.tsx',
                  name: 'card.tsx',
                  path: '/my-store/src/components/card.tsx',
                  relativePath: 'src/components/card.tsx',
                  type: 'file',
                },
              ],
            },
          ],
        },
        {
          id: 'package.json',
          name: 'package.json',
          path: '/my-store/package.json',
          relativePath: 'package.json',
          type: 'file',
        },
        {
          id: 'tailwind.config.ts',
          name: 'tailwind.config.ts',
          path: '/my-store/tailwind.config.ts',
          relativePath: 'tailwind.config.ts',
          type: 'file',
        },
      ],
    },
  },
};

export function LivePlayground() {
  const [selectedPreset, setSelectedPreset] = useState<string>('monorepo');
  const [theme, setTheme] = useState<string>('vscode');
  const [iconPack, setIconPack] = useState<IconPack>('vscode');
  const [exportFormat, setExportFormat] = useState<string>('tree');
  const [showSize, setShowSize] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const activeTree = PRESET_REPOS[selectedPreset].tree;

  // Real-time Renderer Registry
  const renderedContent = useMemo(() => {
    if (exportFormat !== 'tree') {
      const exporterRegistry = new ExporterRegistry();
      try {
        const res = exporterRegistry.export(activeTree, exportFormat);
        return String(res.content);
      } catch {
        return 'Error exporting format';
      }
    }

    const rendererRegistry = new RendererRegistry();
    const iconResolver = new IconResolver(iconPack);
    return rendererRegistry.render(activeTree, theme, { iconResolver, showSize });
  }, [activeTree, theme, iconPack, exportFormat, showSize]);

  const handleCopy = () => {
    navigator.clipboard.writeText(renderedContent);
    setCopied(true);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([renderedContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `PROJECT_STRUCTURE.${exportFormat === 'tree' ? 'txt' : exportFormat}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="playground" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold">
          <Sparkles className="h-3.5 w-3.5" /> Live Interactive Playground
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Test RepoAtlas Engine Live
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
          Change themes, icon packs, exporters, and view instant live rendering updates powered by
          the core TypeScript engine.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Sidebar Controls */}
        <div className="lg:col-span-1 border border-border/80 bg-card/80 p-5 rounded-2xl space-y-6 shadow-xl backdrop-blur-xl">
          {/* Preset Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5 text-blue-500" /> Preset Repository
            </label>
            <select
              value={selectedPreset}
              onChange={(e) => setSelectedPreset(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-border bg-muted/40 font-medium text-xs focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="monorepo">RepoAtlas Monorepo</option>
              <option value="nextjs">Next.js 14 App</option>
            </select>
          </div>

          {/* Theme Preset */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
              <Palette className="h-3.5 w-3.5 text-purple-500" /> Theme Preset
            </label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-border bg-muted/40 font-medium text-xs focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="vscode">VSCode Theme</option>
              <option value="material">Material Theme</option>
              <option value="unicode">Unicode Tree</option>
              <option value="nerd-font">Nerd Font</option>
              <option value="ascii">ASCII Plain</option>
              <option value="markdown">Markdown List</option>
              <option value="json">JSON Tree</option>
              <option value="mermaid">Mermaid Diagram</option>
            </select>
          </div>

          {/* Icon Pack */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
              <Settings2 className="h-3.5 w-3.5 text-emerald-500" /> Icon Pack
            </label>
            <select
              value={iconPack}
              onChange={(e) => setIconPack(e.target.value as IconPack)}
              className="w-full px-3 py-2 rounded-lg border border-border bg-muted/40 font-medium text-xs focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="vscode">VSCode Icons</option>
              <option value="emoji">Emoji Pack</option>
              <option value="material">Material Icons</option>
              <option value="nerd">Nerd Fonts</option>
              <option value="ascii">Plain / None</option>
            </select>
          </div>

          {/* Export Mode */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
              <Sliders className="h-3.5 w-3.5 text-pink-500" /> Mode / Exporter
            </label>
            <select
              value={exportFormat}
              onChange={(e) => setExportFormat(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-border bg-muted/40 font-medium text-xs focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="tree">Live Rendered Tree</option>
              <option value="md">Markdown (.md)</option>
              <option value="mermaid">Mermaid Flowchart</option>
              <option value="json">Raw JSON Data</option>
              <option value="yaml">YAML Spec</option>
              <option value="html">HTML Output</option>
            </select>
          </div>

          {/* Toggles */}
          <div className="pt-2 border-t border-border/40 space-y-3">
            <label className="flex items-center justify-between text-xs text-muted-foreground cursor-pointer">
              <span>Display File Sizes</span>
              <input
                type="checkbox"
                checked={showSize}
                onChange={(e) => setShowSize(e.target.checked)}
                className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
              />
            </label>
          </div>
        </div>

        {/* Live Tree Preview Canvas */}
        <div className="lg:col-span-3 border border-border/80 bg-card/90 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col min-h-[450px]">
          {/* Canvas Top Bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border/60 bg-muted/30">
            <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
              <span className="font-semibold text-foreground flex items-center gap-1.5">
                <RefreshCw className="h-3.5 w-3.5 text-blue-500 animate-spin" />
                Live Preview
              </span>
              <span>•</span>
              <span className="text-purple-400 font-medium">
                {PRESET_REPOS[selectedPreset].name}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-muted/50 hover:bg-muted font-medium text-xs transition-colors"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-green-500" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-medium text-xs shadow-sm hover:opacity-90 transition-opacity"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Export</span>
              </button>
            </div>
          </div>

          {/* Rendered Text Box */}
          <div className="p-6 font-mono text-xs sm:text-sm bg-black/90 text-neutral-100 flex-1 overflow-x-auto selection:bg-purple-500/30">
            <pre className="leading-relaxed whitespace-pre font-mono">{renderedContent}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}
