'use strict';
(() => {
  var e = {};
  ((e.id = 409),
    (e.ids = [409]),
    (e.modules = {
      2934: (e) => {
        e.exports = require('next/dist/client/components/action-async-storage.external.js');
      },
      4580: (e) => {
        e.exports = require('next/dist/client/components/request-async-storage.external.js');
      },
      5869: (e) => {
        e.exports = require('next/dist/client/components/static-generation-async-storage.external.js');
      },
      399: (e) => {
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js');
      },
      9743: (e, t, n) => {
        (n.r(t),
          n.d(t, {
            GlobalError: () => a.a,
            __next_app__: () => p,
            originalPathname: () => f,
            pages: () => s,
            routeModule: () => c,
            tree: () => d,
          }),
          n(9047),
          n(8714),
          n(5131));
        var o = n(3653),
          r = n(4966),
          u = n(6070),
          a = n.n(u),
          l = n(2555),
          i = {};
        for (let e in l)
          0 >
            [
              'default',
              'tree',
              'pages',
              'GlobalError',
              'originalPathname',
              '__next_app__',
              'routeModule',
            ].indexOf(e) && (i[e] = () => l[e]);
        n.d(t, i);
        let d = [
            '',
            {
              children: [
                '/_not-found',
                {
                  children: [
                    '__PAGE__',
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(n.t.bind(n, 8714, 23)),
                        'next/dist/client/components/not-found-error',
                      ],
                    },
                  ],
                },
                {},
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(n.bind(n, 5131)),
                'D:\\pro\\repo-atlas\\apps\\docs\\src\\app\\layout.tsx',
              ],
              'not-found': [
                () => Promise.resolve().then(n.t.bind(n, 8714, 23)),
                'next/dist/client/components/not-found-error',
              ],
            },
          ],
          s = [],
          f = '/_not-found/page',
          p = { require: n, loadChunk: () => Promise.resolve() },
          c = new o.AppPageRouteModule({
            definition: {
              kind: r.x.APP_PAGE,
              page: '/_not-found/page',
              pathname: '/_not-found',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      2516: (e, t) => {
        (Object.defineProperty(t, '__esModule', { value: !0 }),
          (function (e, t) {
            for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
          })(t, {
            isNotFoundError: function () {
              return r;
            },
            notFound: function () {
              return o;
            },
          }));
        let n = 'NEXT_NOT_FOUND';
        function o() {
          let e = Error(n);
          throw ((e.digest = n), e);
        }
        function r(e) {
          return 'object' == typeof e && null !== e && 'digest' in e && e.digest === n;
        }
        ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
      9047: (e, t, n) => {
        (Object.defineProperty(t, '__esModule', { value: !0 }),
          (function (e, t) {
            for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
          })(t, {
            PARALLEL_ROUTE_DEFAULT_PATH: function () {
              return r;
            },
            default: function () {
              return u;
            },
          }));
        let o = n(2516),
          r = 'next/dist/client/components/parallel-route-default.js';
        function u() {
          (0, o.notFound)();
        }
        ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
    }));
  var t = require('../../webpack-runtime.js');
  t.C(e);
  var n = (e) => t((t.s = e)),
    o = t.X(0, [735, 694], () => n(9743));
  module.exports = o;
})();
