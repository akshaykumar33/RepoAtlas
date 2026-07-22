'use client';

import { Check, Copy, Terminal } from 'lucide-react';
import { useState } from 'react';

interface CodeBlockProps {
  filename?: string;
  code?: string;
  isPackageManager?: boolean;
}

const PKG_MANAGERS = [
  { name: 'npm', cmd: 'npm install @repoatlasdev/cli', icon: '📦' },
  { name: 'pnpm', cmd: 'pnpm add @repoatlasdev/cli', icon: '⚡' },
  { name: 'yarn', cmd: 'yarn add @repoatlasdev/cli', icon: '🧶' },
  { name: 'bun', cmd: 'bun add @repoatlasdev/cli', icon: '🥟' },
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
    <div className="rounded-xl border border-white/[0.06] bg-[#0d1117] shadow-2xl shadow-black/20 overflow-hidden my-4">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
        {isPackageManager ? (
          <div className="flex items-center gap-1 font-mono text-xs">
            {PKG_MANAGERS.map((pkg, idx) => (
              <button
                key={pkg.name}
                onClick={() => setActivePkg(idx)}
                className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
                  activePkg === idx
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20 font-bold scale-[1.02]'
                    : 'text-neutral-500 hover:text-neutral-300 hover:bg-white/[0.04]'
                }`}
              >
                <span className="mr-1">{pkg.icon}</span> {pkg.name}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]/80" />
              <div className="h-3 w-3 rounded-full bg-[#febc2e]/80" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]/80" />
            </div>
            <span className="ml-2 font-mono text-[11px] text-neutral-500 flex items-center gap-1.5">
              <Terminal className="h-3 w-3 text-blue-400" />
              {filename || 'terminal'}
            </span>
          </div>
        )}

        <button
          onClick={copyCode}
          className="flex items-center gap-1.5 text-[11px] text-neutral-500 hover:text-neutral-200 transition-colors px-2 py-1 rounded-md hover:bg-white/[0.04]"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-emerald-400" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      {/* Code content */}
      <div className="relative">
        {isPackageManager && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500/70 font-mono text-xs select-none">
            $
          </div>
        )}
        <pre
          className={`p-4 font-mono text-[13px] leading-6 text-neutral-100 overflow-x-auto selection:bg-purple-500/30 ${isPackageManager ? 'pl-8' : ''}`}
        >
          <code>{displayCode}</code>
        </pre>
      </div>
    </div>
  );
}
