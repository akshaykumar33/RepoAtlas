import { FolderTree, Github, Heart, Shield, Terminal } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <FolderTree className="h-4 w-4" />
              </div>
              <span className="font-bold text-base tracking-tight">RepoAtlas</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              The developer platform that transforms any repository into beautiful, configurable,
              documentation-ready, AI-friendly visual structures.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground text-xs">
              <span>Released under MIT License</span>
              <span>•</span>
              <span>TypeScript Core</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-foreground tracking-wider uppercase mb-4">
              Product
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/playground" className="hover:text-foreground transition-colors">
                  Live Playground
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#themes" className="hover:text-foreground transition-colors">
                  Theme Engine
                </Link>
              </li>
              <li>
                <Link href="/#vscode" className="hover:text-foreground transition-colors">
                  VSCode Extension
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-foreground tracking-wider uppercase mb-4">
              Documentation
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/docs/introduction" className="hover:text-foreground transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/docs/cli" className="hover:text-foreground transition-colors">
                  CLI Reference
                </Link>
              </li>
              <li>
                <Link href="/docs/config" className="hover:text-foreground transition-colors">
                  Configuration
                </Link>
              </li>
              <li>
                <Link href="/docs/api" className="hover:text-foreground transition-colors">
                  Node SDK API
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-foreground tracking-wider uppercase mb-4">
              Community
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://github.com/akshaykumar33/RepoAtlas"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://npm.im/@repoatlasdev/cli"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Terminal className="h-3.5 w-3.5" /> npm Registry
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/akshaykumar33/RepoAtlas/blob/main/SECURITY.md"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Shield className="h-3.5 w-3.5" /> Security Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} RepoAtlas. Designed & built for open-source developers.
          </p>
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
