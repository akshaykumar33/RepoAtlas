'use client';

import { ArrowRight, Check, Copy, Github, Sparkles, Terminal } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function Hero() {
  const [copied, setCopied] = useState(false);
  const installCmd = 'npm i -g @repoatlasdev/cli';

  const copyCommand = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Background Gradient Blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-pink-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium backdrop-blur-md hover:border-blue-500/50 transition-all cursor-pointer">
            <Sparkles className="h-3.5 w-3.5" />
            <span>RepoAtlas v0.2.1 Released on npm</span>
            <span className="text-muted-foreground">•</span>
            <span className="font-semibold underline">Explore v0.2.1 Specs</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Transform Any Repository Into{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Visual Art
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed font-normal">
            The standard developer platform for repo structure visualization. Generate interactive
            tree diagrams, Markdown docs, Mermaid charts, and LLM context summaries in milliseconds.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {/* Install Pill Button */}
            <div className="flex items-center justify-between gap-3 w-full sm:w-auto px-4 py-2.5 rounded-xl border border-border/80 bg-card/80 backdrop-blur-md shadow-lg font-mono text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Terminal className="h-4 w-4 text-blue-500" />
                <span className="text-foreground font-semibold">{installCmd}</span>
              </div>
              <button
                onClick={copyCommand}
                className="p-1.5 rounded-lg hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
                title="Copy command"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* Launch Playground Button */}
            <Link
              href="/playground"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/20 hover:opacity-95 transition-all group"
            >
              <span>Try Live Playground</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* GitHub Button */}
            <a
              href="https://github.com/akshaykumar33/RepoAtlas"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl border border-border bg-muted/40 font-medium text-sm hover:bg-muted/80 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-border/40 text-center w-full max-w-3xl">
            <div>
              <div className="text-2xl font-bold font-mono">100,000+</div>
              <div className="text-xs text-muted-foreground">Files Scanned / sec</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono">13+</div>
              <div className="text-xs text-muted-foreground">Export Formats</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono">8+</div>
              <div className="text-xs text-muted-foreground">Theme Renderers</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono">100%</div>
              <div className="text-xs text-muted-foreground">Open Source</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
