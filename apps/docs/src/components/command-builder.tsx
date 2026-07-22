'use client';

import { Check, Copy, Sliders, Terminal } from 'lucide-react';
import { useState } from 'react';

export function CommandBuilder() {
  const [theme, setTheme] = useState('vscode');
  const [iconPack, setIconPack] = useState('emoji');
  const [depth, setDepth] = useState(4);
  const [sort, setSort] = useState('name');
  const [only] = useState('all');
  const [showSize, setShowSize] = useState(false);
  const [gitignore, setGitignore] = useState(true);
  const [outputFile] = useState('PROJECT_STRUCTURE.md');
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [copiedConfig, setCopiedConfig] = useState(false);

  // Generated CLI Command string
  let generatedCmd = `repo-atlas generate --theme ${theme} --icons ${iconPack} --depth ${depth} --sort ${sort}`;
  if (only !== 'all') generatedCmd += ` --only ${only}`;
  if (showSize) generatedCmd += ` --show-size`;
  if (!gitignore) generatedCmd += ` --no-gitignore`;
  if (outputFile) generatedCmd += ` -o ${outputFile}`;

  // Generated JSON config
  const generatedConfig = JSON.stringify(
    {
      theme,
      iconPack,
      maxDepth: depth,
      sort,
      only,
      showSize,
      respectGitIgnore: gitignore,
      outputFile,
    },
    null,
    2
  );

  const copyCmd = () => {
    navigator.clipboard.writeText(generatedCmd);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  const copyConfig = () => {
    navigator.clipboard.writeText(generatedConfig);
    setCopiedConfig(true);
    setTimeout(() => setCopiedConfig(false), 2000);
  };

  return (
    <section id="command-builder" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
          <Sliders className="h-3.5 w-3.5" /> Interactive Generator
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          CLI Command & Config Builder
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
          Customize options visually and instantly generate CLI flag combinations or
          `repo-atlas.config.json` specifications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Controls Card */}
        <div className="border border-border/80 bg-card/80 p-6 rounded-2xl space-y-6 shadow-xl backdrop-blur-xl">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <Sliders className="h-5 w-5 text-blue-500" /> Options & Flags
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-muted-foreground block mb-1.5">
                Theme Preset
              </label>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-border bg-muted/40 font-medium text-xs"
              >
                <option value="vscode">VSCode</option>
                <option value="unicode">Unicode</option>
                <option value="material">Material</option>
                <option value="nerd-font">Nerd Font</option>
                <option value="ascii">ASCII</option>
                <option value="markdown">Markdown</option>
                <option value="mermaid">Mermaid</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-muted-foreground block mb-1.5">
                Icon Pack
              </label>
              <select
                value={iconPack}
                onChange={(e) => setIconPack(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-border bg-muted/40 font-medium text-xs"
              >
                <option value="emoji">Emoji</option>
                <option value="vscode">VSCode Icons</option>
                <option value="material">Material Icons</option>
                <option value="nerd">Nerd Fonts</option>
                <option value="plain">Plain / ASCII</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-muted-foreground block mb-1.5">
                Max Scan Depth ({depth})
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={depth}
                onChange={(e) => setDepth(parseInt(e.target.value, 10))}
                className="w-full accent-primary"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-muted-foreground block mb-1.5">
                Sorting Strategy
              </label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-border bg-muted/40 font-medium text-xs"
              >
                <option value="name">By Name</option>
                <option value="size">By Size</option>
                <option value="type">By Type</option>
              </select>
            </div>
          </div>

          <div className="pt-4 border-t border-border/40 space-y-3">
            <label className="flex items-center justify-between text-xs text-muted-foreground cursor-pointer">
              <span>Display File Sizes (`--show-size`)</span>
              <input
                type="checkbox"
                checked={showSize}
                onChange={(e) => setShowSize(e.target.checked)}
                className="h-4 w-4 rounded border-border text-primary"
              />
            </label>
            <label className="flex items-center justify-between text-xs text-muted-foreground cursor-pointer">
              <span>Respect .gitignore (`--gitignore`)</span>
              <input
                type="checkbox"
                checked={gitignore}
                onChange={(e) => setGitignore(e.target.checked)}
                className="h-4 w-4 rounded border-border text-primary"
              />
            </label>
          </div>
        </div>

        {/* Generated Output Preview */}
        <div className="space-y-6">
          {/* CLI Command Card */}
          <div className="border border-border/80 bg-card/90 rounded-2xl shadow-xl overflow-hidden backdrop-blur-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                <Terminal className="h-4 w-4 text-emerald-500" /> CLI Command Line
              </span>
              <button
                onClick={copyCmd}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-muted/50 hover:bg-muted text-xs font-medium transition-colors"
              >
                {copiedCmd ? (
                  <Check className="h-3.5 w-3.5 text-green-500" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
                <span>{copiedCmd ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="p-3.5 rounded-xl bg-black/90 text-emerald-400 font-mono text-xs overflow-x-auto border border-white/10">
              $ {generatedCmd}
            </pre>
          </div>

          {/* Config JSON Card */}
          <div className="border border-border/80 bg-card/90 rounded-2xl shadow-xl overflow-hidden backdrop-blur-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-semibold text-muted-foreground">
                📄 repo-atlas.config.json
              </span>
              <button
                onClick={copyConfig}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-muted/50 hover:bg-muted text-xs font-medium transition-colors"
              >
                {copiedConfig ? (
                  <Check className="h-3.5 w-3.5 text-green-500" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
                <span>{copiedConfig ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="p-3.5 rounded-xl bg-black/90 text-purple-300 font-mono text-xs overflow-x-auto border border-white/10">
              {generatedConfig}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
