'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ children }) => (
          <h1 className="text-3xl font-extrabold tracking-tight mt-10 mb-4 pb-3 border-b border-border/40">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-2xl font-bold tracking-tight mt-8 mb-3 pb-2 border-b border-border/30">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-xl font-bold tracking-tight mt-6 mb-2 text-foreground">{children}</h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-lg font-semibold mt-5 mb-2 text-foreground">{children}</h4>
        ),
        p: ({ children }) => (
          <p className="text-sm leading-7 text-muted-foreground mb-4">{children}</p>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noreferrer' : undefined}
            className="text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary font-medium transition-colors"
          >
            {children}
          </a>
        ),
        ul: ({ children }) => (
          <ul className="my-4 space-y-2 text-sm text-muted-foreground">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="my-4 space-y-2 text-sm text-muted-foreground list-decimal list-inside">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="flex items-start gap-2 text-sm leading-7">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
            <span>{children}</span>
          </li>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-foreground">{children}</strong>
        ),
        em: ({ children }) => <em className="italic text-muted-foreground">{children}</em>,
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-primary/40 pl-4 py-2 my-4 bg-primary/5 rounded-r-lg text-sm italic text-muted-foreground">
            {children}
          </blockquote>
        ),
        code: ({ className, children }) => {
          const isInline = !className;
          if (isInline) {
            return (
              <code className="px-1.5 py-0.5 rounded-md bg-muted text-primary text-[13px] font-mono font-medium border border-border/50">
                {children}
              </code>
            );
          }
          const language = className?.replace('language-', '') || '';
          return (
            <div className="relative my-5 group">
              {language && (
                <div className="absolute top-0 right-0 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground bg-muted/80 rounded-bl-lg rounded-tr-lg border-b border-l border-border/40">
                  {language}
                </div>
              )}
              <code
                className={`block p-4 rounded-xl bg-[#0a0a0f] text-[13px] font-mono leading-6 text-emerald-400 overflow-x-auto border border-border/40 shadow-lg ${className || ''}`}
              >
                {children}
              </code>
            </div>
          );
        },
        pre: ({ children }) => <div className="not-prose">{children}</div>,
        hr: () => <hr className="my-8 border-t border-border/40" />,
        table: ({ children }) => (
          <div className="my-5 overflow-x-auto rounded-xl border border-border/40 shadow-sm">
            <table className="w-full text-sm">{children}</table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className="bg-muted/50 border-b border-border/40">{children}</thead>
        ),
        tbody: ({ children }) => <tbody className="divide-y divide-border/30">{children}</tbody>,
        tr: ({ children }) => <tr className="hover:bg-muted/30 transition-colors">{children}</tr>,
        th: ({ children }) => (
          <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-muted-foreground">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="px-4 py-3 text-sm text-muted-foreground">{children}</td>
        ),
        img: ({ src, alt }) => (
          <img
            src={src}
            alt={alt || ''}
            className="rounded-xl border border-border/40 shadow-md my-4 max-w-full"
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
