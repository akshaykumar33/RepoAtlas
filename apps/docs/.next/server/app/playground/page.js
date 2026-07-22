(() => {
  var e = {};
  ((e.id = 383),
    (e.ids = [383]),
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
      263: (e, r, t) => {
        'use strict';
        (t.r(r),
          t.d(r, {
            GlobalError: () => n.a,
            __next_app__: () => c,
            originalPathname: () => u,
            pages: () => d,
            routeModule: () => g,
            tree: () => l,
          }),
          t(9738),
          t(5131),
          t(8714));
        var s = t(3653),
          a = t(4966),
          o = t(6070),
          n = t.n(o),
          p = t(2555),
          i = {};
        for (let e in p)
          0 >
            [
              'default',
              'tree',
              'pages',
              'GlobalError',
              'originalPathname',
              '__next_app__',
              'routeModule',
            ].indexOf(e) && (i[e] = () => p[e]);
        t.d(r, i);
        let l = [
            '',
            {
              children: [
                'playground',
                {
                  children: [
                    '__PAGE__',
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(t.bind(t, 9738)),
                        'D:\\pro\\repo-atlas\\apps\\docs\\src\\app\\playground\\page.tsx',
                      ],
                    },
                  ],
                },
                {},
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(t.bind(t, 5131)),
                'D:\\pro\\repo-atlas\\apps\\docs\\src\\app\\layout.tsx',
              ],
              'not-found': [
                () => Promise.resolve().then(t.t.bind(t, 8714, 23)),
                'next/dist/client/components/not-found-error',
              ],
            },
          ],
          d = ['D:\\pro\\repo-atlas\\apps\\docs\\src\\app\\playground\\page.tsx'],
          u = '/playground/page',
          c = { require: t, loadChunk: () => Promise.resolve() },
          g = new s.AppPageRouteModule({
            definition: {
              kind: a.x.APP_PAGE,
              page: '/playground/page',
              pathname: '/playground',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: l },
          });
      },
      5291: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 626));
      },
      9738: (e, r, t) => {
        'use strict';
        (t.r(r), t.d(r, { default: () => n, metadata: () => o }));
        var s = t(9222),
          a = t(8036);
        let o = {
          title: 'Live Playground — RepoAtlas',
          description:
            'Interactive live playground for testing RepoAtlas tree renderers, exporters, icon packs, and custom options.',
        };
        function n() {
          return s.jsx('div', { className: 'py-8', children: s.jsx(a.m, {}) });
        }
      },
    }));
  var r = require('../../webpack-runtime.js');
  r.C(e);
  var t = (e) => r((r.s = e)),
    s = r.X(0, [735, 635, 694, 868], () => t(263));
  module.exports = s;
})();
