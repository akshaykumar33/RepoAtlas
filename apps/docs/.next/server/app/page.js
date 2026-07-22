(() => {
  var e = {};
  ((e.id = 931),
    (e.ids = [931]),
    (e.modules = {
      2934: (e) => {
        'use strict';
        e.exports = require('next/dist/client/components/action-async-storage.external.js');
      },
      4580: (e) => {
        'use strict';
        e.exports = require('next/dist/client/components/request-async-storage.external.js');
      },
      5869: (e) => {
        'use strict';
        e.exports = require('next/dist/client/components/static-generation-async-storage.external.js');
      },
      399: (e) => {
        'use strict';
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js');
      },
      5315: (e) => {
        'use strict';
        e.exports = require('path');
      },
      2582: (e, t, r) => {
        'use strict';
        (r.r(t),
          r.d(t, {
            GlobalError: () => l.a,
            __next_app__: () => m,
            originalPathname: () => x,
            pages: () => c,
            routeModule: () => p,
            tree: () => i,
          }),
          r(2724),
          r(5131),
          r(8714));
        var s = r(3653),
          a = r(4966),
          o = r(6070),
          l = r.n(o),
          d = r(2555),
          n = {};
        for (let e in d)
          0 >
            [
              'default',
              'tree',
              'pages',
              'GlobalError',
              'originalPathname',
              '__next_app__',
              'routeModule',
            ].indexOf(e) && (n[e] = () => d[e]);
        r.d(t, n);
        let i = [
            '',
            {
              children: [
                '__PAGE__',
                {},
                {
                  page: [
                    () => Promise.resolve().then(r.bind(r, 2724)),
                    'D:\\pro\\repo-atlas\\apps\\docs\\src\\app\\page.tsx',
                  ],
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(r.bind(r, 5131)),
                'D:\\pro\\repo-atlas\\apps\\docs\\src\\app\\layout.tsx',
              ],
              'not-found': [
                () => Promise.resolve().then(r.t.bind(r, 8714, 23)),
                'next/dist/client/components/not-found-error',
              ],
            },
          ],
          c = ['D:\\pro\\repo-atlas\\apps\\docs\\src\\app\\page.tsx'],
          x = '/page',
          m = { require: r, loadChunk: () => Promise.resolve() },
          p = new s.AppPageRouteModule({
            definition: {
              kind: a.x.APP_PAGE,
              page: '/page',
              pathname: '/',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: i },
          });
      },
      2952: (e, t, r) => {
        (Promise.resolve().then(r.bind(r, 6641)),
          Promise.resolve().then(r.bind(r, 2632)),
          Promise.resolve().then(r.bind(r, 3301)),
          Promise.resolve().then(r.bind(r, 626)),
          Promise.resolve().then(r.bind(r, 9599)),
          Promise.resolve().then(r.t.bind(r, 307, 23)));
      },
      6641: (e, t, r) => {
        'use strict';
        r.d(t, { CliSimulator: () => c });
        var s = r(2064),
          a = r(5062),
          o = r(8932),
          l = r(2619);
        let d = (0, r(111).Z)('Play', [
          ['polygon', { points: '6 3 20 12 6 21 6 3', key: '1oa8hb' }],
        ]);
        var n = r(5032);
        let i = [
          {
            cmd: 'repo-atlas generate --theme vscode --sort size',
            desc: 'Generate VSCode-styled tree sorted by file size',
            output: `my-awesome-app
├── 📁 apps
│   ├── 📁 docs
│   │   ├── 📋 package.json (1.3 KB)
│   │   └── 📘 next.config.mjs (850 B)
│   └── 📁 web (4.2 MB)
├── 📁 packages
│   ├── 🔷 core (1.8 MB)
│   └── 🎨 renderers (950 KB)
└── 📝 README.md (3.4 KB)`,
          },
          {
            cmd: 'repo-atlas generate -o PROJECT_STRUCTURE.md --theme markdown',
            desc: 'Export structured Markdown file for documentation & PRs',
            output: `✨ Scanned repository in 12ms (84 files, 14 directories)
📄 Created PROJECT_STRUCTURE.md

# Project Structure
- 📁 **src**
  - 🔷 **index.ts**
  - 🔷 **cli.ts**
- 📋 **package.json**
- 📝 **README.md**`,
          },
          {
            cmd: 'repo-atlas doctor',
            desc: 'Verify local environment health and active plugins',
            output: `🩺 RepoAtlas Doctor Diagnostic Report
Node.js Version : v20.19.43
Platform        : win32 (x64)
Config Keys     : 8 resolved
Render Themes   : 8 available [ascii, unicode, vscode, material, nerd-font, markdown, json, mermaid]
Exporter Plugins: 13 registered [txt, md, html, json, yaml, xml, csv, docx, pdf, svg, png, mermaid, plantuml]
Status          : 0 errors detected. System healthy!`,
          },
          {
            cmd: 'repo-atlas config list',
            desc: 'Inspect resolved configuration settings',
            output: `{
  "format": "unicode",
  "maxDepth": 4,
  "theme": "vscode",
  "iconPack": "emoji",
  "respectGitIgnore": true,
  "ignorePatterns": ["*.log", "dist/"]
}`,
          },
        ];
        function c() {
          let [e, t] = (0, n.useState)(0),
            [r, c] = (0, n.useState)(!1),
            x = i[e];
          return s.jsx('section', {
            className: 'py-12 max-w-5xl mx-auto px-4 sm:px-6',
            children: (0, s.jsxs)('div', {
              className:
                'rounded-2xl border border-border/80 bg-card/90 shadow-2xl shadow-purple-500/5 backdrop-blur-xl overflow-hidden',
              children: [
                (0, s.jsxs)('div', {
                  className:
                    'flex items-center justify-between px-4 py-3 border-b border-border/60 bg-muted/40',
                  children: [
                    (0, s.jsxs)('div', {
                      className: 'flex items-center gap-2',
                      children: [
                        s.jsx('div', { className: 'h-3 w-3 rounded-full bg-red-500/80' }),
                        s.jsx('div', { className: 'h-3 w-3 rounded-full bg-yellow-500/80' }),
                        s.jsx('div', { className: 'h-3 w-3 rounded-full bg-green-500/80' }),
                        (0, s.jsxs)('span', {
                          className:
                            'ml-2 font-mono text-xs text-muted-foreground flex items-center gap-1.5',
                          children: [
                            s.jsx(a.Z, { className: 'h-3.5 w-3.5 text-blue-500' }),
                            ' bash — repo-atlas-cli',
                          ],
                        }),
                      ],
                    }),
                    s.jsx('div', {
                      className: 'flex items-center gap-1',
                      children: i.map((r, a) =>
                        (0, s.jsxs)(
                          'button',
                          {
                            onClick: () => t(a),
                            className: `px-2.5 py-1 rounded-md font-mono text-xs transition-colors ${e === a ? 'bg-primary text-primary-foreground font-semibold shadow-sm' : 'text-muted-foreground hover:bg-muted/80'}`,
                            children: ['Cmd ', a + 1],
                          },
                          a
                        )
                      ),
                    }),
                  ],
                }),
                (0, s.jsxs)('div', {
                  className:
                    'p-6 font-mono text-xs sm:text-sm space-y-4 bg-black/90 text-neutral-100 min-h-[300px]',
                  children: [
                    (0, s.jsxs)('div', {
                      className:
                        'flex items-center justify-between gap-4 bg-white/5 p-3 rounded-lg border border-white/10',
                      children: [
                        (0, s.jsxs)('div', {
                          className:
                            'flex items-center gap-2 overflow-x-auto text-blue-400 font-semibold',
                          children: [
                            s.jsx('span', { className: 'text-emerald-400', children: '➜' }),
                            s.jsx('span', { className: 'text-purple-400', children: '~/my-repo' }),
                            s.jsx('span', { className: 'text-white', children: '$' }),
                            s.jsx('span', { children: x.cmd }),
                          ],
                        }),
                        s.jsx('button', {
                          onClick: () => {
                            (navigator.clipboard.writeText(x.cmd),
                              c(!0),
                              setTimeout(() => c(!1), 2e3));
                          },
                          className:
                            'p-1.5 rounded bg-white/10 hover:bg-white/20 text-neutral-300 transition-colors',
                          title: 'Copy Command',
                          children: r
                            ? s.jsx(o.Z, { className: 'h-3.5 w-3.5 text-emerald-400' })
                            : s.jsx(l.Z, { className: 'h-3.5 w-3.5' }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)('p', {
                      className: 'text-neutral-400 text-xs flex items-center gap-2 italic',
                      children: [
                        s.jsx(d, { className: 'h-3 w-3 text-emerald-400 fill-emerald-400' }),
                        x.desc,
                      ],
                    }),
                    s.jsx('pre', {
                      className:
                        'text-neutral-200 leading-relaxed overflow-x-auto p-4 rounded-lg bg-black/60 border border-white/5 selection:bg-purple-500/30',
                      children: x.output,
                    }),
                  ],
                }),
              ],
            }),
          });
        }
      },
      2632: (e, t, r) => {
        'use strict';
        r.d(t, { CommandBuilder: () => i });
        var s = r(2064),
          a = r(8761),
          o = r(5062),
          l = r(8932),
          d = r(2619),
          n = r(5032);
        function i() {
          let [e, t] = (0, n.useState)('vscode'),
            [r, i] = (0, n.useState)('emoji'),
            [c, x] = (0, n.useState)(4),
            [m, p] = (0, n.useState)('name'),
            [u, h] = (0, n.useState)('all'),
            [b, g] = (0, n.useState)(!1),
            [f, j] = (0, n.useState)(!0),
            [v, y] = (0, n.useState)('PROJECT_STRUCTURE.md'),
            [N, w] = (0, n.useState)(!1),
            [k, C] = (0, n.useState)(!1),
            S = `repo-atlas generate --theme ${e} --icons ${r} --depth ${c} --sort ${m}`;
          ('all' !== u && (S += ` --only ${u}`),
            b && (S += ' --show-size'),
            f || (S += ' --no-gitignore'),
            v && (S += ` -o ${v}`));
          let P = JSON.stringify(
            {
              theme: e,
              iconPack: r,
              maxDepth: c,
              sort: m,
              only: u,
              showSize: b,
              respectGitIgnore: f,
              outputFile: v,
            },
            null,
            2
          );
          return (0, s.jsxs)('section', {
            id: 'command-builder',
            className: 'py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
            children: [
              (0, s.jsxs)('div', {
                className: 'flex flex-col items-center text-center space-y-4 mb-12',
                children: [
                  (0, s.jsxs)('div', {
                    className:
                      'inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold',
                    children: [s.jsx(a.Z, { className: 'h-3.5 w-3.5' }), ' Interactive Generator'],
                  }),
                  s.jsx('h2', {
                    className: 'text-3xl sm:text-5xl font-extrabold tracking-tight',
                    children: 'CLI Command & Config Builder',
                  }),
                  s.jsx('p', {
                    className: 'text-muted-foreground text-sm sm:text-base max-w-xl',
                    children:
                      'Customize options visually and instantly generate CLI flag combinations or `repo-atlas.config.json` specifications.',
                  }),
                ],
              }),
              (0, s.jsxs)('div', {
                className: 'grid grid-cols-1 lg:grid-cols-2 gap-8 items-start',
                children: [
                  (0, s.jsxs)('div', {
                    className:
                      'border border-border/80 bg-card/80 p-6 rounded-2xl space-y-6 shadow-xl backdrop-blur-xl',
                    children: [
                      (0, s.jsxs)('h3', {
                        className: 'font-bold text-lg flex items-center gap-2',
                        children: [
                          s.jsx(a.Z, { className: 'h-5 w-5 text-blue-500' }),
                          ' Options & Flags',
                        ],
                      }),
                      (0, s.jsxs)('div', {
                        className: 'grid grid-cols-1 sm:grid-cols-2 gap-4',
                        children: [
                          (0, s.jsxs)('div', {
                            children: [
                              s.jsx('label', {
                                className:
                                  'text-xs font-semibold text-muted-foreground block mb-1.5',
                                children: 'Theme Preset',
                              }),
                              (0, s.jsxs)('select', {
                                value: e,
                                onChange: (e) => t(e.target.value),
                                className:
                                  'w-full px-3 py-2 rounded-lg border border-border bg-muted/40 font-medium text-xs',
                                children: [
                                  s.jsx('option', { value: 'vscode', children: 'VSCode' }),
                                  s.jsx('option', { value: 'unicode', children: 'Unicode' }),
                                  s.jsx('option', { value: 'material', children: 'Material' }),
                                  s.jsx('option', { value: 'nerd-font', children: 'Nerd Font' }),
                                  s.jsx('option', { value: 'ascii', children: 'ASCII' }),
                                  s.jsx('option', { value: 'markdown', children: 'Markdown' }),
                                  s.jsx('option', { value: 'mermaid', children: 'Mermaid' }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsxs)('div', {
                            children: [
                              s.jsx('label', {
                                className:
                                  'text-xs font-semibold text-muted-foreground block mb-1.5',
                                children: 'Icon Pack',
                              }),
                              (0, s.jsxs)('select', {
                                value: r,
                                onChange: (e) => i(e.target.value),
                                className:
                                  'w-full px-3 py-2 rounded-lg border border-border bg-muted/40 font-medium text-xs',
                                children: [
                                  s.jsx('option', { value: 'emoji', children: 'Emoji' }),
                                  s.jsx('option', { value: 'vscode', children: 'VSCode Icons' }),
                                  s.jsx('option', {
                                    value: 'material',
                                    children: 'Material Icons',
                                  }),
                                  s.jsx('option', { value: 'nerd', children: 'Nerd Fonts' }),
                                  s.jsx('option', { value: 'plain', children: 'Plain / ASCII' }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsxs)('div', {
                            children: [
                              (0, s.jsxs)('label', {
                                className:
                                  'text-xs font-semibold text-muted-foreground block mb-1.5',
                                children: ['Max Scan Depth (', c, ')'],
                              }),
                              s.jsx('input', {
                                type: 'range',
                                min: '1',
                                max: '10',
                                value: c,
                                onChange: (e) => x(parseInt(e.target.value, 10)),
                                className: 'w-full accent-primary',
                              }),
                            ],
                          }),
                          (0, s.jsxs)('div', {
                            children: [
                              s.jsx('label', {
                                className:
                                  'text-xs font-semibold text-muted-foreground block mb-1.5',
                                children: 'Sorting Strategy',
                              }),
                              (0, s.jsxs)('select', {
                                value: m,
                                onChange: (e) => p(e.target.value),
                                className:
                                  'w-full px-3 py-2 rounded-lg border border-border bg-muted/40 font-medium text-xs',
                                children: [
                                  s.jsx('option', { value: 'name', children: 'By Name' }),
                                  s.jsx('option', { value: 'size', children: 'By Size' }),
                                  s.jsx('option', { value: 'type', children: 'By Type' }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)('div', {
                        className: 'pt-4 border-t border-border/40 space-y-3',
                        children: [
                          (0, s.jsxs)('label', {
                            className:
                              'flex items-center justify-between text-xs text-muted-foreground cursor-pointer',
                            children: [
                              s.jsx('span', { children: 'Display File Sizes (`--show-size`)' }),
                              s.jsx('input', {
                                type: 'checkbox',
                                checked: b,
                                onChange: (e) => g(e.target.checked),
                                className: 'h-4 w-4 rounded border-border text-primary',
                              }),
                            ],
                          }),
                          (0, s.jsxs)('label', {
                            className:
                              'flex items-center justify-between text-xs text-muted-foreground cursor-pointer',
                            children: [
                              s.jsx('span', { children: 'Respect .gitignore (`--gitignore`)' }),
                              s.jsx('input', {
                                type: 'checkbox',
                                checked: f,
                                onChange: (e) => j(e.target.checked),
                                className: 'h-4 w-4 rounded border-border text-primary',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)('div', {
                    className: 'space-y-6',
                    children: [
                      (0, s.jsxs)('div', {
                        className:
                          'border border-border/80 bg-card/90 rounded-2xl shadow-xl overflow-hidden backdrop-blur-xl p-5',
                        children: [
                          (0, s.jsxs)('div', {
                            className: 'flex items-center justify-between mb-3',
                            children: [
                              (0, s.jsxs)('span', {
                                className:
                                  'font-mono text-xs font-semibold text-muted-foreground flex items-center gap-1.5',
                                children: [
                                  s.jsx(o.Z, { className: 'h-4 w-4 text-emerald-500' }),
                                  ' CLI Command Line',
                                ],
                              }),
                              (0, s.jsxs)('button', {
                                onClick: () => {
                                  (navigator.clipboard.writeText(S),
                                    w(!0),
                                    setTimeout(() => w(!1), 2e3));
                                },
                                className:
                                  'flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-muted/50 hover:bg-muted text-xs font-medium transition-colors',
                                children: [
                                  N
                                    ? s.jsx(l.Z, { className: 'h-3.5 w-3.5 text-green-500' })
                                    : s.jsx(d.Z, { className: 'h-3.5 w-3.5' }),
                                  s.jsx('span', { children: N ? 'Copied' : 'Copy' }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsxs)('pre', {
                            className:
                              'p-3.5 rounded-xl bg-black/90 text-emerald-400 font-mono text-xs overflow-x-auto border border-white/10',
                            children: ['$ ', S],
                          }),
                        ],
                      }),
                      (0, s.jsxs)('div', {
                        className:
                          'border border-border/80 bg-card/90 rounded-2xl shadow-xl overflow-hidden backdrop-blur-xl p-5',
                        children: [
                          (0, s.jsxs)('div', {
                            className: 'flex items-center justify-between mb-3',
                            children: [
                              s.jsx('span', {
                                className: 'font-mono text-xs font-semibold text-muted-foreground',
                                children: '\uD83D\uDCC4 repo-atlas.config.json',
                              }),
                              (0, s.jsxs)('button', {
                                onClick: () => {
                                  (navigator.clipboard.writeText(P),
                                    C(!0),
                                    setTimeout(() => C(!1), 2e3));
                                },
                                className:
                                  'flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-muted/50 hover:bg-muted text-xs font-medium transition-colors',
                                children: [
                                  k
                                    ? s.jsx(l.Z, { className: 'h-3.5 w-3.5 text-green-500' })
                                    : s.jsx(d.Z, { className: 'h-3.5 w-3.5' }),
                                  s.jsx('span', { children: k ? 'Copied' : 'Copy' }),
                                ],
                              }),
                            ],
                          }),
                          s.jsx('pre', {
                            className:
                              'p-3.5 rounded-xl bg-black/90 text-purple-300 font-mono text-xs overflow-x-auto border border-white/10',
                            children: P,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
      },
      3301: (e, t, r) => {
        'use strict';
        r.d(t, { Hero: () => m });
        var s = r(2064),
          a = r(5495),
          o = r(5062),
          l = r(8932),
          d = r(2619);
        let n = (0, r(111).Z)('ArrowRight', [
          ['path', { d: 'M5 12h14', key: '1ays0h' }],
          ['path', { d: 'm12 5 7 7-7 7', key: 'xquz4c' }],
        ]);
        var i = r(5523),
          c = r(4002),
          x = r(5032);
        function m() {
          let [e, t] = (0, x.useState)(!1),
            r = 'npm i -g @repoatlasdev/cli';
          return (0, s.jsxs)('section', {
            className: 'relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32',
            children: [
              s.jsx('div', {
                className:
                  'absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-pink-600/10 blur-[120px] rounded-full pointer-events-none',
              }),
              s.jsx('div', {
                className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10',
                children: (0, s.jsxs)('div', {
                  className: 'flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto',
                  children: [
                    (0, s.jsxs)('div', {
                      className:
                        'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium backdrop-blur-md hover:border-blue-500/50 transition-all cursor-pointer',
                      children: [
                        s.jsx(a.Z, { className: 'h-3.5 w-3.5' }),
                        s.jsx('span', { children: 'RepoAtlas v0.2.1 Released on npm' }),
                        s.jsx('span', { className: 'text-muted-foreground', children: '•' }),
                        s.jsx('span', {
                          className: 'font-semibold underline',
                          children: 'Explore v0.2.1 Specs',
                        }),
                      ],
                    }),
                    (0, s.jsxs)('h1', {
                      className:
                        'text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]',
                      children: [
                        'Transform Any Repository Into',
                        ' ',
                        s.jsx('span', {
                          className:
                            'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500',
                          children: 'Visual Art',
                        }),
                      ],
                    }),
                    s.jsx('p', {
                      className:
                        'text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed font-normal',
                      children:
                        'The standard developer platform for repo structure visualization. Generate interactive tree diagrams, Markdown docs, Mermaid charts, and LLM context summaries in milliseconds.',
                    }),
                    (0, s.jsxs)('div', {
                      className: 'flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto',
                      children: [
                        (0, s.jsxs)('div', {
                          className:
                            'flex items-center justify-between gap-3 w-full sm:w-auto px-4 py-2.5 rounded-xl border border-border/80 bg-card/80 backdrop-blur-md shadow-lg font-mono text-xs sm:text-sm',
                          children: [
                            (0, s.jsxs)('div', {
                              className: 'flex items-center gap-2 text-muted-foreground',
                              children: [
                                s.jsx(o.Z, { className: 'h-4 w-4 text-blue-500' }),
                                s.jsx('span', {
                                  className: 'text-foreground font-semibold',
                                  children: r,
                                }),
                              ],
                            }),
                            s.jsx('button', {
                              onClick: () => {
                                (navigator.clipboard.writeText(r),
                                  t(!0),
                                  setTimeout(() => t(!1), 2e3));
                              },
                              className:
                                'p-1.5 rounded-lg hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors',
                              title: 'Copy command',
                              children: e
                                ? s.jsx(l.Z, { className: 'h-4 w-4 text-green-500' })
                                : s.jsx(d.Z, { className: 'h-4 w-4' }),
                            }),
                          ],
                        }),
                        (0, s.jsxs)(c.default, {
                          href: '/playground',
                          className:
                            'inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/20 hover:opacity-95 transition-all group',
                          children: [
                            s.jsx('span', { children: 'Try Live Playground' }),
                            s.jsx(n, {
                              className: 'h-4 w-4 group-hover:translate-x-1 transition-transform',
                            }),
                          ],
                        }),
                        (0, s.jsxs)('a', {
                          href: 'https://github.com/akshaykumar33/RepoAtlas',
                          target: '_blank',
                          rel: 'noreferrer',
                          className:
                            'inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl border border-border bg-muted/40 font-medium text-sm hover:bg-muted/80 transition-colors',
                          children: [
                            s.jsx(i.Z, { className: 'h-4 w-4' }),
                            s.jsx('span', { children: 'GitHub' }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className:
                        'grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-border/40 text-center w-full max-w-3xl',
                      children: [
                        (0, s.jsxs)('div', {
                          children: [
                            s.jsx('div', {
                              className: 'text-2xl font-bold font-mono',
                              children: '100,000+',
                            }),
                            s.jsx('div', {
                              className: 'text-xs text-muted-foreground',
                              children: 'Files Scanned / sec',
                            }),
                          ],
                        }),
                        (0, s.jsxs)('div', {
                          children: [
                            s.jsx('div', {
                              className: 'text-2xl font-bold font-mono',
                              children: '13+',
                            }),
                            s.jsx('div', {
                              className: 'text-xs text-muted-foreground',
                              children: 'Export Formats',
                            }),
                          ],
                        }),
                        (0, s.jsxs)('div', {
                          children: [
                            s.jsx('div', {
                              className: 'text-2xl font-bold font-mono',
                              children: '8+',
                            }),
                            s.jsx('div', {
                              className: 'text-xs text-muted-foreground',
                              children: 'Theme Renderers',
                            }),
                          ],
                        }),
                        (0, s.jsxs)('div', {
                          children: [
                            s.jsx('div', {
                              className: 'text-2xl font-bold font-mono',
                              children: '100%',
                            }),
                            s.jsx('div', {
                              className: 'text-xs text-muted-foreground',
                              children: 'Open Source',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        }
      },
      9599: (e, t, r) => {
        'use strict';
        r.d(t, { ThemeGallery: () => n });
        var s = r(2064),
          a = r(5495),
          o = r(8932),
          l = r(5032);
        let d = [
          {
            id: 'vscode',
            name: 'VSCode Theme',
            iconPack: 'VSCode Icons',
            badge: 'Popular',
            color: 'from-blue-500/20 to-blue-600/10 border-blue-500/30',
            preview: `my-project
├─ 📁 apps
│  ├─ 📋 package.json
│  └─ 🌐 index.html
└─ 📁 packages
   └─ 🔷 core.ts`,
          },
          {
            id: 'material',
            name: 'Material Design',
            iconPack: 'Material Theme',
            badge: 'Vibrant',
            color: 'from-cyan-500/20 to-teal-600/10 border-cyan-500/30',
            preview: `my-project
├── 📁 apps
│   ├── 📋 package.json
│   └── 🌐 index.html
└── 📁 packages
    └── 🔷 core.ts`,
          },
          {
            id: 'unicode',
            name: 'Unicode Tree',
            iconPack: 'Emoji Pack',
            badge: 'Default',
            color: 'from-purple-500/20 to-pink-600/10 border-purple-500/30',
            preview: `my-project
├── 📂 apps
│   ├── 📋 package.json
│   └── 🌐 index.html
└── 📂 packages
    └── 🔷 core.ts`,
          },
          {
            id: 'nerd-font',
            name: 'Nerd Fonts',
            iconPack: 'Nerd Font Glyphs',
            badge: 'Terminal Pro',
            color: 'from-amber-500/20 to-orange-600/10 border-amber-500/30',
            preview: `my-project
├── 📁 apps
│   ├──  package.json
│   └──  index.html
└── 📁 packages
    └──  core.ts`,
          },
          {
            id: 'markdown',
            name: 'Markdown Doc',
            iconPack: 'Clean Text',
            badge: 'Docs Ready',
            color: 'from-emerald-500/20 to-green-600/10 border-emerald-500/30',
            preview: `- 📁 **my-project**
  - 📂 **apps**
    - 📋 **package.json**
  - 📂 **packages**
    - 🔷 **core.ts**`,
          },
          {
            id: 'mermaid',
            name: 'Mermaid Diagram',
            iconPack: 'Flowchart',
            badge: 'Diagrams',
            color: 'from-indigo-500/20 to-purple-600/10 border-indigo-500/30',
            preview: `graph TD
  my_project["my-project"] --> apps["apps"]
  apps --> package_json["package.json"]
  my_project --> packages["packages"]
  packages --> core_ts["core.ts"]`,
          },
        ];
        function n() {
          let [e, t] = (0, l.useState)('vscode');
          return (0, s.jsxs)('section', {
            id: 'themes',
            className: 'py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
            children: [
              (0, s.jsxs)('div', {
                className: 'flex flex-col items-center text-center space-y-4 mb-12',
                children: [
                  (0, s.jsxs)('div', {
                    className:
                      'inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold',
                    children: [s.jsx(a.Z, { className: 'h-3.5 w-3.5' }), ' High Precision Themes'],
                  }),
                  s.jsx('h2', {
                    className: 'text-3xl sm:text-5xl font-extrabold tracking-tight',
                    children: 'Visual Aesthetics That Impress',
                  }),
                  s.jsx('p', {
                    className: 'text-muted-foreground text-sm sm:text-base max-w-xl',
                    children:
                      'Choose from curated presets matching your terminal, documentation site, or IDE setup.',
                  }),
                ],
              }),
              s.jsx('div', {
                className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
                children: d.map((r) => {
                  let a = e === r.id;
                  return (0, s.jsxs)(
                    'div',
                    {
                      onClick: () => t(r.id),
                      className: `relative rounded-2xl border p-6 transition-all cursor-pointer bg-card/90 backdrop-blur-xl shadow-lg hover:scale-[1.02] ${a ? `border-2 bg-gradient-to-br ${r.color} ring-2 ring-primary/40` : 'border-border/60 hover:border-border'}`,
                      children: [
                        (0, s.jsxs)('div', {
                          className: 'flex items-center justify-between mb-4',
                          children: [
                            (0, s.jsxs)('div', {
                              className: 'flex items-center gap-2',
                              children: [
                                s.jsx('h3', {
                                  className: 'font-bold text-base tracking-tight',
                                  children: r.name,
                                }),
                                s.jsx('span', {
                                  className:
                                    'px-2 py-0.5 rounded-full text-[10px] font-semibold bg-muted text-muted-foreground border border-border',
                                  children: r.badge,
                                }),
                              ],
                            }),
                            a &&
                              s.jsx('div', {
                                className:
                                  'h-5 w-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center',
                                children: s.jsx(o.Z, { className: 'h-3.5 w-3.5' }),
                              }),
                          ],
                        }),
                        (0, s.jsxs)('div', {
                          className: 'font-mono text-xs text-muted-foreground mb-3',
                          children: [
                            'Icon Pack: ',
                            s.jsx('span', {
                              className: 'text-foreground font-medium',
                              children: r.iconPack,
                            }),
                          ],
                        }),
                        s.jsx('pre', {
                          className:
                            'p-4 rounded-xl bg-black/90 text-neutral-100 font-mono text-xs leading-relaxed border border-white/10 overflow-x-auto',
                          children: r.preview,
                        }),
                      ],
                    },
                    r.id
                  );
                }),
              }),
            ],
          });
        }
      },
      2724: (e, t, r) => {
        'use strict';
        (r.r(t), r.d(t, { default: () => w }));
        var s = r(9222),
          a = r(1924);
        let o = (0, a.createProxy)(
            String.raw`D:\pro\repo-atlas\apps\docs\src\components\cli-simulator.tsx#CliSimulator`
          ),
          l = (0, a.createProxy)(
            String.raw`D:\pro\repo-atlas\apps\docs\src\components\command-builder.tsx#CommandBuilder`
          );
        var d = r(5924);
        let n = (0, d.Z)('Gauge', [
          ['path', { d: 'm12 14 4-4', key: '9kzdfg' }],
          ['path', { d: 'M3.34 19a10 10 0 1 1 17.32 0', key: '19p75a' }],
        ]);
        var i = r(3227);
        let c = (0, d.Z)('FileCode2', [
            ['path', { d: 'M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4', key: '1pf5j1' }],
            ['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4', key: 'tnqrlb' }],
            ['path', { d: 'm5 12-3 3 3 3', key: 'oke12k' }],
            ['path', { d: 'm9 18 3-3-3-3', key: '112psh' }],
          ]),
          x = (0, d.Z)('Cpu', [
            ['rect', { width: '16', height: '16', x: '4', y: '4', rx: '2', key: '14l7u7' }],
            ['rect', { width: '6', height: '6', x: '9', y: '9', rx: '1', key: '5aljv4' }],
            ['path', { d: 'M15 2v2', key: '13l42r' }],
            ['path', { d: 'M15 20v2', key: '15mkzm' }],
            ['path', { d: 'M2 15h2', key: '1gxd5l' }],
            ['path', { d: 'M2 9h2', key: '1bbxkp' }],
            ['path', { d: 'M20 15h2', key: '19e6y8' }],
            ['path', { d: 'M20 9h2', key: '19tzq7' }],
            ['path', { d: 'M9 2v2', key: '165o2o' }],
            ['path', { d: 'M9 20v2', key: 'i2bqo8' }],
          ]),
          m = (0, d.Z)('ShieldCheck', [
            [
              'path',
              {
                d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z',
                key: 'oel41y',
              },
            ],
            ['path', { d: 'm9 12 2 2 4-4', key: 'dzmm74' }],
          ]),
          p = (0, d.Z)('Zap', [
            [
              'path',
              {
                d: 'M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z',
                key: '1xq2db',
              },
            ],
          ]),
          u = [
            {
              icon: n,
              title: 'High-Throughput Engine',
              desc: 'Asynchronous recursive scanner capable of processing repositories with over 100,000+ files in sub-millisecond execution times.',
              color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
            },
            {
              icon: i.Z,
              title: 'Multi-Theme Renderers',
              desc: 'Render tree structures in VSCode, Material, Unicode, Nerd Font, ASCII, Markdown, JSON, and Mermaid formats out of the box.',
              color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
            },
            {
              icon: c,
              title: '13+ Exporter Plugins',
              desc: 'Export repository trees to Markdown, HTML, JSON, YAML, XML, CSV, DOCX, PDF, SVG, PNG, Mermaid, and PlantUML diagrams.',
              color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
            },
            {
              icon: x,
              title: 'AI Context Compression',
              desc: 'Compress repo structures into token-optimized LLM prompts for ChatGPT, Claude 3.5, and Gemini Pro architecture analysis.',
              color: 'text-pink-500 bg-pink-500/10 border-pink-500/20',
            },
            {
              icon: m,
              title: 'Smart .gitignore Parsing',
              desc: 'Automatically respects `.gitignore` rules, `.ignore` patterns, node_modules, and custom exclusion filters.',
              color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
            },
            {
              icon: p,
              title: 'VSCode & GitHub Actions',
              desc: 'Seamlessly generate and auto-commit `PROJECT_STRUCTURE.md` in CI/CD pipelines or visualize in VS Code Explorer context menus.',
              color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
            },
          ];
        function h() {
          return (0, s.jsxs)('section', {
            id: 'features',
            className: 'py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
            children: [
              (0, s.jsxs)('div', {
                className: 'flex flex-col items-center text-center space-y-4 mb-12',
                children: [
                  s.jsx('h2', {
                    className: 'text-3xl sm:text-5xl font-extrabold tracking-tight',
                    children: 'Engineered For Enterprise Repositories',
                  }),
                  s.jsx('p', {
                    className: 'text-muted-foreground text-sm sm:text-base max-w-xl',
                    children:
                      'Built according to strict SOLID principles, pure functions, zero mutable global state, and maximum performance.',
                  }),
                ],
              }),
              s.jsx('div', {
                className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
                children: u.map((e, t) =>
                  (0, s.jsxs)(
                    'div',
                    {
                      className:
                        'p-6 rounded-2xl border border-border/60 bg-card/80 backdrop-blur-xl shadow-lg hover:border-border transition-all hover:translate-y-[-2px]',
                      children: [
                        s.jsx('div', {
                          className: `h-10 w-10 rounded-xl flex items-center justify-center border ${e.color} mb-4`,
                          children: s.jsx(e.icon, { className: 'h-5 w-5' }),
                        }),
                        s.jsx('h3', { className: 'font-bold text-lg mb-2', children: e.title }),
                        s.jsx('p', {
                          className: 'text-sm text-muted-foreground leading-relaxed',
                          children: e.desc,
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
            ],
          });
        }
        let b = (0, a.createProxy)(
          String.raw`D:\pro\repo-atlas\apps\docs\src\components\hero.tsx#Hero`
        );
        var g = r(8036);
        let f = (0, a.createProxy)(
            String.raw`D:\pro\repo-atlas\apps\docs\src\components\theme-gallery.tsx#ThemeGallery`
          ),
          j = (0, d.Z)('ExternalLink', [
            ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
            ['path', { d: 'M10 14 21 3', key: 'gplh6r' }],
            [
              'path',
              { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', key: 'a6xqqp' },
            ],
          ]),
          v = (0, d.Z)('Code', [
            ['polyline', { points: '16 18 22 12 16 6', key: 'z7tu5w' }],
            ['polyline', { points: '8 6 2 12 8 18', key: '1eg1df' }],
          ]);
        var y = r(7117),
          N = r(3023);
        function w() {
          return (0, s.jsxs)('div', {
            className: 'space-y-16 lg:space-y-24',
            children: [
              s.jsx(b, {}),
              s.jsx(o, {}),
              s.jsx(h, {}),
              s.jsx(f, {}),
              s.jsx(l, {}),
              s.jsx(g.m, {}),
              s.jsx('section', {
                id: 'vscode',
                className: 'py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
                children: s.jsx('div', {
                  className:
                    'rounded-3xl border border-border/80 bg-gradient-to-br from-card via-card to-blue-950/20 p-8 sm:p-12 shadow-2xl backdrop-blur-xl',
                  children: (0, s.jsxs)('div', {
                    className: 'grid grid-cols-1 lg:grid-cols-2 gap-8 items-center',
                    children: [
                      (0, s.jsxs)('div', {
                        className: 'space-y-6',
                        children: [
                          (0, s.jsxs)('div', {
                            className:
                              'inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold',
                            children: [
                              s.jsx(p, { className: 'h-3.5 w-3.5' }),
                              ' IDE & CI Integration',
                            ],
                          }),
                          s.jsx('h2', {
                            className: 'text-3xl sm:text-4xl font-extrabold tracking-tight',
                            children: 'VSCode Extension & GitHub Action',
                          }),
                          s.jsx('p', {
                            className: 'text-muted-foreground text-sm sm:text-base leading-relaxed',
                            children:
                              'Generate structures directly inside VS Code Explorer context menus or automatically update `PROJECT_STRUCTURE.md` in CI workflows on every git push.',
                          }),
                          (0, s.jsxs)('div', {
                            className: 'flex flex-wrap gap-4 pt-2',
                            children: [
                              (0, s.jsxs)('a', {
                                href: 'https://marketplace.visualstudio.com',
                                target: '_blank',
                                rel: 'noreferrer',
                                className:
                                  'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 hover:opacity-90 transition-opacity',
                                children: [
                                  s.jsx('span', { children: 'Install VSCode Extension' }),
                                  s.jsx(j, { className: 'h-3.5 w-3.5' }),
                                ],
                              }),
                              (0, s.jsxs)(N.default, {
                                href: '/docs/github-action',
                                className:
                                  'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-muted/40 font-semibold text-xs hover:bg-muted/80 transition-colors',
                                children: [
                                  s.jsx(v, { className: 'h-3.5 w-3.5 text-purple-400' }),
                                  s.jsx('span', { children: 'GitHub Action Setup' }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)('div', {
                        className:
                          'border border-white/10 bg-black/80 rounded-2xl p-5 font-mono text-xs text-neutral-200 shadow-2xl overflow-x-auto',
                        children: [
                          s.jsx('div', {
                            className: 'text-neutral-400 mb-2',
                            children: '# .github/workflows/structure.yml',
                          }),
                          s.jsx('pre', {
                            className: 'text-purple-300',
                            children: `name: Update Project Structure
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
          generate_mermaid: true`,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, s.jsxs)('section', {
                className: 'py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
                children: [
                  (0, s.jsxs)('div', {
                    className: 'text-center space-y-4 mb-12',
                    children: [
                      s.jsx('h2', {
                        className: 'text-3xl sm:text-4xl font-extrabold tracking-tight',
                        children: 'Open Source & Community Driven',
                      }),
                      s.jsx('p', {
                        className: 'text-muted-foreground text-sm sm:text-base max-w-xl mx-auto',
                        children:
                          'RepoAtlas is an open-source standard for codebase visualization.',
                      }),
                    ],
                  }),
                  (0, s.jsxs)('div', {
                    className: 'grid grid-cols-1 md:grid-cols-3 gap-6',
                    children: [
                      (0, s.jsxs)('div', {
                        className:
                          'border border-border/60 bg-card/80 p-6 rounded-2xl space-y-3 shadow-lg',
                        children: [
                          s.jsx('div', {
                            className:
                              'text-xs font-semibold text-blue-500 uppercase tracking-wider',
                            children: 'Phase 1 (Completed)',
                          }),
                          s.jsx('h3', {
                            className: 'font-bold text-lg',
                            children: 'Core Engine & Exporters',
                          }),
                          s.jsx('p', {
                            className: 'text-xs text-muted-foreground leading-relaxed',
                            children:
                              '100,000+ files scanner, 13 exporter plugins, 8 theme renderers, CLI, and VS Code extension.',
                          }),
                        ],
                      }),
                      (0, s.jsxs)('div', {
                        className:
                          'border border-border/60 bg-card/80 p-6 rounded-2xl space-y-3 shadow-lg',
                        children: [
                          s.jsx('div', {
                            className:
                              'text-xs font-semibold text-purple-500 uppercase tracking-wider',
                            children: 'Phase 2 (Active)',
                          }),
                          s.jsx('h3', {
                            className: 'font-bold text-lg',
                            children: 'Interactive Web App & Docs',
                          }),
                          s.jsx('p', {
                            className: 'text-xs text-muted-foreground leading-relaxed',
                            children:
                              'Next.js App Router live playground, command builder, and interactive documentation suite.',
                          }),
                        ],
                      }),
                      (0, s.jsxs)('div', {
                        className:
                          'border border-border/60 bg-card/80 p-6 rounded-2xl space-y-3 shadow-lg',
                        children: [
                          s.jsx('div', {
                            className:
                              'text-xs font-semibold text-pink-500 uppercase tracking-wider',
                            children: 'Phase 3 (Upcoming)',
                          }),
                          s.jsx('h3', {
                            className: 'font-bold text-lg',
                            children: 'AI Architecture Summarizer',
                          }),
                          s.jsx('p', {
                            className: 'text-xs text-muted-foreground leading-relaxed',
                            children:
                              'Automated repository architecture diagrams, folder explanations, and vector context embeddings.',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              s.jsx('section', {
                className: 'py-16 max-w-4xl mx-auto px-4 text-center',
                children: (0, s.jsxs)('div', {
                  className:
                    'border border-border/80 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-transparent p-10 sm:p-14 rounded-3xl space-y-6 shadow-2xl backdrop-blur-xl',
                  children: [
                    s.jsx('h2', {
                      className: 'text-3xl sm:text-5xl font-extrabold tracking-tight',
                      children: 'Ready to Visualize Your Codebase?',
                    }),
                    s.jsx('p', {
                      className: 'text-muted-foreground text-sm sm:text-base max-w-xl mx-auto',
                      children:
                        'Get started in under 10 seconds. Install the CLI or try out the live web playground.',
                    }),
                    (0, s.jsxs)('div', {
                      className: 'flex flex-col sm:flex-row justify-center items-center gap-4 pt-2',
                      children: [
                        s.jsx(N.default, {
                          href: '/playground',
                          className:
                            'px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity',
                          children: 'Open Live Playground',
                        }),
                        (0, s.jsxs)('a', {
                          href: 'https://github.com/akshaykumar33/RepoAtlas',
                          target: '_blank',
                          rel: 'noreferrer',
                          className:
                            'px-6 py-3 rounded-xl border border-border bg-card font-semibold text-sm hover:bg-muted transition-colors flex items-center gap-2',
                          children: [
                            s.jsx(y.Z, { className: 'h-4 w-4' }),
                            ' View GitHub Repository',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        }
      },
      3227: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => s });
        let s = (0, r(5924).Z)('Layers', [
          [
            'path',
            {
              d: 'm12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z',
              key: '8b97xw',
            },
          ],
          ['path', { d: 'm22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65', key: 'dd6zsq' }],
          ['path', { d: 'm22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65', key: 'ep9fru' }],
        ]);
      },
    }));
  var t = require('../webpack-runtime.js');
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [735, 635, 694, 868], () => r(2582));
  module.exports = s;
})();
