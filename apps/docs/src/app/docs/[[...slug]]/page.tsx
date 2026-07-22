import { CodeBlock } from '@/components/code-block';
import { DocActions } from '@/components/doc-actions';
import { MarkdownRenderer } from '@/components/markdown-renderer';
import { DOCS_DATA } from '@/data/docs-content';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronRight,
  Clock,
  FolderTree,
  Layers,
  Rocket,
  Search,
  Terminal,
} from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [
    { slug: [] },
    { slug: ['introduction'] },
    { slug: ['cli'] },
    { slug: ['config'] },
    { slug: ['github-action'] },
    { slug: ['publishing'] },
  ];
}

export async function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const currentSlug = params.slug?.[0] || 'introduction';
  const doc = DOCS_DATA[currentSlug];
  if (!doc) return { title: 'Docs — RepoAtlas' };
  return {
    title: `${doc.title} — RepoAtlas Docs`,
    description: doc.description,
  };
}

export default function DocsPage({ params }: { params: { slug?: string[] } }) {
  const currentSlug = params.slug?.[0] || 'introduction';
  const doc = DOCS_DATA[currentSlug];

  if (!doc) {
    notFound();
  }

  const navItems = [
    { slug: 'introduction', title: 'Introduction', category: 'Getting Started' },
    { slug: 'cli', title: 'CLI Reference', category: 'Core Modules' },
    { slug: 'config', title: 'Configuration File', category: 'Configuration' },
    { slug: 'github-action', title: 'GitHub Action', category: 'Integrations' },
    { slug: 'publishing', title: 'Publishing Guide', category: 'Maintainers' },
  ];

  const currentIndex = navItems.findIndex((item) => item.slug === currentSlug);
  const prevDoc = currentIndex > 0 ? navItems[currentIndex - 1] : null;
  const nextDoc = currentIndex < navItems.length - 1 ? navItems[currentIndex + 1] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sticky Sidebar Navigation */}
        <aside className="lg:col-span-1 border-r border-border/40 pr-6 space-y-6 hidden lg:block sticky top-20 h-[calc(100vh-6rem)] overflow-y-auto">
          {/* Version Selector */}
          <div className="flex items-center justify-between p-2.5 rounded-xl border border-border bg-card/60 shadow-sm backdrop-blur-md">
            <div className="flex items-center gap-2">
              <FolderTree className="h-4 w-4 text-blue-500" />
              <span className="text-xs font-semibold">Docs Version</span>
            </div>
            <span className="text-[10px] font-mono font-bold bg-primary/20 text-primary px-2 py-0.5 rounded-md">
              v0.2.1
            </span>
          </div>

          {/* Quick Search Trigger */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
            <input
              id="global-search-trigger"
              type="text"
              placeholder="Search docs..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-border/80 bg-background text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Navigation Category Groups */}
          <div className="space-y-5 text-xs font-medium">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5 text-blue-400" /> Getting Started
              </div>
              <ul className="space-y-1">
                {navItems
                  .filter((i) => i.category === 'Getting Started')
                  .map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/docs/${item.slug}`}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                          currentSlug === item.slug
                            ? 'bg-primary/10 text-primary font-semibold border border-primary/30 shadow-sm'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5 text-purple-400" /> Core Modules
              </div>
              <ul className="space-y-1">
                {navItems
                  .filter((i) => i.category === 'Core Modules')
                  .map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/docs/${item.slug}`}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                          currentSlug === item.slug
                            ? 'bg-primary/10 text-primary font-semibold border border-primary/30 shadow-sm'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-emerald-400" /> Configuration & CI
              </div>
              <ul className="space-y-1">
                {navItems
                  .filter((i) => i.category === 'Configuration' || i.category === 'Integrations')
                  .map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/docs/${item.slug}`}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                          currentSlug === item.slug
                            ? 'bg-primary/10 text-primary font-semibold border border-primary/30 shadow-sm'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                <Rocket className="h-3.5 w-3.5 text-amber-400" /> Maintainers
              </div>
              <ul className="space-y-1">
                {navItems
                  .filter((i) => i.category === 'Maintainers')
                  .map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/docs/${item.slug}`}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                          currentSlug === item.slug
                            ? 'bg-primary/10 text-primary font-semibold border border-primary/30 shadow-sm'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Main Documentation Body */}
        <main className="lg:col-span-3 space-y-8">
          {/* Breadcrumb Trail */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/docs/introduction" className="hover:text-foreground transition-colors">
              Docs
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">{doc.category}</span>
          </div>

          {/* Doc Title & Summary */}
          <div className="space-y-3 border-b border-border/40 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{doc.title}</h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              {doc.description}
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-blue-500" /> {doc.readingTime}
              </span>
              <span>•</span>
              <span>Updated {doc.lastUpdated}</span>
            </div>
          </div>

          {/* Quick Package Manager Installation Pill on Introduction */}
          {currentSlug === 'introduction' && (
            <div className="space-y-2">
              <div className="text-xs font-semibold text-muted-foreground">
                Quick Package Installation
              </div>
              <CodeBlock isPackageManager />
            </div>
          )}

          {/* Document Body */}
          <div className="max-w-none">
            <MarkdownRenderer content={doc.content} />
          </div>

          {/* Pagination Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
            {prevDoc ? (
              <Link
                href={`/docs/${prevDoc.slug}`}
                className="flex items-center gap-3 p-4 rounded-xl border border-border/80 bg-card/60 hover:bg-card hover:border-border transition-all text-left group"
              >
                <ArrowLeft className="h-4 w-4 text-muted-foreground group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-[10px] uppercase font-semibold text-muted-foreground">
                    Previous
                  </div>
                  <div className="text-xs font-bold text-foreground">{prevDoc.title}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextDoc ? (
              <Link
                href={`/docs/${nextDoc.slug}`}
                className="flex items-center justify-end gap-3 p-4 rounded-xl border border-border/80 bg-card/60 hover:bg-card hover:border-border transition-all text-right group"
              >
                <div>
                  <div className="text-[10px] uppercase font-semibold text-muted-foreground">
                    Next
                  </div>
                  <div className="text-xs font-bold text-foreground">{nextDoc.title}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>

          {/* Doc Actions (Client Component) */}
          <DocActions _slug={currentSlug} />
        </main>
      </div>
    </div>
  );
}
