import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { Providers } from '@/components/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RepoAtlas — Repository Visualization & Documentation Platform',
  description:
    'Transform any codebase into beautiful, configurable, documentation-ready visual project structures, Mermaid flowcharts, and token-optimized AI context prompts.',
  keywords: [
    'repo-atlas',
    'repository visualization',
    'project structure tree',
    'mermaid diagram generator',
    'vscode extension',
    'github action',
    'llm context compression',
  ],
  authors: [{ name: 'RepoAtlas Team' }],
  openGraph: {
    title: 'RepoAtlas — Repository Visualization Platform',
    description: 'Transform any repository into beautiful, configurable visual project structures.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-background text-foreground`}
      >
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
