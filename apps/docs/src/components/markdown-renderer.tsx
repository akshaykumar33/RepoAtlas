'use client';

import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

const customTheme = {
  ...oneDark,
  'pre[class*="language-"]': {
    ...oneDark['pre[class*="language-"]'],
    background: '#0d1117',
    margin: 0,
    padding: '1.25rem',
    borderRadius: 0,
    fontSize: '13px',
    lineHeight: '1.7',
  },
  'code[class*="language-"]': {
    ...oneDark['code[class*="language-"]'],
    background: 'transparent',
    fontSize: '13px',
    lineHeight: '1.7',
  },
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1 text-[11px] text-neutral-500 hover:text-neutral-200 transition-colors"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-emerald-400" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
      <span>{copied ? 'Copied!' : 'Copy'}</span>
    </button>
  );
}

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
          <h1 className="text-2xl font-extrabold tracking-tight mt-10 mb-4 pb-3 border-b border-border/40 text-foreground">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-xl font-bold tracking-tight mt-8 mb-3 pb-2 border-b border-border/30 text-foreground">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-lg font-bold tracking-tight mt-6 mb-3 text-foreground flex items-center gap-2">
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-base font-semibold mt-5 mb-2 text-foreground">{children}</h4>
        ),
        p: ({ children }) => (
          <p className="text-[13.5px] leading-7 text-muted-foreground mb-4 [&>code]:text-[12.5px]">
            {children}
          </p>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noreferrer' : undefined}
            className="text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary font-medium transition-all hover:text-primary/80"
          >
            {children}
          </a>
        ),
        ul: ({ children }) => <ul className="my-4 space-y-1.5">{children}</ul>,
        ol: ({ children }) => (
          <ol className="my-4 space-y-1.5 list-decimal list-inside">{children}</ol>
        ),
        li: ({ children }) => (
          <li className="flex items-start gap-2.5 text-[13.5px] leading-7 text-muted-foreground">
            <span className="mt-[11px] h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
            <span className="flex-1">{children}</span>
          </li>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-foreground">{children}</strong>
        ),
        em: ({ children }) => <em className="italic">{children}</em>,
        blockquote: ({ children }) => (
          <blockquote className="border-l-[3px] border-primary/50 pl-4 py-1 my-5 bg-primary/[0.04] rounded-r-lg [&>p]:text-[13px] [&>p]:text-muted-foreground [&>p]:mb-0">
            {children}
          </blockquote>
        ),
        code: ({ className, children }) => {
          const match = /language-(\w+)/.exec(className || '');
          const codeString = String(children).replace(/\n$/, '');

          if (match) {
            return (
              <div className="relative my-5 rounded-xl border border-white/[0.06] bg-[#0d1117] shadow-2xl shadow-black/20 overflow-hidden group">
                {/* Header bar */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-[#ff5f57]/80" />
                      <div className="h-3 w-3 rounded-full bg-[#febc2e]/80" />
                      <div className="h-3 w-3 rounded-full bg-[#28c840]/80" />
                    </div>
                    <span className="ml-2 text-[11px] font-mono font-medium text-neutral-500 uppercase tracking-wider">
                      {match[1]}
                    </span>
                  </div>
                  <CopyButton text={codeString} />
                </div>
                {/* Syntax highlighted code */}
                <SyntaxHighlighter
                  style={customTheme}
                  language={match[1]}
                  PreTag="div"
                  showLineNumbers={codeString.split('\n').length > 3}
                  lineNumberStyle={{
                    color: '#3d4450',
                    fontSize: '11px',
                    paddingRight: '1em',
                    minWidth: '2em',
                    userSelect: 'none',
                  }}
                  wrapLines
                >
                  {codeString}
                </SyntaxHighlighter>
              </div>
            );
          }

          // Inline code
          return (
            <code className="px-1.5 py-0.5 rounded-md bg-muted/80 text-primary text-[12.5px] font-mono font-medium border border-border/50">
              {children}
            </code>
          );
        },
        pre: ({ children }) => <>{children}</>,
        hr: () => (
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
          </div>
        ),
        table: ({ children }) => (
          <div className="my-5 overflow-x-auto rounded-xl border border-border/50 shadow-sm bg-card/30">
            <table className="w-full text-[13px]">{children}</table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className="bg-muted/40 border-b border-border/50">{children}</thead>
        ),
        tbody: ({ children }) => <tbody className="divide-y divide-border/30">{children}</tbody>,
        tr: ({ children }) => <tr className="hover:bg-muted/20 transition-colors">{children}</tr>,
        th: ({ children }) => (
          <th className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="px-4 py-3 text-[13px] text-muted-foreground [&>code]:text-[11.5px] [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded [&>code]:bg-muted/60 [&>code]:text-primary [&>code]:font-mono [&>code]:border [&>code]:border-border/40">
            {children}
          </td>
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
