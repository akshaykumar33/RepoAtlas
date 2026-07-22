import { CliSimulator } from '@/components/cli-simulator';
import { CommandBuilder } from '@/components/command-builder';
import { FeaturesGrid } from '@/components/features-grid';
import { Hero } from '@/components/hero';
import { LivePlayground } from '@/components/live-playground';
import { ThemeGallery } from '@/components/theme-gallery';
import { Code, ExternalLink, Github, Zap } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Hero Section */}
      <Hero />

      {/* CLI Simulator */}
      <CliSimulator />

      {/* Features Grid */}
      <FeaturesGrid />

      {/* Theme Gallery */}
      <ThemeGallery />

      {/* Command & Config Builder */}
      <CommandBuilder />

      {/* Live Interactive Playground */}
      <LivePlayground />

      {/* VSCode & GitHub Action Integration Section */}
      <section id="vscode" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border/80 bg-gradient-to-br from-card via-card to-blue-950/20 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold">
                <Zap className="h-3.5 w-3.5" /> IDE & CI Integration
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                VSCode Extension & GitHub Action
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Generate structures directly inside VS Code Explorer context menus or automatically
                update `PROJECT_STRUCTURE.md` in CI workflows on every git push.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://marketplace.visualstudio.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 hover:opacity-90 transition-opacity"
                >
                  <span>Install VSCode Extension</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <Link
                  href="/docs/github-action"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-muted/40 font-semibold text-xs hover:bg-muted/80 transition-colors"
                >
                  <Code className="h-3.5 w-3.5 text-purple-400" />
                  <span>GitHub Action Setup</span>
                </Link>
              </div>
            </div>

            {/* Visual Action Spec Box */}
            <div className="border border-white/10 bg-black/80 rounded-2xl p-5 font-mono text-xs text-neutral-200 shadow-2xl overflow-x-auto">
              <div className="text-neutral-400 mb-2"># .github/workflows/structure.yml</div>
              <pre className="text-purple-300">
                {`name: Update Project Structure
on:
  push:
    branches: [ main ]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: repoatlasdev/github-action@v0.2.1
        with:
          auto_commit: true
          generate_mermaid: true`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Product Roadmap & Community */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Open Source & Community Driven
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            RepoAtlas is an open-source standard for codebase visualization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-border/60 bg-card/80 p-6 rounded-2xl space-y-3 shadow-lg">
            <div className="text-xs font-semibold text-blue-500 uppercase tracking-wider">
              Phase 1 (Completed)
            </div>
            <h3 className="font-bold text-lg">Core Engine & Exporters</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              100,000+ files scanner, 13 exporter plugins, 8 theme renderers, CLI, and VS Code
              extension.
            </p>
          </div>
          <div className="border border-border/60 bg-card/80 p-6 rounded-2xl space-y-3 shadow-lg">
            <div className="text-xs font-semibold text-purple-500 uppercase tracking-wider">
              Phase 2 (Active)
            </div>
            <h3 className="font-bold text-lg">Interactive Web App & Docs</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Next.js App Router live playground, command builder, and interactive documentation
              suite.
            </p>
          </div>
          <div className="border border-border/60 bg-card/80 p-6 rounded-2xl space-y-3 shadow-lg">
            <div className="text-xs font-semibold text-pink-500 uppercase tracking-wider">
              Phase 3 (Upcoming)
            </div>
            <h3 className="font-bold text-lg">AI Architecture Summarizer</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Automated repository architecture diagrams, folder explanations, and vector context
              embeddings.
            </p>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 max-w-4xl mx-auto px-4 text-center">
        <div className="border border-border/80 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-transparent p-10 sm:p-14 rounded-3xl space-y-6 shadow-2xl backdrop-blur-xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Ready to Visualize Your Codebase?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Get started in under 10 seconds. Install the CLI or try out the live web playground.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <Link
              href="/playground"
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
            >
              Open Live Playground
            </Link>
            <a
              href="https://github.com/akshaykumar33/RepoAtlas"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl border border-border bg-card font-semibold text-sm hover:bg-muted transition-colors flex items-center gap-2"
            >
              <Github className="h-4 w-4" /> View GitHub Repository
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
