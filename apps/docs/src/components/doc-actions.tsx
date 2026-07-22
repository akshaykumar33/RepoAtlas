'use client';

import { Check, Github, Share2 } from 'lucide-react';
import { useState } from 'react';

export function DocActions({ _slug }: { _slug?: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
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
          onClick={handleShare}
          className="flex items-center gap-1.5 hover:text-foreground transition-colors"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-green-500" />
          ) : (
            <Share2 className="h-3.5 w-3.5" />
          )}
          <span>{copied ? 'Copied Link!' : 'Copy Link'}</span>
        </button>
      </div>
    </div>
  );
}
