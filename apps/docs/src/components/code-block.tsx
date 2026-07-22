'use client';

import { Check, Copy, Terminal } from 'lucide-react';
import { useState } from 'react';

interface CodeBlockProps {
  filename?: string;
  code?: string;
  isPackageManager?: boolean;
}

const PKG_MANAGERS = [
  { name: 'npm', cmd: 'npm install @repoatlasdev/cli' },
  { name: 'pnpm', cmd: 'pnpm add @repoatlasdev/cli' },
  { name: 'yarn', cmd: 'yarn add @repoatlasdev/cli' },
  { name: 'bun', cmd: 'bun add @repoatlasdev/cli' },
];

export function CodeBlock({ filename, code, isPackageManager = false }: CodeBlockProps) {
  const [activePkg, setActivePkg] = useState(0);
  const [copied, setCopied] = useState(false);

  const displayCode = isPackageManager ? PKG_MANAGERS[activePkg].cmd : code || '';

  const copyCode = () => {
    navigator.clipboard.writeText(displayCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-border/80 bg-black/90 shadow-xl overflow-hidden my-4">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5 text-xs text-neutral-400">
        {isPackageManager ? (
          <div className="flex items-center gap-1 font-mono">
            {PKG_MANAGERS.map((pkg, idx) => (
              <button
                key={pkg.name}
                onClick={() => setActivePkg(idx)}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  activePkg === idx
                    ? 'bg-primary text-primary-foreground font-bold'
                    : 'hover:text-white'
                }`}
              >
                {pkg.name}
              </button>
            ))}
          </div>
        ) : (
          <span className="font-mono text-neutral-300 flex items-center gap-1.5">
            <Terminal className="h-3.5 w-3.5 text-blue-400" />
            {filename || 'bash'}
          </span>
        )}

        <button
          onClick={copyCode}
          className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-green-400" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      <pre className="p-4 font-mono text-xs sm:text-sm text-neutral-100 overflow-x-auto selection:bg-purple-500/30">
        <code>{displayCode}</code>
      </pre>
    </div>
  );
}
