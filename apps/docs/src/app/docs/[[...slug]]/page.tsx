import { CodeBlock } from '@/components/code-block';
import { DOCS_DATA } from '@/data/docs-content';
import {
  BookOpen,
  ChevronRight,
  Clock,
  FolderTree,
  Github,
  Layers,
  Search,
  Share2,
  Terminal,
} from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sticky Sidebar Navigation */}
        <aside className="lg:col-span-1 border-r border-border/40 pr-6 space-y-6 hidden lg:block sticky top-20 h-[calc(100vh-6rem)] overflow-y-auto">
          {/* Version Selector */}
          <div className="flex items-center justify-between p-2.5 rounded-xl border border-border bg-muted/30">
            <div className="flex items-center gap-2">
              <FolderTree className="h-4 w-4 text-blue-500" />
              <span className="text-xs font-semibold">Docs Version</span>
            </div>
            <span className="text-[10px] font-mono font-bold bg-primary/20 text-primary px-2 py-0.5 rounded-md">
              v0.2.1
            </span>
          </div>

          {/* Quick Search */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
            <input
              id="global-search-trigger"
              type="text"
              placeholder="Search docs..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-border bg-background text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Navigation Links */}
          <div className="space-y-4 text-xs font-medium">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Getting Started
              </div>
              <ul className="space-y-1">
                {navItems
                  .filter((i) => i.category === 'Getting Started')
                  .map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/docs/${item.slug}`}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                          currentSlug === item.slug
                            ? 'bg-primary/10 text-primary font-semibold border border-primary/20'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        {item.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Core Modules
              </div>
              <ul className="space-y-1">
                {navItems
                  .filter((i) => i.category === 'Core Modules')
                  .map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/docs/${item.slug}`}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                          currentSlug === item.slug
                            ? 'bg-primary/10 text-primary font-semibold border border-primary/20'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        <Terminal className="h-3.5 w-3.5" />
                        {item.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Configuration & Integrations
              </div>
              <ul className="space-y-1">
                {navItems
                  .filter((i) => i.category === 'Configuration' || i.category === 'Integrations')
                  .map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/docs/${item.slug}`}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                          currentSlug === item.slug
                            ? 'bg-primary/10 text-primary font-semibold border border-primary/20'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        <Layers className="h-3.5 w-3.5" />
                        {item.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Main Documentation Area */}
        <main className="lg:col-span-3 space-y-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/docs/introduction" className="hover:text-foreground">
              Docs
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">{doc.category}</span>
          </div>

          {/* Doc Title & Meta Info */}
          <div className="space-y-3 border-b border-border/40 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{doc.title}</h1>
            <p className="text-muted-foreground text-sm sm:text-base">{doc.description}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-blue-500" /> {doc.readingTime}
              </span>
              <span>•</span>
              <span>Updated {doc.lastUpdated}</span>
            </div>
          </div>

          {/* Quick Package Manager Installation Component */}
          {currentSlug === 'introduction' && (
            <div className="space-y-2">
              <div className="text-xs font-semibold text-muted-foreground">Quick Installation</div>
              <CodeBlock isPackageManager />
            </div>
          )}

          {/* Rendered Document Content */}
          <div className="prose dark:prose-invert max-w-none text-sm leading-relaxed space-y-4">
            <div className="whitespace-pre-wrap font-sans leading-relaxed">{doc.content}</div>
          </div>

          {/* Bottom Actions Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border/40 text-xs text-muted-foreground">
            <a
              href={`https://github.com/akshaykumar33/RepoAtlas/edit/main/apps/docs/src/data/docs-content.ts`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Github className="h-3.5 w-3.5" /> Edit page on GitHub
            </a>
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigator.clipboard.writeText(window.location.href)}
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Share2 className="h-3.5 w-3.5" /> Copy Link
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
