(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    4147: function (e, t, n) {
      (Promise.resolve().then(n.t.bind(n, 8514, 23)),
        Promise.resolve().then(n.bind(n, 4279)),
        Promise.resolve().then(n.bind(n, 8294)),
        Promise.resolve().then(n.t.bind(n, 5411, 23)),
        Promise.resolve().then(n.t.bind(n, 948, 23)));
    },
    4279: function (e, t, n) {
      'use strict';
      n.d(t, {
        Navbar: function () {
          return g;
        },
      });
      var a = n(5853),
        r = n(1283);
      let o = (0, r.Z)('FolderTree', [
          [
            'path',
            {
              d: 'M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z',
              key: 'hod4my',
            },
          ],
          [
            'path',
            {
              d: 'M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z',
              key: 'w4yl2u',
            },
          ],
          ['path', { d: 'M3 5a2 2 0 0 0 2 2h3', key: 'f2jnh7' }],
          ['path', { d: 'M3 3v13a2 2 0 0 0 2 2h3', key: 'k8epm1' }],
        ]),
        s = (0, r.Z)('BookOpen', [
          ['path', { d: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z', key: 'vv98re' }],
          ['path', { d: 'M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z', key: '1cyq3y' }],
        ]);
      var c = n(8774),
        l = n(8142);
      let d = (0, r.Z)('Command', [
          [
            'path',
            {
              d: 'M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3',
              key: '11bfej',
            },
          ],
        ]),
        i = (0, r.Z)('Sun', [
          ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
          ['path', { d: 'M12 2v2', key: 'tus03m' }],
          ['path', { d: 'M12 20v2', key: '1lh1kg' }],
          ['path', { d: 'm4.93 4.93 1.41 1.41', key: '149t6j' }],
          ['path', { d: 'm17.66 17.66 1.41 1.41', key: 'ptbguv' }],
          ['path', { d: 'M2 12h2', key: '1t8f8n' }],
          ['path', { d: 'M20 12h2', key: '1q8mjw' }],
          ['path', { d: 'm6.34 17.66-1.41 1.41', key: '1m8zz5' }],
          ['path', { d: 'm19.07 4.93-1.41 1.41', key: '1shlcs' }],
        ]),
        u = (0, r.Z)('Moon', [
          ['path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z', key: 'a7tn18' }],
        ]);
      var m = n(900),
        h = n(9478),
        f = n(3650),
        p = n(4254);
      function g() {
        let { theme: e, setTheme: t } = (0, h.F)(),
          [n, r] = (0, p.useState)(!1);
        return (
          (0, p.useEffect)(() => {
            r(!0);
          }, []),
          (0, a.jsx)('header', {
            className:
              'sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl transition-all',
            children: (0, a.jsxs)('div', {
              className:
                'max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8',
              children: [
                (0, a.jsxs)(f.default, {
                  href: '/',
                  className: 'flex items-center gap-3 group',
                  children: [
                    (0, a.jsxs)('div', {
                      className:
                        'relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform',
                      children: [
                        (0, a.jsx)(o, { className: 'h-5 w-5' }),
                        (0, a.jsx)('div', {
                          className:
                            'absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 blur group-hover:opacity-40 transition-opacity',
                        }),
                      ],
                    }),
                    (0, a.jsxs)('div', {
                      className: 'flex flex-col',
                      children: [
                        (0, a.jsx)('span', {
                          className:
                            'font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80',
                          children: 'RepoAtlas',
                        }),
                        (0, a.jsx)('span', {
                          className:
                            'text-[10px] font-mono text-muted-foreground uppercase tracking-widest -mt-1',
                          children: 'v0.2.1 • Open Source',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)('nav', {
                  className:
                    'hidden md:flex items-center gap-1 text-sm font-medium text-muted-foreground',
                  children: [
                    (0, a.jsxs)(f.default, {
                      href: '/docs/introduction',
                      className:
                        'flex items-center gap-2 px-3 py-2 rounded-lg hover:text-foreground hover:bg-muted/50 transition-colors',
                      children: [(0, a.jsx)(s, { className: 'h-4 w-4' }), 'Documentation'],
                    }),
                    (0, a.jsxs)(f.default, {
                      href: '/playground',
                      className:
                        'flex items-center gap-2 px-3 py-2 rounded-lg hover:text-foreground hover:bg-muted/50 transition-colors',
                      children: [
                        (0, a.jsx)(c.Z, { className: 'h-4 w-4 text-purple-500' }),
                        'Live Playground',
                      ],
                    }),
                    (0, a.jsx)(f.default, {
                      href: '/#features',
                      className:
                        'flex items-center gap-2 px-3 py-2 rounded-lg hover:text-foreground hover:bg-muted/50 transition-colors',
                      children: 'Features',
                    }),
                    (0, a.jsx)(f.default, {
                      href: '/#themes',
                      className:
                        'flex items-center gap-2 px-3 py-2 rounded-lg hover:text-foreground hover:bg-muted/50 transition-colors',
                      children: 'Themes',
                    }),
                    (0, a.jsxs)(f.default, {
                      href: '/#command-builder',
                      className:
                        'flex items-center gap-2 px-3 py-2 rounded-lg hover:text-foreground hover:bg-muted/50 transition-colors',
                      children: [(0, a.jsx)(l.Z, { className: 'h-4 w-4' }), 'CLI & Config Builder'],
                    }),
                  ],
                }),
                (0, a.jsxs)('div', {
                  className: 'flex items-center gap-3',
                  children: [
                    (0, a.jsxs)('button', {
                      onClick: () => {
                        let e = document.getElementById('global-search-trigger');
                        e && e.focus();
                      },
                      className:
                        'hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/60 bg-muted/30 text-xs text-muted-foreground hover:border-border hover:bg-muted/60 transition-all',
                      children: [
                        (0, a.jsx)(d, { className: 'h-3.5 w-3.5' }),
                        (0, a.jsx)('span', { children: 'Search docs...' }),
                        (0, a.jsx)('kbd', {
                          className:
                            'font-mono text-[10px] bg-background px-1.5 py-0.5 rounded border border-border',
                          children: '⌘K',
                        }),
                      ],
                    }),
                    n &&
                      (0, a.jsx)('button', {
                        onClick: () => t('dark' === e ? 'light' : 'dark'),
                        className:
                          'flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-muted/30 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors',
                        'aria-label': 'Toggle theme',
                        children:
                          'dark' === e
                            ? (0, a.jsx)(i, { className: 'h-4 w-4' })
                            : (0, a.jsx)(u, { className: 'h-4 w-4' }),
                      }),
                    (0, a.jsxs)('a', {
                      href: 'https://github.com/akshaykumar33/RepoAtlas',
                      target: '_blank',
                      rel: 'noreferrer',
                      className:
                        'flex items-center gap-2 px-3.5 py-2 rounded-lg bg-foreground text-background font-medium text-xs shadow-sm hover:opacity-90 transition-opacity',
                      children: [
                        (0, a.jsx)(m.Z, { className: 'h-4 w-4' }),
                        (0, a.jsx)('span', {
                          className: 'hidden sm:inline',
                          children: 'Star on GitHub',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
    },
    8294: function (e, t, n) {
      'use strict';
      n.d(t, {
        Providers: function () {
          return o;
        },
      });
      var a = n(5853),
        r = n(9478);
      function o(e) {
        let { children: t } = e;
        return (0, a.jsx)(r.f, {
          attribute: 'class',
          defaultTheme: 'dark',
          enableSystem: !0,
          disableTransitionOnChange: !0,
          children: t,
        });
      }
      n(4254);
    },
    900: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, n(1283).Z)('Github', [
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
    8774: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = (0, n(1283).Z)('Sparkles', [
        [
          'path',
          {
            d: 'M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z',
            key: '4pj2yx',
          },
        ],
        ['path', { d: 'M20 3v4', key: '1olli1' }],
        ['path', { d: 'M22 5h-4', key: '1gvqau' }],
        ['path', { d: 'M4 17v2', key: 'vumght' }],
        ['path', { d: 'M5 18H3', key: 'zchphs' }],
      ]);
    },
    3650: function (e, t, n) {
      'use strict';
      n.d(t, {
        default: function () {
          return r.a;
        },
      });
      var a = n(5411),
        r = n.n(a);
    },
    8514: function () {},
    948: function (e) {
      e.exports = {
        style: { fontFamily: "'__Inter_f367f3', '__Inter_Fallback_f367f3'", fontStyle: 'normal' },
        className: '__className_f367f3',
      };
    },
    9478: function (e, t, n) {
      'use strict';
      n.d(t, {
        F: function () {
          return d;
        },
        f: function () {
          return i;
        },
      });
      var a = n(4254),
        r = ['light', 'dark'],
        o = '(prefers-color-scheme: dark)',
        s = 'undefined' == typeof window,
        c = a.createContext(void 0),
        l = { setTheme: (e) => {}, themes: [] },
        d = () => {
          var e;
          return null != (e = a.useContext(c)) ? e : l;
        },
        i = (e) => (a.useContext(c) ? e.children : a.createElement(m, { ...e })),
        u = ['light', 'dark'],
        m = (e) => {
          let {
              forcedTheme: t,
              disableTransitionOnChange: n = !1,
              enableSystem: s = !0,
              enableColorScheme: l = !0,
              storageKey: d = 'theme',
              themes: i = u,
              defaultTheme: m = s ? 'system' : 'light',
              attribute: x = 'data-theme',
              value: b,
              children: y,
              nonce: v,
            } = e,
            [k, j] = a.useState(() => f(d, m)),
            [w, N] = a.useState(() => f(d)),
            S = b ? Object.values(b) : i,
            M = a.useCallback((e) => {
              let t = e;
              if (!t) return;
              'system' === e && s && (t = g());
              let a = b ? b[t] : t,
                o = n ? p() : null,
                c = document.documentElement;
              if (
                ('class' === x
                  ? (c.classList.remove(...S), a && c.classList.add(a))
                  : a
                    ? c.setAttribute(x, a)
                    : c.removeAttribute(x),
                l)
              ) {
                let e = r.includes(m) ? m : null,
                  n = r.includes(t) ? t : e;
                c.style.colorScheme = n;
              }
              null == o || o();
            }, []),
            C = a.useCallback(
              (e) => {
                let t = 'function' == typeof e ? e(e) : e;
                j(t);
                try {
                  localStorage.setItem(d, t);
                } catch (e) {}
              },
              [t]
            ),
            T = a.useCallback(
              (e) => {
                (N(g(e)), 'system' === k && s && !t && M('system'));
              },
              [k, t]
            );
          (a.useEffect(() => {
            let e = window.matchMedia(o);
            return (e.addListener(T), T(e), () => e.removeListener(T));
          }, [T]),
            a.useEffect(() => {
              let e = (e) => {
                e.key === d && C(e.newValue || m);
              };
              return (
                window.addEventListener('storage', e),
                () => window.removeEventListener('storage', e)
              );
            }, [C]),
            a.useEffect(() => {
              M(null != t ? t : k);
            }, [t, k]));
          let _ = a.useMemo(
            () => ({
              theme: k,
              setTheme: C,
              forcedTheme: t,
              resolvedTheme: 'system' === k ? w : k,
              themes: s ? [...i, 'system'] : i,
              systemTheme: s ? w : void 0,
            }),
            [k, C, t, w, s, i]
          );
          return a.createElement(
            c.Provider,
            { value: _ },
            a.createElement(h, {
              forcedTheme: t,
              disableTransitionOnChange: n,
              enableSystem: s,
              enableColorScheme: l,
              storageKey: d,
              themes: i,
              defaultTheme: m,
              attribute: x,
              value: b,
              children: y,
              attrs: S,
              nonce: v,
            }),
            y
          );
        },
        h = a.memo((e) => {
          let {
              forcedTheme: t,
              storageKey: n,
              attribute: s,
              enableSystem: c,
              enableColorScheme: l,
              defaultTheme: d,
              value: i,
              attrs: u,
              nonce: m,
            } = e,
            h = 'system' === d,
            f =
              'class' === s
                ? 'var d=document.documentElement,c=d.classList;'.concat(
                    'c.remove('.concat(u.map((e) => "'".concat(e, "'")).join(','), ')'),
                    ';'
                  )
                : "var d=document.documentElement,n='".concat(s, "',s='setAttribute';"),
            p = l
              ? (r.includes(d) ? d : null)
                ? "if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(d, "'")
                : "if(e==='light'||e==='dark')d.style.colorScheme=e"
              : '',
            g = function (e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                a = i ? i[e] : e,
                o = t ? e + "|| ''" : "'".concat(a, "'"),
                c = '';
              return (
                l && n && !t && r.includes(e) && (c += "d.style.colorScheme = '".concat(e, "';")),
                'class' === s
                  ? t || a
                    ? (c += 'c.add('.concat(o, ')'))
                    : (c += 'null')
                  : a && (c += 'd[s](n,'.concat(o, ')')),
                c
              );
            },
            x = t
              ? '!function(){'.concat(f).concat(g(t), '}()')
              : c
                ? '!function(){try{'
                    .concat(f, "var e=localStorage.getItem('")
                    .concat(n, "');if('system'===e||(!e&&")
                    .concat(h, ")){var t='")
                    .concat(o, "',m=window.matchMedia(t);if(m.media!==t||m.matches){")
                    .concat(g('dark'), '}else{')
                    .concat(g('light'), '}}else if(e){')
                    .concat(i ? 'var x='.concat(JSON.stringify(i), ';') : '')
                    .concat(g(i ? 'x[e]' : 'e', !0), '}')
                    .concat(h ? '' : 'else{' + g(d, !1, !1) + '}')
                    .concat(p, '}catch(e){}}()')
                : '!function(){try{'
                    .concat(f, "var e=localStorage.getItem('")
                    .concat(n, "');if(e){")
                    .concat(i ? 'var x='.concat(JSON.stringify(i), ';') : '')
                    .concat(g(i ? 'x[e]' : 'e', !0), '}else{')
                    .concat(g(d, !1, !1), ';}')
                    .concat(p, '}catch(t){}}();');
          return a.createElement('script', { nonce: m, dangerouslySetInnerHTML: { __html: x } });
        }),
        f = (e, t) => {
          let n;
          if (!s) {
            try {
              n = localStorage.getItem(e) || void 0;
            } catch (e) {}
            return n || t;
          }
        },
        p = () => {
          let e = document.createElement('style');
          return (
            e.appendChild(
              document.createTextNode(
                '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
              )
            ),
            document.head.appendChild(e),
            () => {
              (window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(e);
                }, 1));
            }
          );
        },
        g = (e) => (e || (e = window.matchMedia(o)), e.matches ? 'dark' : 'light');
    },
  },
  function (e) {
    (e.O(0, [373, 839, 285, 749, 744], function () {
      return e((e.s = 4147));
    }),
      (_N_E = e.O()));
  },
]);
