'use client';

import { BookOpen, Command, FolderTree, Github, Moon, Sparkles, Sun, Terminal } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <FolderTree className="h-5 w-5" />
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 blur group-hover:opacity-40 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
              RepoAtlas
            </span>
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest -mt-1">
              v0.2.1 • Open Source
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-muted-foreground">
          <Link
            href="/docs/introduction"
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            <BookOpen className="h-4 w-4" />
            Documentation
          </Link>
          <Link
            href="/playground"
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            <Sparkles className="h-4 w-4 text-purple-500" />
            Live Playground
          </Link>
          <Link
            href="/#features"
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#themes"
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            Themes
          </Link>
          <Link
            href="/#command-builder"
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            <Terminal className="h-4 w-4" />
            CLI & Config Builder
          </Link>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Quick Search Badge */}
          <button
            onClick={() => {
              const searchInput = document.getElementById('global-search-trigger');
              if (searchInput) searchInput.focus();
            }}
            className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/60 bg-muted/30 text-xs text-muted-foreground hover:border-border hover:bg-muted/60 transition-all"
          >
            <Command className="h-3.5 w-3.5" />
            <span>Search docs...</span>
            <kbd className="font-mono text-[10px] bg-background px-1.5 py-0.5 rounded border border-border">
              ⌘K
            </kbd>
          </button>

          {/* Theme Toggle Button */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-muted/30 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          )}

          {/* GitHub Repository Link */}
          <a
            href="https://github.com/akshaykumar33/RepoAtlas"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-foreground text-background font-medium text-xs shadow-sm hover:opacity-90 transition-opacity"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">Star on GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
