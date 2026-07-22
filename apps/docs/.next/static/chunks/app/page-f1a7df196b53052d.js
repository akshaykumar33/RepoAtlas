(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    9726: function (e, t, r) {
      (Promise.resolve().then(r.bind(r, 4723)),
        Promise.resolve().then(r.bind(r, 7336)),
        Promise.resolve().then(r.bind(r, 1602)),
        Promise.resolve().then(r.bind(r, 7237)),
        Promise.resolve().then(r.bind(r, 8395)),
        Promise.resolve().then(r.t.bind(r, 5411, 23)));
    },
    4723: function (e, t, r) {
      'use strict';
      r.d(t, {
        CliSimulator: function () {
          return c;
        },
      });
      var s = r(5853),
        o = r(8142),
        a = r(5949),
        n = r(8925);
      let l = (0, r(1283).Z)('Play', [
        ['polygon', { points: '6 3 20 12 6 21 6 3', key: '1oa8hb' }],
      ]);
      var d = r(4254);
      let i = [
        {
          cmd: 'repo-atlas generate --theme vscode --sort size',
          desc: 'Generate VSCode-styled tree sorted by file size',
          output:
            'my-awesome-app\n├── \uD83D\uDCC1 apps\n│   ├── \uD83D\uDCC1 docs\n│   │   ├── \uD83D\uDCCB package.json (1.3 KB)\n│   │   └── \uD83D\uDCD8 next.config.mjs (850 B)\n│   └── \uD83D\uDCC1 web (4.2 MB)\n├── \uD83D\uDCC1 packages\n│   ├── \uD83D\uDD37 core (1.8 MB)\n│   └── \uD83C\uDFA8 renderers (950 KB)\n└── \uD83D\uDCDD README.md (3.4 KB)',
        },
        {
          cmd: 'repo-atlas generate -o PROJECT_STRUCTURE.md --theme markdown',
          desc: 'Export structured Markdown file for documentation & PRs',
          output:
            '✨ Scanned repository in 12ms (84 files, 14 directories)\n\uD83D\uDCC4 Created PROJECT_STRUCTURE.md\n\n# Project Structure\n- \uD83D\uDCC1 **src**\n  - \uD83D\uDD37 **index.ts**\n  - \uD83D\uDD37 **cli.ts**\n- \uD83D\uDCCB **package.json**\n- \uD83D\uDCDD **README.md**',
        },
        {
          cmd: 'repo-atlas doctor',
          desc: 'Verify local environment health and active plugins',
          output:
            '\uD83E\uDE7A RepoAtlas Doctor Diagnostic Report\nNode.js Version : v20.19.43\nPlatform        : win32 (x64)\nConfig Keys     : 8 resolved\nRender Themes   : 8 available [ascii, unicode, vscode, material, nerd-font, markdown, json, mermaid]\nExporter Plugins: 13 registered [txt, md, html, json, yaml, xml, csv, docx, pdf, svg, png, mermaid, plantuml]\nStatus          : 0 errors detected. System healthy!',
        },
        {
          cmd: 'repo-atlas config list',
          desc: 'Inspect resolved configuration settings',
          output:
            '{\n  "format": "unicode",\n  "maxDepth": 4,\n  "theme": "vscode",\n  "iconPack": "emoji",\n  "respectGitIgnore": true,\n  "ignorePatterns": ["*.log", "dist/"]\n}',
        },
      ];
      function c() {
        let [e, t] = (0, d.useState)(0),
          [r, c] = (0, d.useState)(!1),
          m = i[e];
        return (0, s.jsx)('section', {
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
                      (0, s.jsx)('div', { className: 'h-3 w-3 rounded-full bg-red-500/80' }),
                      (0, s.jsx)('div', { className: 'h-3 w-3 rounded-full bg-yellow-500/80' }),
                      (0, s.jsx)('div', { className: 'h-3 w-3 rounded-full bg-green-500/80' }),
                      (0, s.jsxs)('span', {
                        className:
                          'ml-2 font-mono text-xs text-muted-foreground flex items-center gap-1.5',
                        children: [
                          (0, s.jsx)(o.Z, { className: 'h-3.5 w-3.5 text-blue-500' }),
                          ' bash — repo-atlas-cli',
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)('div', {
                    className: 'flex items-center gap-1',
                    children: i.map((r, o) =>
                      (0, s.jsxs)(
                        'button',
                        {
                          onClick: () => t(o),
                          className:
                            'px-2.5 py-1 rounded-md font-mono text-xs transition-colors '.concat(
                              e === o
                                ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                                : 'text-muted-foreground hover:bg-muted/80'
                            ),
                          children: ['Cmd ', o + 1],
                        },
                        o
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
                          (0, s.jsx)('span', { className: 'text-emerald-400', children: '➜' }),
                          (0, s.jsx)('span', {
                            className: 'text-purple-400',
                            children: '~/my-repo',
                          }),
                          (0, s.jsx)('span', { className: 'text-white', children: '$' }),
                          (0, s.jsx)('span', { children: m.cmd }),
                        ],
                      }),
                      (0, s.jsx)('button', {
                        onClick: () => {
                          (navigator.clipboard.writeText(m.cmd),
                            c(!0),
                            setTimeout(() => c(!1), 2e3));
                        },
                        className:
                          'p-1.5 rounded bg-white/10 hover:bg-white/20 text-neutral-300 transition-colors',
                        title: 'Copy Command',
                        children: r
                          ? (0, s.jsx)(a.Z, { className: 'h-3.5 w-3.5 text-emerald-400' })
                          : (0, s.jsx)(n.Z, { className: 'h-3.5 w-3.5' }),
                      }),
                    ],
                  }),
                  (0, s.jsxs)('p', {
                    className: 'text-neutral-400 text-xs flex items-center gap-2 italic',
                    children: [
                      (0, s.jsx)(l, { className: 'h-3 w-3 text-emerald-400 fill-emerald-400' }),
                      m.desc,
                    ],
                  }),
                  (0, s.jsx)('pre', {
                    className:
                      'text-neutral-200 leading-relaxed overflow-x-auto p-4 rounded-lg bg-black/60 border border-white/5 selection:bg-purple-500/30',
                    children: m.output,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    7336: function (e, t, r) {
      'use strict';
      r.d(t, {
        CommandBuilder: function () {
          return i;
        },
      });
      var s = r(5853),
        o = r(7417),
        a = r(8142),
        n = r(5949),
        l = r(8925),
        d = r(4254);
      function i() {
        let [e, t] = (0, d.useState)('vscode'),
          [r, i] = (0, d.useState)('emoji'),
          [c, m] = (0, d.useState)(4),
          [x, u] = (0, d.useState)('name'),
          [p, h] = (0, d.useState)('all'),
          [b, g] = (0, d.useState)(!1),
          [f, j] = (0, d.useState)(!0),
          [v, D] = (0, d.useState)('PROJECT_STRUCTURE.md'),
          [N, w] = (0, d.useState)(!1),
          [y, C] = (0, d.useState)(!1),
          k = 'repo-atlas generate --theme '
            .concat(e, ' --icons ')
            .concat(r, ' --depth ')
            .concat(c, ' --sort ')
            .concat(x);
        ('all' !== p && (k += ' --only '.concat(p)),
          b && (k += ' --show-size'),
          f || (k += ' --no-gitignore'),
          v && (k += ' -o '.concat(v)));
        let S = JSON.stringify(
          {
            theme: e,
            iconPack: r,
            maxDepth: c,
            sort: x,
            only: p,
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
                  children: [
                    (0, s.jsx)(o.Z, { className: 'h-3.5 w-3.5' }),
                    ' Interactive Generator',
                  ],
                }),
                (0, s.jsx)('h2', {
                  className: 'text-3xl sm:text-5xl font-extrabold tracking-tight',
                  children: 'CLI Command & Config Builder',
                }),
                (0, s.jsx)('p', {
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
                        (0, s.jsx)(o.Z, { className: 'h-5 w-5 text-blue-500' }),
                        ' Options & Flags',
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className: 'grid grid-cols-1 sm:grid-cols-2 gap-4',
                      children: [
                        (0, s.jsxs)('div', {
                          children: [
                            (0, s.jsx)('label', {
                              className: 'text-xs font-semibold text-muted-foreground block mb-1.5',
                              children: 'Theme Preset',
                            }),
                            (0, s.jsxs)('select', {
                              value: e,
                              onChange: (e) => t(e.target.value),
                              className:
                                'w-full px-3 py-2 rounded-lg border border-border bg-muted/40 font-medium text-xs',
                              children: [
                                (0, s.jsx)('option', { value: 'vscode', children: 'VSCode' }),
                                (0, s.jsx)('option', { value: 'unicode', children: 'Unicode' }),
                                (0, s.jsx)('option', { value: 'material', children: 'Material' }),
                                (0, s.jsx)('option', { value: 'nerd-font', children: 'Nerd Font' }),
                                (0, s.jsx)('option', { value: 'ascii', children: 'ASCII' }),
                                (0, s.jsx)('option', { value: 'markdown', children: 'Markdown' }),
                                (0, s.jsx)('option', { value: 'mermaid', children: 'Mermaid' }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)('div', {
                          children: [
                            (0, s.jsx)('label', {
                              className: 'text-xs font-semibold text-muted-foreground block mb-1.5',
                              children: 'Icon Pack',
                            }),
                            (0, s.jsxs)('select', {
                              value: r,
                              onChange: (e) => i(e.target.value),
                              className:
                                'w-full px-3 py-2 rounded-lg border border-border bg-muted/40 font-medium text-xs',
                              children: [
                                (0, s.jsx)('option', { value: 'emoji', children: 'Emoji' }),
                                (0, s.jsx)('option', { value: 'vscode', children: 'VSCode Icons' }),
                                (0, s.jsx)('option', {
                                  value: 'material',
                                  children: 'Material Icons',
                                }),
                                (0, s.jsx)('option', { value: 'nerd', children: 'Nerd Fonts' }),
                                (0, s.jsx)('option', { value: 'plain', children: 'Plain / ASCII' }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)('div', {
                          children: [
                            (0, s.jsxs)('label', {
                              className: 'text-xs font-semibold text-muted-foreground block mb-1.5',
                              children: ['Max Scan Depth (', c, ')'],
                            }),
                            (0, s.jsx)('input', {
                              type: 'range',
                              min: '1',
                              max: '10',
                              value: c,
                              onChange: (e) => m(parseInt(e.target.value, 10)),
                              className: 'w-full accent-primary',
                            }),
                          ],
                        }),
                        (0, s.jsxs)('div', {
                          children: [
                            (0, s.jsx)('label', {
                              className: 'text-xs font-semibold text-muted-foreground block mb-1.5',
                              children: 'Sorting Strategy',
                            }),
                            (0, s.jsxs)('select', {
                              value: x,
                              onChange: (e) => u(e.target.value),
                              className:
                                'w-full px-3 py-2 rounded-lg border border-border bg-muted/40 font-medium text-xs',
                              children: [
                                (0, s.jsx)('option', { value: 'name', children: 'By Name' }),
                                (0, s.jsx)('option', { value: 'size', children: 'By Size' }),
                                (0, s.jsx)('option', { value: 'type', children: 'By Type' }),
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
                            (0, s.jsx)('span', { children: 'Display File Sizes (`--show-size`)' }),
                            (0, s.jsx)('input', {
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
                            (0, s.jsx)('span', { children: 'Respect .gitignore (`--gitignore`)' }),
                            (0, s.jsx)('input', {
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
                                (0, s.jsx)(a.Z, { className: 'h-4 w-4 text-emerald-500' }),
                                ' CLI Command Line',
                              ],
                            }),
                            (0, s.jsxs)('button', {
                              onClick: () => {
                                (navigator.clipboard.writeText(k),
                                  w(!0),
                                  setTimeout(() => w(!1), 2e3));
                              },
                              className:
                                'flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-muted/50 hover:bg-muted text-xs font-medium transition-colors',
                              children: [
                                N
                                  ? (0, s.jsx)(n.Z, { className: 'h-3.5 w-3.5 text-green-500' })
                                  : (0, s.jsx)(l.Z, { className: 'h-3.5 w-3.5' }),
                                (0, s.jsx)('span', { children: N ? 'Copied' : 'Copy' }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)('pre', {
                          className:
                            'p-3.5 rounded-xl bg-black/90 text-emerald-400 font-mono text-xs overflow-x-auto border border-white/10',
                          children: ['$ ', k],
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
                            (0, s.jsx)('span', {
                              className: 'font-mono text-xs font-semibold text-muted-foreground',
                              children: '\uD83D\uDCC4 repo-atlas.config.json',
                            }),
                            (0, s.jsxs)('button', {
                              onClick: () => {
                                (navigator.clipboard.writeText(S),
                                  C(!0),
                                  setTimeout(() => C(!1), 2e3));
                              },
                              className:
                                'flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-muted/50 hover:bg-muted text-xs font-medium transition-colors',
                              children: [
                                y
                                  ? (0, s.jsx)(n.Z, { className: 'h-3.5 w-3.5 text-green-500' })
                                  : (0, s.jsx)(l.Z, { className: 'h-3.5 w-3.5' }),
                                (0, s.jsx)('span', { children: y ? 'Copied' : 'Copy' }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsx)('pre', {
                          className:
                            'p-3.5 rounded-xl bg-black/90 text-purple-300 font-mono text-xs overflow-x-auto border border-white/10',
                          children: S,
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
    1602: function (e, t, r) {
      'use strict';
      r.d(t, {
        Hero: function () {
          return x;
        },
      });
      var s = r(5853),
        o = r(8774),
        a = r(8142),
        n = r(5949),
        l = r(8925);
      let d = (0, r(1283).Z)('ArrowRight', [
        ['path', { d: 'M5 12h14', key: '1ays0h' }],
        ['path', { d: 'm12 5 7 7-7 7', key: 'xquz4c' }],
      ]);
      var i = r(900),
        c = r(3650),
        m = r(4254);
      function x() {
        let [e, t] = (0, m.useState)(!1),
          r = 'npm i -g @repoatlasdev/cli';
        return (0, s.jsxs)('section', {
          className: 'relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32',
          children: [
            (0, s.jsx)('div', {
              className:
                'absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-pink-600/10 blur-[120px] rounded-full pointer-events-none',
            }),
            (0, s.jsx)('div', {
              className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10',
              children: (0, s.jsxs)('div', {
                className: 'flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto',
                children: [
                  (0, s.jsxs)('div', {
                    className:
                      'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium backdrop-blur-md hover:border-blue-500/50 transition-all cursor-pointer',
                    children: [
                      (0, s.jsx)(o.Z, { className: 'h-3.5 w-3.5' }),
                      (0, s.jsx)('span', { children: 'RepoAtlas v0.2.1 Released on npm' }),
                      (0, s.jsx)('span', { className: 'text-muted-foreground', children: '•' }),
                      (0, s.jsx)('span', {
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
                      (0, s.jsx)('span', {
                        className:
                          'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500',
                        children: 'Visual Art',
                      }),
                    ],
                  }),
                  (0, s.jsx)('p', {
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
                              (0, s.jsx)(a.Z, { className: 'h-4 w-4 text-blue-500' }),
                              (0, s.jsx)('span', {
                                className: 'text-foreground font-semibold',
                                children: r,
                              }),
                            ],
                          }),
                          (0, s.jsx)('button', {
                            onClick: () => {
                              (navigator.clipboard.writeText(r),
                                t(!0),
                                setTimeout(() => t(!1), 2e3));
                            },
                            className:
                              'p-1.5 rounded-lg hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors',
                            title: 'Copy command',
                            children: e
                              ? (0, s.jsx)(n.Z, { className: 'h-4 w-4 text-green-500' })
                              : (0, s.jsx)(l.Z, { className: 'h-4 w-4' }),
                          }),
                        ],
                      }),
                      (0, s.jsxs)(c.default, {
                        href: '/playground',
                        className:
                          'inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/20 hover:opacity-95 transition-all group',
                        children: [
                          (0, s.jsx)('span', { children: 'Try Live Playground' }),
                          (0, s.jsx)(d, {
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
                          (0, s.jsx)(i.Z, { className: 'h-4 w-4' }),
                          (0, s.jsx)('span', { children: 'GitHub' }),
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
                          (0, s.jsx)('div', {
                            className: 'text-2xl font-bold font-mono',
                            children: '100,000+',
                          }),
                          (0, s.jsx)('div', {
                            className: 'text-xs text-muted-foreground',
                            children: 'Files Scanned / sec',
                          }),
                        ],
                      }),
                      (0, s.jsxs)('div', {
                        children: [
                          (0, s.jsx)('div', {
                            className: 'text-2xl font-bold font-mono',
                            children: '13+',
                          }),
                          (0, s.jsx)('div', {
                            className: 'text-xs text-muted-foreground',
                            children: 'Export Formats',
                          }),
                        ],
                      }),
                      (0, s.jsxs)('div', {
                        children: [
                          (0, s.jsx)('div', {
                            className: 'text-2xl font-bold font-mono',
                            children: '8+',
                          }),
                          (0, s.jsx)('div', {
                            className: 'text-xs text-muted-foreground',
                            children: 'Theme Renderers',
                          }),
                        ],
                      }),
                      (0, s.jsxs)('div', {
                        children: [
                          (0, s.jsx)('div', {
                            className: 'text-2xl font-bold font-mono',
                            children: '100%',
                          }),
                          (0, s.jsx)('div', {
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
    8395: function (e, t, r) {
      'use strict';
      r.d(t, {
        ThemeGallery: function () {
          return d;
        },
      });
      var s = r(5853),
        o = r(8774),
        a = r(5949),
        n = r(4254);
      let l = [
        {
          id: 'vscode',
          name: 'VSCode Theme',
          iconPack: 'VSCode Icons',
          badge: 'Popular',
          color: 'from-blue-500/20 to-blue-600/10 border-blue-500/30',
          preview:
            'my-project\n├─ \uD83D\uDCC1 apps\n│  ├─ \uD83D\uDCCB package.json\n│  └─ \uD83C\uDF10 index.html\n└─ \uD83D\uDCC1 packages\n   └─ \uD83D\uDD37 core.ts',
        },
        {
          id: 'material',
          name: 'Material Design',
          iconPack: 'Material Theme',
          badge: 'Vibrant',
          color: 'from-cyan-500/20 to-teal-600/10 border-cyan-500/30',
          preview:
            'my-project\n├── \uD83D\uDCC1 apps\n│   ├── \uD83D\uDCCB package.json\n│   └── \uD83C\uDF10 index.html\n└── \uD83D\uDCC1 packages\n    └── \uD83D\uDD37 core.ts',
        },
        {
          id: 'unicode',
          name: 'Unicode Tree',
          iconPack: 'Emoji Pack',
          badge: 'Default',
          color: 'from-purple-500/20 to-pink-600/10 border-purple-500/30',
          preview:
            'my-project\n├── \uD83D\uDCC2 apps\n│   ├── \uD83D\uDCCB package.json\n│   └── \uD83C\uDF10 index.html\n└── \uD83D\uDCC2 packages\n    └── \uD83D\uDD37 core.ts',
        },
        {
          id: 'nerd-font',
          name: 'Nerd Fonts',
          iconPack: 'Nerd Font Glyphs',
          badge: 'Terminal Pro',
          color: 'from-amber-500/20 to-orange-600/10 border-amber-500/30',
          preview:
            'my-project\n├── \uD83D\uDCC1 apps\n│   ├──  package.json\n│   └──  index.html\n└── \uD83D\uDCC1 packages\n    └──  core.ts',
        },
        {
          id: 'markdown',
          name: 'Markdown Doc',
          iconPack: 'Clean Text',
          badge: 'Docs Ready',
          color: 'from-emerald-500/20 to-green-600/10 border-emerald-500/30',
          preview:
            '- \uD83D\uDCC1 **my-project**\n  - \uD83D\uDCC2 **apps**\n    - \uD83D\uDCCB **package.json**\n  - \uD83D\uDCC2 **packages**\n    - \uD83D\uDD37 **core.ts**',
        },
        {
          id: 'mermaid',
          name: 'Mermaid Diagram',
          iconPack: 'Flowchart',
          badge: 'Diagrams',
          color: 'from-indigo-500/20 to-purple-600/10 border-indigo-500/30',
          preview:
            'graph TD\n  my_project["my-project"] --> apps["apps"]\n  apps --> package_json["package.json"]\n  my_project --> packages["packages"]\n  packages --> core_ts["core.ts"]',
        },
      ];
      function d() {
        let [e, t] = (0, n.useState)('vscode');
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
                  children: [
                    (0, s.jsx)(o.Z, { className: 'h-3.5 w-3.5' }),
                    ' High Precision Themes',
                  ],
                }),
                (0, s.jsx)('h2', {
                  className: 'text-3xl sm:text-5xl font-extrabold tracking-tight',
                  children: 'Visual Aesthetics That Impress',
                }),
                (0, s.jsx)('p', {
                  className: 'text-muted-foreground text-sm sm:text-base max-w-xl',
                  children:
                    'Choose from curated presets matching your terminal, documentation site, or IDE setup.',
                }),
              ],
            }),
            (0, s.jsx)('div', {
              className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
              children: l.map((r) => {
                let o = e === r.id;
                return (0, s.jsxs)(
                  'div',
                  {
                    onClick: () => t(r.id),
                    className:
                      'relative rounded-2xl border p-6 transition-all cursor-pointer bg-card/90 backdrop-blur-xl shadow-lg hover:scale-[1.02] '.concat(
                        o
                          ? 'border-2 bg-gradient-to-br '.concat(r.color, ' ring-2 ring-primary/40')
                          : 'border-border/60 hover:border-border'
                      ),
                    children: [
                      (0, s.jsxs)('div', {
                        className: 'flex items-center justify-between mb-4',
                        children: [
                          (0, s.jsxs)('div', {
                            className: 'flex items-center gap-2',
                            children: [
                              (0, s.jsx)('h3', {
                                className: 'font-bold text-base tracking-tight',
                                children: r.name,
                              }),
                              (0, s.jsx)('span', {
                                className:
                                  'px-2 py-0.5 rounded-full text-[10px] font-semibold bg-muted text-muted-foreground border border-border',
                                children: r.badge,
                              }),
                            ],
                          }),
                          o &&
                            (0, s.jsx)('div', {
                              className:
                                'h-5 w-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center',
                              children: (0, s.jsx)(a.Z, { className: 'h-3.5 w-3.5' }),
                            }),
                        ],
                      }),
                      (0, s.jsxs)('div', {
                        className: 'font-mono text-xs text-muted-foreground mb-3',
                        children: [
                          'Icon Pack: ',
                          (0, s.jsx)('span', {
                            className: 'text-foreground font-medium',
                            children: r.iconPack,
                          }),
                        ],
                      }),
                      (0, s.jsx)('pre', {
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
    900: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      let s = (0, r(1283).Z)('Github', [
        [
          'path',
          {
            d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
            key: 'tonef',
          },
        ],
        ['path', { d: 'M9 18c-4.51 2-5-2-7-2', key: '9comsn' }],
      ]);
    },
    3650: function (e, t, r) {
      'use strict';
      r.d(t, {
        default: function () {
          return o.a;
        },
      });
      var s = r(5411),
        o = r.n(s);
    },
  },
  function (e) {
    (e.O(0, [839, 104, 237, 285, 749, 744], function () {
      return e((e.s = 9726));
    }),
      (_N_E = e.O()));
  },
]);
