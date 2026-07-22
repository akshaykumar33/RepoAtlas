(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [189],
  {
    1576: function (e, t, n) {
      (Promise.resolve().then(n.bind(n, 1780)), Promise.resolve().then(n.t.bind(n, 5411, 23)));
    },
    1780: function (e, t, n) {
      'use strict';
      n.d(t, {
        CodeBlock: function () {
          return l;
        },
      });
      var r = n(5853),
        s = n(8142),
        a = n(5949),
        o = n(8925),
        c = n(4254);
      let i = [
        { name: 'npm', cmd: 'npm install @repoatlasdev/cli' },
        { name: 'pnpm', cmd: 'pnpm add @repoatlasdev/cli' },
        { name: 'yarn', cmd: 'yarn add @repoatlasdev/cli' },
        { name: 'bun', cmd: 'bun add @repoatlasdev/cli' },
      ];
      function l(e) {
        let { filename: t, code: n, isPackageManager: l = !1 } = e,
          [d, m] = (0, c.useState)(0),
          [u, x] = (0, c.useState)(!1),
          p = l ? i[d].cmd : n || '';
        return (0, r.jsxs)('div', {
          className:
            'rounded-xl border border-border/80 bg-black/90 shadow-xl overflow-hidden my-4',
          children: [
            (0, r.jsxs)('div', {
              className:
                'flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5 text-xs text-neutral-400',
              children: [
                l
                  ? (0, r.jsx)('div', {
                      className: 'flex items-center gap-1 font-mono',
                      children: i.map((e, t) =>
                        (0, r.jsx)(
                          'button',
                          {
                            onClick: () => m(t),
                            className: 'px-2.5 py-1 rounded-md transition-colors '.concat(
                              d === t
                                ? 'bg-primary text-primary-foreground font-bold'
                                : 'hover:text-white'
                            ),
                            children: e.name,
                          },
                          e.name
                        )
                      ),
                    })
                  : (0, r.jsxs)('span', {
                      className: 'font-mono text-neutral-300 flex items-center gap-1.5',
                      children: [
                        (0, r.jsx)(s.Z, { className: 'h-3.5 w-3.5 text-blue-400' }),
                        t || 'bash',
                      ],
                    }),
                (0, r.jsxs)('button', {
                  onClick: () => {
                    (navigator.clipboard.writeText(p), x(!0), setTimeout(() => x(!1), 2e3));
                  },
                  className:
                    'flex items-center gap-1 text-neutral-400 hover:text-white transition-colors',
                  children: [
                    u
                      ? (0, r.jsx)(a.Z, { className: 'h-3.5 w-3.5 text-green-400' })
                      : (0, r.jsx)(o.Z, { className: 'h-3.5 w-3.5' }),
                    (0, r.jsx)('span', { children: u ? 'Copied' : 'Copy' }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)('pre', {
              className:
                'p-4 font-mono text-xs sm:text-sm text-neutral-100 overflow-x-auto selection:bg-purple-500/30',
              children: (0, r.jsx)('code', { children: p }),
            }),
          ],
        });
      }
    },
    5949: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(1283).Z)('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]]);
    },
    8925: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(1283).Z)('Copy', [
        ['rect', { width: '14', height: '14', x: '8', y: '8', rx: '2', ry: '2', key: '17jyea' }],
        ['path', { d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2', key: 'zix9uf' }],
      ]);
    },
  },
  function (e) {
    (e.O(0, [839, 285, 749, 744], function () {
      return e((e.s = 1576));
    }),
      (_N_E = e.O()));
  },
]);
