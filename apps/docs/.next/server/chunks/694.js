((exports.id = 694),
  (exports.ids = [694]),
  (exports.modules = {
    8828: (e, r, s) => {
      (Promise.resolve().then(s.bind(s, 2940)),
        Promise.resolve().then(s.bind(s, 1758)),
        Promise.resolve().then(s.t.bind(s, 307, 23)));
    },
    6640: (e, r, s) => {
      (Promise.resolve().then(s.t.bind(s, 417, 23)),
        Promise.resolve().then(s.t.bind(s, 181, 23)),
        Promise.resolve().then(s.t.bind(s, 7814, 23)),
        Promise.resolve().then(s.t.bind(s, 5266, 23)),
        Promise.resolve().then(s.t.bind(s, 490, 23)),
        Promise.resolve().then(s.t.bind(s, 2648, 23)));
    },
    2940: (e, r, s) => {
      'use strict';
      s.d(r, { Navbar: () => f });
      var t = s(2064),
        o = s(1918),
        a = s(9091),
        n = s(5495),
        l = s(5062),
        i = s(8993),
        d = s(2604),
        c = s(8622),
        x = s(5523),
        m = s(8156),
        u = s(4002),
        h = s(5032);
      function f() {
        let { theme: e, setTheme: r } = (0, m.F)(),
          [s, f] = (0, h.useState)(!1);
        return t.jsx('header', {
          className:
            'sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl transition-all',
          children: (0, t.jsxs)('div', {
            className:
              'max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8',
            children: [
              (0, t.jsxs)(u.default, {
                href: '/',
                className: 'flex items-center gap-3 group',
                children: [
                  (0, t.jsxs)('div', {
                    className:
                      'relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform',
                    children: [
                      t.jsx(o.Z, { className: 'h-5 w-5' }),
                      t.jsx('div', {
                        className:
                          'absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 blur group-hover:opacity-40 transition-opacity',
                      }),
                    ],
                  }),
                  (0, t.jsxs)('div', {
                    className: 'flex flex-col',
                    children: [
                      t.jsx('span', {
                        className:
                          'font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80',
                        children: 'RepoAtlas',
                      }),
                      t.jsx('span', {
                        className:
                          'text-[10px] font-mono text-muted-foreground uppercase tracking-widest -mt-1',
                        children: 'v0.2.1 • Open Source',
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)('nav', {
                className:
                  'hidden md:flex items-center gap-1 text-sm font-medium text-muted-foreground',
                children: [
                  (0, t.jsxs)(u.default, {
                    href: '/docs/introduction',
                    className:
                      'flex items-center gap-2 px-3 py-2 rounded-lg hover:text-foreground hover:bg-muted/50 transition-colors',
                    children: [t.jsx(a.Z, { className: 'h-4 w-4' }), 'Documentation'],
                  }),
                  (0, t.jsxs)(u.default, {
                    href: '/playground',
                    className:
                      'flex items-center gap-2 px-3 py-2 rounded-lg hover:text-foreground hover:bg-muted/50 transition-colors',
                    children: [
                      t.jsx(n.Z, { className: 'h-4 w-4 text-purple-500' }),
                      'Live Playground',
                    ],
                  }),
                  t.jsx(u.default, {
                    href: '/#features',
                    className:
                      'flex items-center gap-2 px-3 py-2 rounded-lg hover:text-foreground hover:bg-muted/50 transition-colors',
                    children: 'Features',
                  }),
                  t.jsx(u.default, {
                    href: '/#themes',
                    className:
                      'flex items-center gap-2 px-3 py-2 rounded-lg hover:text-foreground hover:bg-muted/50 transition-colors',
                    children: 'Themes',
                  }),
                  (0, t.jsxs)(u.default, {
                    href: '/#command-builder',
                    className:
                      'flex items-center gap-2 px-3 py-2 rounded-lg hover:text-foreground hover:bg-muted/50 transition-colors',
                    children: [t.jsx(l.Z, { className: 'h-4 w-4' }), 'CLI & Config Builder'],
                  }),
                ],
              }),
              (0, t.jsxs)('div', {
                className: 'flex items-center gap-3',
                children: [
                  (0, t.jsxs)('button', {
                    onClick: () => {
                      let e = document.getElementById('global-search-trigger');
                      e && e.focus();
                    },
                    className:
                      'hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/60 bg-muted/30 text-xs text-muted-foreground hover:border-border hover:bg-muted/60 transition-all',
                    children: [
                      t.jsx(i.Z, { className: 'h-3.5 w-3.5' }),
                      t.jsx('span', { children: 'Search docs...' }),
                      t.jsx('kbd', {
                        className:
                          'font-mono text-[10px] bg-background px-1.5 py-0.5 rounded border border-border',
                        children: '⌘K',
                      }),
                    ],
                  }),
                  s &&
                    t.jsx('button', {
                      onClick: () => r('dark' === e ? 'light' : 'dark'),
                      className:
                        'flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-muted/30 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors',
                      'aria-label': 'Toggle theme',
                      children:
                        'dark' === e
                          ? t.jsx(d.Z, { className: 'h-4 w-4' })
                          : t.jsx(c.Z, { className: 'h-4 w-4' }),
                    }),
                  (0, t.jsxs)('a', {
                    href: 'https://github.com/akshaykumar33/RepoAtlas',
                    target: '_blank',
                    rel: 'noreferrer',
                    className:
                      'flex items-center gap-2 px-3.5 py-2 rounded-lg bg-foreground text-background font-medium text-xs shadow-sm hover:opacity-90 transition-opacity',
                    children: [
                      t.jsx(x.Z, { className: 'h-4 w-4' }),
                      t.jsx('span', { className: 'hidden sm:inline', children: 'Star on GitHub' }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    1758: (e, r, s) => {
      'use strict';
      s.d(r, { Providers: () => a });
      var t = s(2064),
        o = s(8156);
      function a({ children: e }) {
        return t.jsx(o.f, {
          attribute: 'class',
          defaultTheme: 'dark',
          enableSystem: !0,
          disableTransitionOnChange: !0,
          children: e,
        });
      }
      s(5032);
    },
    5131: (e, r, s) => {
      'use strict';
      (s.r(r), s.d(r, { default: () => g, metadata: () => p }));
      var t = s(9222),
        o = s(8140),
        a = s.n(o);
      s(5988);
      var n = s(5734),
        l = s(7117),
        i = s(162),
        d = s(1691),
        c = s(7243),
        x = s(3023);
      function m() {
        return t.jsx('footer', {
          className: 'border-t border-border/40 bg-background/60 backdrop-blur-md',
          children: (0, t.jsxs)('div', {
            className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16',
            children: [
              (0, t.jsxs)('div', {
                className: 'grid grid-cols-2 md:grid-cols-5 gap-8',
                children: [
                  (0, t.jsxs)('div', {
                    className: 'col-span-2 space-y-4',
                    children: [
                      (0, t.jsxs)(x.default, {
                        href: '/',
                        className: 'flex items-center gap-3',
                        children: [
                          t.jsx('div', {
                            className:
                              'flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white',
                            children: t.jsx(n.Z, { className: 'h-4 w-4' }),
                          }),
                          t.jsx('span', {
                            className: 'font-bold text-base tracking-tight',
                            children: 'RepoAtlas',
                          }),
                        ],
                      }),
                      t.jsx('p', {
                        className: 'text-sm text-muted-foreground max-w-sm leading-relaxed',
                        children:
                          'The developer platform that transforms any repository into beautiful, configurable, documentation-ready, AI-friendly visual structures.',
                      }),
                      (0, t.jsxs)('div', {
                        className: 'flex items-center gap-4 text-muted-foreground text-xs',
                        children: [
                          t.jsx('span', { children: 'Released under MIT License' }),
                          t.jsx('span', { children: '•' }),
                          t.jsx('span', { children: 'TypeScript Core' }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)('div', {
                    children: [
                      t.jsx('h3', {
                        className:
                          'text-xs font-semibold text-foreground tracking-wider uppercase mb-4',
                        children: 'Product',
                      }),
                      (0, t.jsxs)('ul', {
                        className: 'space-y-2.5 text-sm text-muted-foreground',
                        children: [
                          t.jsx('li', {
                            children: t.jsx(x.default, {
                              href: '/playground',
                              className: 'hover:text-foreground transition-colors',
                              children: 'Live Playground',
                            }),
                          }),
                          t.jsx('li', {
                            children: t.jsx(x.default, {
                              href: '/#features',
                              className: 'hover:text-foreground transition-colors',
                              children: 'Features',
                            }),
                          }),
                          t.jsx('li', {
                            children: t.jsx(x.default, {
                              href: '/#themes',
                              className: 'hover:text-foreground transition-colors',
                              children: 'Theme Engine',
                            }),
                          }),
                          t.jsx('li', {
                            children: t.jsx(x.default, {
                              href: '/#vscode',
                              className: 'hover:text-foreground transition-colors',
                              children: 'VSCode Extension',
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)('div', {
                    children: [
                      t.jsx('h3', {
                        className:
                          'text-xs font-semibold text-foreground tracking-wider uppercase mb-4',
                        children: 'Documentation',
                      }),
                      (0, t.jsxs)('ul', {
                        className: 'space-y-2.5 text-sm text-muted-foreground',
                        children: [
                          t.jsx('li', {
                            children: t.jsx(x.default, {
                              href: '/docs/introduction',
                              className: 'hover:text-foreground transition-colors',
                              children: 'Getting Started',
                            }),
                          }),
                          t.jsx('li', {
                            children: t.jsx(x.default, {
                              href: '/docs/cli',
                              className: 'hover:text-foreground transition-colors',
                              children: 'CLI Reference',
                            }),
                          }),
                          t.jsx('li', {
                            children: t.jsx(x.default, {
                              href: '/docs/config',
                              className: 'hover:text-foreground transition-colors',
                              children: 'Configuration',
                            }),
                          }),
                          t.jsx('li', {
                            children: t.jsx(x.default, {
                              href: '/docs/api',
                              className: 'hover:text-foreground transition-colors',
                              children: 'Node SDK API',
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)('div', {
                    children: [
                      t.jsx('h3', {
                        className:
                          'text-xs font-semibold text-foreground tracking-wider uppercase mb-4',
                        children: 'Community',
                      }),
                      (0, t.jsxs)('ul', {
                        className: 'space-y-2.5 text-sm text-muted-foreground',
                        children: [
                          t.jsx('li', {
                            children: (0, t.jsxs)('a', {
                              href: 'https://github.com/akshaykumar33/RepoAtlas',
                              target: '_blank',
                              rel: 'noreferrer',
                              className:
                                'flex items-center gap-2 hover:text-foreground transition-colors',
                              children: [t.jsx(l.Z, { className: 'h-3.5 w-3.5' }), ' GitHub'],
                            }),
                          }),
                          t.jsx('li', {
                            children: (0, t.jsxs)('a', {
                              href: 'https://npm.im/@repoatlasdev/cli',
                              target: '_blank',
                              rel: 'noreferrer',
                              className:
                                'flex items-center gap-2 hover:text-foreground transition-colors',
                              children: [t.jsx(i.Z, { className: 'h-3.5 w-3.5' }), ' npm Registry'],
                            }),
                          }),
                          t.jsx('li', {
                            children: (0, t.jsxs)('a', {
                              href: 'https://github.com/akshaykumar33/RepoAtlas/blob/main/SECURITY.md',
                              target: '_blank',
                              rel: 'noreferrer',
                              className:
                                'flex items-center gap-2 hover:text-foreground transition-colors',
                              children: [
                                t.jsx(d.Z, { className: 'h-3.5 w-3.5' }),
                                ' Security Policy',
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)('div', {
                className:
                  'mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground',
                children: [
                  (0, t.jsxs)('p', {
                    children: [
                      '\xa9 ',
                      new Date().getFullYear(),
                      ' RepoAtlas. Designed & built for open-source developers.',
                    ],
                  }),
                  (0, t.jsxs)('div', {
                    className: 'flex items-center gap-2',
                    children: [
                      t.jsx('span', { children: 'Built with' }),
                      t.jsx(c.Z, { className: 'h-3.5 w-3.5 text-red-500 fill-red-500' }),
                      t.jsx('span', { children: 'using Next.js & Tailwind CSS' }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var u = s(1924);
      let h = (0, u.createProxy)(
          String.raw`D:\pro\repo-atlas\apps\docs\src\components\navbar.tsx#Navbar`
        ),
        f = (0, u.createProxy)(
          String.raw`D:\pro\repo-atlas\apps\docs\src\components\providers.tsx#Providers`
        ),
        p = {
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
            description:
              'Transform any repository into beautiful, configurable visual project structures.',
            type: 'website',
          },
        };
      function g({ children: e }) {
        return t.jsx('html', {
          lang: 'en',
          suppressHydrationWarning: !0,
          className: 'dark',
          children: t.jsx('body', {
            className: `${a().className} min-h-screen flex flex-col bg-background text-foreground`,
            children: (0, t.jsxs)(f, {
              children: [
                t.jsx(h, {}),
                t.jsx('main', { className: 'flex-1', children: e }),
                t.jsx(m, {}),
              ],
            }),
          }),
        });
      }
    },
    5988: () => {},
  }));
