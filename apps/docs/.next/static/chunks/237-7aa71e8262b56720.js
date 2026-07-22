'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [237],
  {
    7237: function (e, t, n) {
      n.d(t, {
        LivePlayground: function () {
          return H;
        },
      });
      var r = n(5853),
        s = n(3491).Buffer,
        a = class {
          export(e) {
            let t = ['"Path","Name","Type","SizeBytes","ModifiedAt"'];
            function n(e) {
              return e.replace(/"/g, '""');
            }
            return (
              !(function e(r) {
                var s, a, o, i, c, l;
                let d = 0;
                d =
                  'file' === r.type
                    ? null !==
                        (o = null === (a = r.metadata) || void 0 === a ? void 0 : a.sizeBytes) &&
                      void 0 !== o
                      ? o
                      : 0
                    : null !==
                          (c =
                            null === (i = r.metadata) || void 0 === i
                              ? void 0
                              : i.totalSizeBytes) && void 0 !== c
                      ? c
                      : 0;
                let p =
                  null !==
                    (l = null === (s = r.metadata) || void 0 === s ? void 0 : s.modifiedAt) &&
                  void 0 !== l
                    ? l
                    : '';
                if (
                  (t.push(
                    '"'
                      .concat(n(r.relativePath), '","')
                      .concat(n(r.name), '","')
                      .concat(r.type, '",')
                      .concat(d, ',"')
                      .concat(n(p), '"')
                  ),
                  r.children)
                )
                  for (let t = 0; t < r.children.length; t++) {
                    let n = r.children[t];
                    n && e(n);
                  }
              })(e),
              {
                format: this.name,
                fileExtension: this.fileExtension,
                mimeType: this.mimeType,
                content: t.join('\n'),
                filename: ''.concat(e.name, '-tree.csv'),
              }
            );
          }
          constructor() {
            ((this.name = 'csv'), (this.fileExtension = 'csv'), (this.mimeType = 'text/csv'));
          }
        },
        o = class {
          export(e) {
            return {
              format: this.name,
              fileExtension: this.fileExtension,
              mimeType: this.mimeType,
              content: s.from('DOCX Document for '.concat(e.name)),
              filename: ''.concat(e.name, '-tree.docx'),
            };
          }
          constructor() {
            ((this.name = 'docx'),
              (this.fileExtension = 'docx'),
              (this.mimeType =
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document'));
          }
        },
        i = class {
          export(e) {
            let t = '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8" />\n  <title>'
              .concat(
                e.name,
                ' - Project Structure</title>\n  <style>\n    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 2rem; }\n    ul { list-style: none; padding-left: 1.5rem; }\n    .folder { font-weight: bold; color: #38bdf8; }\n    .file { color: #cbd5e1; }\n  </style>\n</head>\n<body>\n  <h1>\uD83D\uDDFA️ RepoAtlas Structure: '
              )
              .concat(e.name, '</h1>\n  <ul>')
              .concat(
                (function e(t) {
                  let n = 'directory' === t.type,
                    r = '<li class="'
                      .concat(n ? 'folder' : 'file', '"><span>')
                      .concat(n ? '\uD83D\uDCC1' : '\uD83D\uDCC4', ' ')
                      .concat(t.name, '</span>');
                  if (t.children && t.children.length > 0) {
                    for (let n of ((r += '<ul>'), t.children)) r += e(n);
                    r += '</ul>';
                  }
                  return r + '</li>';
                })(e),
                '</ul>\n</body>\n</html>'
              );
            return {
              format: this.name,
              fileExtension: this.fileExtension,
              mimeType: this.mimeType,
              content: t,
              filename: ''.concat(e.name, '-tree.html'),
            };
          }
          constructor() {
            ((this.name = 'html'), (this.fileExtension = 'html'), (this.mimeType = 'text/html'));
          }
        },
        c = class {
          export(e) {
            return {
              format: this.name,
              fileExtension: this.fileExtension,
              mimeType: this.mimeType,
              content: JSON.stringify(e, null, 2),
              filename: ''.concat(e.name, '-tree.json'),
            };
          }
          constructor() {
            ((this.name = 'json'),
              (this.fileExtension = 'json'),
              (this.mimeType = 'application/json'));
          }
        },
        l = class {
          export(e) {
            let t = '# Project Structure: '.concat(e.name, '\n\n```\n').concat(
              (function e(t) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                  r = '  '.repeat(n),
                  s = 'directory' === t.type ? '\uD83D\uDCC1' : '\uD83D\uDCC4',
                  a = ''.concat(r, '- ').concat(s, ' **').concat(t.name, '**\n');
                if (t.children) for (let r of t.children) a += e(r, n + 1);
                return a;
              })(e),
              '```\n'
            );
            return {
              format: this.name,
              fileExtension: this.fileExtension,
              mimeType: this.mimeType,
              content: t,
              filename: ''.concat(e.name, '-structure.md'),
            };
          }
          constructor() {
            ((this.name = 'md'), (this.fileExtension = 'md'), (this.mimeType = 'text/markdown'));
          }
        },
        d = class {
          export(e) {
            let t = ['graph TD'],
              n = 0;
            return (
              !(function e(r, s) {
                let a = 'node_'.concat(n++),
                  o =
                    'directory' === r.type
                      ? '["\uD83D\uDCC1 '.concat(r.name, '"]')
                      : '["\uD83D\uDCC4 '.concat(r.name, '"]');
                if (
                  (t.push('  '.concat(a).concat(o)),
                  s && t.push('  '.concat(s, ' --> ').concat(a)),
                  r.children)
                )
                  for (let t of r.children) e(t, a);
                return a;
              })(e),
              {
                format: this.name,
                fileExtension: this.fileExtension,
                mimeType: this.mimeType,
                content: t.join('\n'),
                filename: ''.concat(e.name, '-diagram.mermaid'),
              }
            );
          }
          constructor() {
            ((this.name = 'mermaid'),
              (this.fileExtension = 'mermaid'),
              (this.mimeType = 'text/plain'));
          }
        },
        p = class {
          export(e) {
            return {
              format: this.name,
              fileExtension: this.fileExtension,
              mimeType: this.mimeType,
              content: s.from('%PDF-1.4 PDF Document for '.concat(e.name)),
              filename: ''.concat(e.name, '-tree.pdf'),
            };
          }
          constructor() {
            ((this.name = 'pdf'),
              (this.fileExtension = 'pdf'),
              (this.mimeType = 'application/pdf'));
          }
        },
        m = class {
          export(e) {
            let t = ['@startuml', 'package "'.concat(e.name, '" {')];
            return (
              !(function e(n) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '  ';
                if (n.children)
                  for (let s of n.children)
                    'directory' === s.type
                      ? (t.push(''.concat(r, 'folder "').concat(s.name, '" {')),
                        e(s, ''.concat(r, '  ')),
                        t.push(''.concat(r, '}')))
                      : t.push(''.concat(r, '[').concat(s.name, ']'));
              })(e),
              t.push('}', '@enduml'),
              {
                format: this.name,
                fileExtension: this.fileExtension,
                mimeType: this.mimeType,
                content: t.join('\n'),
                filename: ''.concat(e.name, '-structure.puml'),
              }
            );
          }
          constructor() {
            ((this.name = 'plantuml'),
              (this.fileExtension = 'puml'),
              (this.mimeType = 'text/plain'));
          }
        },
        h = class {
          export(e) {
            return {
              format: this.name,
              fileExtension: this.fileExtension,
              mimeType: this.mimeType,
              content: s.from('PNG Image for '.concat(e.name)),
              filename: ''.concat(e.name, '-tree.png'),
            };
          }
          constructor() {
            ((this.name = 'png'), (this.fileExtension = 'png'), (this.mimeType = 'image/png'));
          }
        },
        u = class {
          export(e) {
            let t = 30,
              n = [];
            !(function e(r, s) {
              let a = 'directory' === r.type ? '\uD83D\uDCC1' : '\uD83D\uDCC4';
              if (
                (n.push(
                  '<text x="'
                    .concat(s, '" y="')
                    .concat(t, '" fill="#e2e8f0" font-family="monospace" font-size="14">')
                    .concat(a, ' ')
                    .concat(r.name, '</text>')
                ),
                (t += 24),
                r.children)
              )
                for (let t of r.children) e(t, s + 20);
            })(e, 20);
            let r = '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="'
              .concat(t + 20, '" style="background:#0f172a;">\n')
              .concat(n.join('\n'), '\n</svg>');
            return {
              format: this.name,
              fileExtension: this.fileExtension,
              mimeType: this.mimeType,
              content: r,
              filename: ''.concat(e.name, '-tree.svg'),
            };
          }
          constructor() {
            ((this.name = 'svg'), (this.fileExtension = 'svg'), (this.mimeType = 'image/svg+xml'));
          }
        },
        x = class {
          export(e) {
            return {
              format: this.name,
              fileExtension: this.fileExtension,
              mimeType: this.mimeType,
              content: (function e(t) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
                  r = ''.concat(n).concat(t.name, '\n');
                if (t.children) for (let s of t.children) r += e(s, ''.concat(n, '  '));
                return r;
              })(e),
              filename: ''.concat(e.name, '-tree.txt'),
            };
          }
          constructor() {
            ((this.name = 'txt'), (this.fileExtension = 'txt'), (this.mimeType = 'text/plain'));
          }
        },
        f = class {
          export(e) {
            let t = '<?xml version="1.0" encoding="UTF-8"?>\n<tree>\n'.concat(
              (function e(t) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '  ',
                  r = 'directory' === t.type ? 'directory' : 'file',
                  s = ''.concat(n, '<').concat(r, ' name="').concat(t.name, '">\n');
                if (t.children) for (let r of t.children) s += e(r, ''.concat(n, '  '));
                return s + ''.concat(n, '</').concat(r, '>\n');
              })(e),
              '</tree>'
            );
            return {
              format: this.name,
              fileExtension: this.fileExtension,
              mimeType: this.mimeType,
              content: t,
              filename: ''.concat(e.name, '-tree.xml'),
            };
          }
          constructor() {
            ((this.name = 'xml'),
              (this.fileExtension = 'xml'),
              (this.mimeType = 'application/xml'));
          }
        },
        g = class {
          export(e) {
            return {
              format: this.name,
              fileExtension: this.fileExtension,
              mimeType: this.mimeType,
              content: (function e(t) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
                  r = ''
                    .concat(n, '- name: "')
                    .concat(t.name, '"\n')
                    .concat(n, '  type: "')
                    .concat(t.type, '"\n');
                if (t.children && t.children.length > 0)
                  for (let s of ((r += ''.concat(n, '  children:\n')), t.children))
                    r += e(s, ''.concat(n, '    '));
                return r;
              })(e),
              filename: ''.concat(e.name, '-tree.yaml'),
            };
          }
          constructor() {
            ((this.name = 'yaml'), (this.fileExtension = 'yaml'), (this.mimeType = 'text/yaml'));
          }
        },
        y = class {
          register(e) {
            e && e.name && this.plugins.set(e.name.toLowerCase(), e);
          }
          get(e) {
            if ('string' == typeof e) return this.plugins.get(e.toLowerCase());
          }
          list() {
            return Array.from(this.plugins.keys());
          }
          export(e, t) {
            var n;
            let r =
                'string' == typeof t
                  ? t
                  : null !== (n = null == t ? void 0 : t.format) && void 0 !== n
                    ? n
                    : 'txt',
              s = this.get(r);
            if (!s)
              throw Error(
                "Unsupported exporter format '"
                  .concat(r, "'. Available formats: ")
                  .concat(this.list().join(', '))
              );
            return s.export(e);
          }
          constructor() {
            ((this.plugins = new Map()),
              this.register(new x()),
              this.register(new l()),
              this.register(new i()),
              this.register(new c()),
              this.register(new g()),
              this.register(new f()),
              this.register(new a()),
              this.register(new o()),
              this.register(new p()),
              this.register(new u()),
              this.register(new h()),
              this.register(new d()),
              this.register(new m()));
          }
        },
        v = n(8293),
        D = {
          folder: '\uD83D\uDCC1',
          folderOpen: '\uD83D\uDCC2',
          file: '\uD83D\uDCC4',
          ts: '\uD83D\uDD37',
          js: '\uD83D\uDFE8',
          json: '\uD83D\uDCCB',
          md: '\uD83D\uDCDD',
          html: '\uD83C\uDF10',
          css: '\uD83C\uDFA8',
        },
        j = {
          folder: '\uD83D\uDCC1',
          file: '\uD83D\uDCC4',
          ts: '',
          js: '',
          json: '',
          md: '',
          html: '',
        },
        b = {
          folder: '\uD83D\uDCC1',
          file: '\uD83D\uDCC4',
          ts: '\uDB81\uDEE6',
          js: '\uDB80\uDF1E',
          json: '\uDB81\uDE26',
          md: '\uDB80\uDF54',
        },
        w = { folder: '\uD83D\uDCC1', file: '\uD83D\uDCC4', ts: '', js: '' },
        C = class {
          getFolderIcon() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            switch (this.pack) {
              case 'vscode':
                return j.folder || '\uD83D\uDCC1';
              case 'material':
                return b.folder || '\uD83D\uDCC1';
              case 'nerd':
                return w.folder || '\uD83D\uDCC1';
              case 'plain':
              case 'ascii':
                return '';
              default:
                return e ? D.folderOpen || '\uD83D\uDCC2' : D.folder || '\uD83D\uDCC1';
            }
          }
          getFileIcon(e) {
            let t, n;
            let r = (function (e) {
              let t = v.extname(e);
              return t ? t.substring(1).toLowerCase() : '';
            })(e).toLowerCase();
            if (this.customIcons && this.customIcons[r]) return this.customIcons[r];
            switch (this.pack) {
              case 'vscode':
                ((t = j), (n = j.file || '\uD83D\uDCC4'));
                break;
              case 'material':
                ((t = b), (n = b.file || '\uD83D\uDCC4'));
                break;
              case 'nerd':
                ((t = w), (n = w.file || '\uD83D\uDCC4'));
                break;
              default:
                ((t = D), (n = D.file || '\uD83D\uDCC4'));
            }
            return t[e] || t[r] || n || '';
          }
          resolveFile(e) {
            return this.getFileIcon(e);
          }
          constructor(e) {
            if ('string' == typeof e) this.pack = e;
            else {
              var t, n;
              ((this.pack =
                null !== (n = null == e ? void 0 : e.pack) && void 0 !== n ? n : 'emoji'),
                (this.customIcons =
                  null == e
                    ? void 0
                    : null === (t = e.customIcons) || void 0 === t
                      ? void 0
                      : t.extensions));
            }
          }
        },
        k = class {
          render(e) {
            var t, n, r, s, a;
            let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              i =
                null !== (n = o.iconResolver) && void 0 !== n
                  ? n
                  : new C(null !== (t = o.icons) && void 0 !== t ? t : 'unicode'),
              c = null !== (r = o.useColor) && void 0 !== r && r,
              l = null !== (s = o.showSize) && void 0 !== s && s;
            return this.renderNode(
              e,
              '',
              !0,
              {
                iconResolver: i,
                useColor: c,
                showSize: l,
                maxDepth: null !== (a = o.maxDepth) && void 0 !== a ? a : 1 / 0,
              },
              0
            );
          }
        },
        N = class extends k {
          renderNode(e, t, n, r, s) {
            let a = r.iconResolver.getFileIcon(e.name),
              o = ''
                .concat(t)
                .concat(n ? '`-- ' : '|-- ')
                .concat(a ? ''.concat(a, ' ') : '')
                .concat(e.name, '\n');
            if (e.children && s < r.maxDepth) {
              let a = t + (n ? '    ' : '|   ');
              for (let t = 0; t < e.children.length; t++) {
                let n = e.children[t];
                n && (o += this.renderNode(n, a, t === e.children.length - 1, r, s + 1));
              }
            }
            return o;
          }
          constructor(...e) {
            (super(...e), (this.name = 'ascii'));
          }
        },
        E = class extends k {
          render(e) {
            return JSON.stringify(e, null, 2);
          }
          renderNode(e, t, n, r, s) {
            return '';
          }
          constructor(...e) {
            (super(...e), (this.name = 'json'));
          }
        },
        T = class extends k {
          renderNode(e, t, n, r, s) {
            let a = '  '.repeat(s),
              o = r.iconResolver.getFileIcon(e.name),
              i = ''
                .concat(a, '- ')
                .concat(o ? ''.concat(o, ' ') : '', '**')
                .concat(e.name, '**\n');
            if (e.children && s < r.maxDepth)
              for (let n = 0; n < e.children.length; n++) {
                let a = e.children[n];
                a && (i += this.renderNode(a, t, n === e.children.length - 1, r, s + 1));
              }
            return i;
          }
          constructor(...e) {
            (super(...e), (this.name = 'markdown'));
          }
        },
        P = class extends k {
          renderNode(e, t, n, r, s) {
            let a = 'directory' === e.type,
              o = new C('material'),
              i = a ? o.getFolderIcon() : o.getFileIcon(e.name),
              c = ''
                .concat(t)
                .concat(n ? '└── ' : '├── ')
                .concat(i ? ''.concat(i, ' ') : '')
                .concat(e.name, '\n');
            if (e.children && s < r.maxDepth) {
              let a = t + (n ? '    ' : '│   ');
              for (let t = 0; t < e.children.length; t++) {
                let n = e.children[t];
                n && (c += this.renderNode(n, a, t === e.children.length - 1, r, s + 1));
              }
            }
            return c;
          }
          constructor(...e) {
            (super(...e), (this.name = 'material'));
          }
        },
        A = class extends k {
          render(e) {
            let t = 'graph TD\n';
            return (
              !(function e(n) {
                if (n.children)
                  for (let r of n.children) {
                    let s = n.name.replace(/[^a-zA-Z0-9_]/g, '_'),
                      a = r.name.replace(/[^a-zA-Z0-9_]/g, '_');
                    ((t += '  '
                      .concat(s, '["')
                      .concat(n.name, '"] --> ')
                      .concat(a, '["')
                      .concat(r.name, '"]\n')),
                      e(r));
                  }
              })(e),
              t
            );
          }
          renderNode(e, t, n, r, s) {
            return '';
          }
          constructor(...e) {
            (super(...e), (this.name = 'mermaid'));
          }
        },
        R = class extends k {
          renderNode(e, t, n, r, s) {
            let a = 'directory' === e.type,
              o = new C('nerd'),
              i = a ? o.getFolderIcon() : o.getFileIcon(e.name),
              c = ''
                .concat(t)
                .concat(n ? '└── ' : '├── ')
                .concat(i ? ''.concat(i, ' ') : '')
                .concat(e.name, '\n');
            if (e.children && s < r.maxDepth) {
              let a = t + (n ? '    ' : '│   ');
              for (let t = 0; t < e.children.length; t++) {
                let n = e.children[t];
                n && (c += this.renderNode(n, a, t === e.children.length - 1, r, s + 1));
              }
            }
            return c;
          }
          constructor(...e) {
            (super(...e), (this.name = 'nerd-font'));
          }
        },
        F = class extends k {
          renderNode(e, t, n, r, s) {
            let a =
                'directory' === e.type
                  ? r.iconResolver.getFolderIcon()
                  : r.iconResolver.getFileIcon(e.name),
              o = ''
                .concat(t)
                .concat(n ? '└── ' : '├── ')
                .concat(a ? ''.concat(a, ' ') : '')
                .concat(e.name, '\n');
            if (e.children && s < r.maxDepth) {
              let a = t + (n ? '    ' : '│   ');
              for (let t = 0; t < e.children.length; t++) {
                let n = e.children[t];
                n && (o += this.renderNode(n, a, t === e.children.length - 1, r, s + 1));
              }
            }
            return o;
          }
          constructor(...e) {
            (super(...e), (this.name = 'unicode'));
          }
        },
        I = class extends k {
          renderNode(e, t, n, r, s) {
            let a = 'directory' === e.type,
              o = new C('vscode'),
              i = a ? o.getFolderIcon() : o.getFileIcon(e.name),
              c = ''
                .concat(t)
                .concat(n ? '└─ ' : '├─ ')
                .concat(i ? ''.concat(i, ' ') : '')
                .concat(e.name, '\n');
            if (e.children && s < r.maxDepth) {
              let a = t + (n ? '   ' : '│  ');
              for (let t = 0; t < e.children.length; t++) {
                let n = e.children[t];
                n && (c += this.renderNode(n, a, t === e.children.length - 1, r, s + 1));
              }
            }
            return c;
          }
          constructor(...e) {
            (super(...e), (this.name = 'vscode'));
          }
        },
        S = class {
          register(e) {
            this.renderers.set(e.name.toLowerCase(), e);
          }
          get(e) {
            return this.renderers.get(e.toLowerCase());
          }
          list() {
            return Array.from(this.renderers.keys());
          }
          render(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'unicode',
              n = arguments.length > 2 ? arguments[2] : void 0,
              r = this.get(t);
            if (!r)
              throw Error(
                "Unsupported theme renderer '"
                  .concat(t, "'. Available themes: ")
                  .concat(this.list().join(', '))
              );
            return r.render(e, n);
          }
          constructor() {
            ((this.renderers = new Map()),
              this.register(new F()),
              this.register(new N()),
              this.register(new I()),
              this.register(new P()),
              this.register(new R()),
              this.register(new T()),
              this.register(new E()),
              this.register(new A()));
          }
        },
        M = n(4201),
        L = n(8774),
        Z = n(7705),
        O = n(5458),
        B = n(8126),
        _ = n(7417),
        U = n(4100),
        z = n(5949),
        J = n(8925),
        V = n(9770),
        Y = n(4254);
      let G = {
        monorepo: {
          name: 'RepoAtlas Monorepo',
          tree: {
            id: '.',
            name: 'RepoAtlas',
            path: '/RepoAtlas',
            relativePath: '.',
            type: 'directory',
            children: [
              {
                id: 'apps',
                name: 'apps',
                path: '/RepoAtlas/apps',
                relativePath: 'apps',
                type: 'directory',
                children: [
                  {
                    id: 'apps/cli',
                    name: 'cli',
                    path: '/RepoAtlas/apps/cli',
                    relativePath: 'apps/cli',
                    type: 'directory',
                    children: [
                      {
                        id: 'apps/cli/package.json',
                        name: 'package.json',
                        path: '/RepoAtlas/apps/cli/package.json',
                        relativePath: 'apps/cli/package.json',
                        type: 'file',
                      },
                      {
                        id: 'apps/cli/src',
                        name: 'src',
                        path: '/RepoAtlas/apps/cli/src',
                        relativePath: 'apps/cli/src',
                        type: 'directory',
                        children: [],
                      },
                    ],
                  },
                  {
                    id: 'apps/docs',
                    name: 'docs',
                    path: '/RepoAtlas/apps/docs',
                    relativePath: 'apps/docs',
                    type: 'directory',
                    children: [
                      {
                        id: 'apps/docs/package.json',
                        name: 'package.json',
                        path: '/RepoAtlas/apps/docs/package.json',
                        relativePath: 'apps/docs/package.json',
                        type: 'file',
                      },
                      {
                        id: 'apps/docs/next.config.mjs',
                        name: 'next.config.mjs',
                        path: '/RepoAtlas/apps/docs/next.config.mjs',
                        relativePath: 'apps/docs/next.config.mjs',
                        type: 'file',
                      },
                    ],
                  },
                  {
                    id: 'apps/vscode',
                    name: 'vscode',
                    path: '/RepoAtlas/apps/vscode',
                    relativePath: 'apps/vscode',
                    type: 'directory',
                    children: [
                      {
                        id: 'apps/vscode/package.json',
                        name: 'package.json',
                        path: '/RepoAtlas/apps/vscode/package.json',
                        relativePath: 'apps/vscode/package.json',
                        type: 'file',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'packages',
                name: 'packages',
                path: '/RepoAtlas/packages',
                relativePath: 'packages',
                type: 'directory',
                children: [
                  {
                    id: 'packages/core',
                    name: 'core',
                    path: '/RepoAtlas/packages/core',
                    relativePath: 'packages/core',
                    type: 'directory',
                    children: [],
                  },
                  {
                    id: 'packages/renderers',
                    name: 'renderers',
                    path: '/RepoAtlas/packages/renderers',
                    relativePath: 'packages/renderers',
                    type: 'directory',
                    children: [],
                  },
                  {
                    id: 'packages/exporters',
                    name: 'exporters',
                    path: '/RepoAtlas/packages/exporters',
                    relativePath: 'packages/exporters',
                    type: 'directory',
                    children: [],
                  },
                  {
                    id: 'packages/icons',
                    name: 'icons',
                    path: '/RepoAtlas/packages/icons',
                    relativePath: 'packages/icons',
                    type: 'directory',
                    children: [],
                  },
                ],
              },
              {
                id: 'package.json',
                name: 'package.json',
                path: '/RepoAtlas/package.json',
                relativePath: 'package.json',
                type: 'file',
              },
              {
                id: 'README.md',
                name: 'README.md',
                path: '/RepoAtlas/README.md',
                relativePath: 'README.md',
                type: 'file',
              },
              {
                id: 'pnpm-workspace.yaml',
                name: 'pnpm-workspace.yaml',
                path: '/RepoAtlas/pnpm-workspace.yaml',
                relativePath: 'pnpm-workspace.yaml',
                type: 'file',
              },
            ],
          },
        },
        nextjs: {
          name: 'Next.js 14 E-Commerce App',
          tree: {
            id: '.',
            name: 'my-store',
            path: '/my-store',
            relativePath: '.',
            type: 'directory',
            children: [
              {
                id: 'src',
                name: 'src',
                path: '/my-store/src',
                relativePath: 'src',
                type: 'directory',
                children: [
                  {
                    id: 'src/app',
                    name: 'app',
                    path: '/my-store/src/app',
                    relativePath: 'src/app',
                    type: 'directory',
                    children: [
                      {
                        id: 'src/app/page.tsx',
                        name: 'page.tsx',
                        path: '/my-store/src/app/page.tsx',
                        relativePath: 'src/app/page.tsx',
                        type: 'file',
                      },
                      {
                        id: 'src/app/layout.tsx',
                        name: 'layout.tsx',
                        path: '/my-store/src/app/layout.tsx',
                        relativePath: 'src/app/layout.tsx',
                        type: 'file',
                      },
                      {
                        id: 'src/app/globals.css',
                        name: 'globals.css',
                        path: '/my-store/src/app/globals.css',
                        relativePath: 'src/app/globals.css',
                        type: 'file',
                      },
                    ],
                  },
                  {
                    id: 'src/components',
                    name: 'components',
                    path: '/my-store/src/components',
                    relativePath: 'src/components',
                    type: 'directory',
                    children: [
                      {
                        id: 'src/components/button.tsx',
                        name: 'button.tsx',
                        path: '/my-store/src/components/button.tsx',
                        relativePath: 'src/components/button.tsx',
                        type: 'file',
                      },
                      {
                        id: 'src/components/card.tsx',
                        name: 'card.tsx',
                        path: '/my-store/src/components/card.tsx',
                        relativePath: 'src/components/card.tsx',
                        type: 'file',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'package.json',
                name: 'package.json',
                path: '/my-store/package.json',
                relativePath: 'package.json',
                type: 'file',
              },
              {
                id: 'tailwind.config.ts',
                name: 'tailwind.config.ts',
                path: '/my-store/tailwind.config.ts',
                relativePath: 'tailwind.config.ts',
                type: 'file',
              },
            ],
          },
        },
      };
      function H() {
        let [e, t] = (0, Y.useState)('monorepo'),
          [n, s] = (0, Y.useState)('vscode'),
          [a, o] = (0, Y.useState)('vscode'),
          [i, c] = (0, Y.useState)('tree'),
          [l, d] = (0, Y.useState)(!0),
          [p, m] = (0, Y.useState)(!1),
          h = G[e].tree,
          u = (0, Y.useMemo)(() => {
            if ('tree' !== i) {
              let e = new y();
              try {
                let t = e.export(h, i);
                return String(t.content);
              } catch (e) {
                return 'Error exporting format';
              }
            }
            let e = new S(),
              t = new C(a);
            return e.render(h, n, { iconResolver: t, showSize: l });
          }, [h, n, a, i, l]);
        return (0, r.jsxs)('section', {
          id: 'playground',
          className: 'py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
          children: [
            (0, r.jsxs)('div', {
              className: 'flex flex-col items-center text-center space-y-4 mb-10',
              children: [
                (0, r.jsxs)('div', {
                  className:
                    'inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold',
                  children: [
                    (0, r.jsx)(L.Z, { className: 'h-3.5 w-3.5' }),
                    ' Live Interactive Playground',
                  ],
                }),
                (0, r.jsx)('h2', {
                  className: 'text-3xl sm:text-5xl font-extrabold tracking-tight',
                  children: 'Test RepoAtlas Engine Live',
                }),
                (0, r.jsx)('p', {
                  className: 'text-muted-foreground text-sm sm:text-base max-w-xl',
                  children:
                    'Change themes, icon packs, exporters, and view instant live rendering updates powered by the core TypeScript engine.',
                }),
              ],
            }),
            (0, r.jsxs)('div', {
              className: 'grid grid-cols-1 lg:grid-cols-4 gap-6 items-start',
              children: [
                (0, r.jsxs)('div', {
                  className:
                    'lg:col-span-1 border border-border/80 bg-card/80 p-5 rounded-2xl space-y-6 shadow-xl backdrop-blur-xl',
                  children: [
                    (0, r.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, r.jsxs)('label', {
                          className:
                            'text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5',
                          children: [
                            (0, r.jsx)(Z.Z, { className: 'h-3.5 w-3.5 text-blue-500' }),
                            ' Preset Repository',
                          ],
                        }),
                        (0, r.jsxs)('select', {
                          value: e,
                          onChange: (e) => t(e.target.value),
                          className:
                            'w-full px-3 py-2 rounded-lg border border-border bg-muted/40 font-medium text-xs focus:outline-none focus:ring-2 focus:ring-primary',
                          children: [
                            (0, r.jsx)('option', {
                              value: 'monorepo',
                              children: 'RepoAtlas Monorepo',
                            }),
                            (0, r.jsx)('option', { value: 'nextjs', children: 'Next.js 14 App' }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, r.jsxs)('label', {
                          className:
                            'text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5',
                          children: [
                            (0, r.jsx)(O.Z, { className: 'h-3.5 w-3.5 text-purple-500' }),
                            ' Theme Preset',
                          ],
                        }),
                        (0, r.jsxs)('select', {
                          value: n,
                          onChange: (e) => s(e.target.value),
                          className:
                            'w-full px-3 py-2 rounded-lg border border-border bg-muted/40 font-medium text-xs focus:outline-none focus:ring-2 focus:ring-primary',
                          children: [
                            (0, r.jsx)('option', { value: 'vscode', children: 'VSCode Theme' }),
                            (0, r.jsx)('option', { value: 'material', children: 'Material Theme' }),
                            (0, r.jsx)('option', { value: 'unicode', children: 'Unicode Tree' }),
                            (0, r.jsx)('option', { value: 'nerd-font', children: 'Nerd Font' }),
                            (0, r.jsx)('option', { value: 'ascii', children: 'ASCII Plain' }),
                            (0, r.jsx)('option', { value: 'markdown', children: 'Markdown List' }),
                            (0, r.jsx)('option', { value: 'json', children: 'JSON Tree' }),
                            (0, r.jsx)('option', { value: 'mermaid', children: 'Mermaid Diagram' }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, r.jsxs)('label', {
                          className:
                            'text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5',
                          children: [
                            (0, r.jsx)(B.Z, { className: 'h-3.5 w-3.5 text-emerald-500' }),
                            ' Icon Pack',
                          ],
                        }),
                        (0, r.jsxs)('select', {
                          value: a,
                          onChange: (e) => o(e.target.value),
                          className:
                            'w-full px-3 py-2 rounded-lg border border-border bg-muted/40 font-medium text-xs focus:outline-none focus:ring-2 focus:ring-primary',
                          children: [
                            (0, r.jsx)('option', { value: 'vscode', children: 'VSCode Icons' }),
                            (0, r.jsx)('option', { value: 'emoji', children: 'Emoji Pack' }),
                            (0, r.jsx)('option', { value: 'material', children: 'Material Icons' }),
                            (0, r.jsx)('option', { value: 'nerd', children: 'Nerd Fonts' }),
                            (0, r.jsx)('option', { value: 'ascii', children: 'Plain / None' }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, r.jsxs)('label', {
                          className:
                            'text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5',
                          children: [
                            (0, r.jsx)(_.Z, { className: 'h-3.5 w-3.5 text-pink-500' }),
                            ' Mode / Exporter',
                          ],
                        }),
                        (0, r.jsxs)('select', {
                          value: i,
                          onChange: (e) => c(e.target.value),
                          className:
                            'w-full px-3 py-2 rounded-lg border border-border bg-muted/40 font-medium text-xs focus:outline-none focus:ring-2 focus:ring-primary',
                          children: [
                            (0, r.jsx)('option', { value: 'tree', children: 'Live Rendered Tree' }),
                            (0, r.jsx)('option', { value: 'md', children: 'Markdown (.md)' }),
                            (0, r.jsx)('option', {
                              value: 'mermaid',
                              children: 'Mermaid Flowchart',
                            }),
                            (0, r.jsx)('option', { value: 'json', children: 'Raw JSON Data' }),
                            (0, r.jsx)('option', { value: 'yaml', children: 'YAML Spec' }),
                            (0, r.jsx)('option', { value: 'html', children: 'HTML Output' }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsx)('div', {
                      className: 'pt-2 border-t border-border/40 space-y-3',
                      children: (0, r.jsxs)('label', {
                        className:
                          'flex items-center justify-between text-xs text-muted-foreground cursor-pointer',
                        children: [
                          (0, r.jsx)('span', { children: 'Display File Sizes' }),
                          (0, r.jsx)('input', {
                            type: 'checkbox',
                            checked: l,
                            onChange: (e) => d(e.target.checked),
                            className:
                              'h-4 w-4 rounded border-border text-primary focus:ring-primary',
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, r.jsxs)('div', {
                  className:
                    'lg:col-span-3 border border-border/80 bg-card/90 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col min-h-[450px]',
                  children: [
                    (0, r.jsxs)('div', {
                      className:
                        'flex items-center justify-between px-5 py-3 border-b border-border/60 bg-muted/30',
                      children: [
                        (0, r.jsxs)('div', {
                          className:
                            'flex items-center gap-3 font-mono text-xs text-muted-foreground',
                          children: [
                            (0, r.jsxs)('span', {
                              className: 'font-semibold text-foreground flex items-center gap-1.5',
                              children: [
                                (0, r.jsx)(U.Z, {
                                  className: 'h-3.5 w-3.5 text-blue-500 animate-spin',
                                }),
                                'Live Preview',
                              ],
                            }),
                            (0, r.jsx)('span', { children: '•' }),
                            (0, r.jsx)('span', {
                              className: 'text-purple-400 font-medium',
                              children: G[e].name,
                            }),
                          ],
                        }),
                        (0, r.jsxs)('div', {
                          className: 'flex items-center gap-2',
                          children: [
                            (0, r.jsxs)('button', {
                              onClick: () => {
                                (navigator.clipboard.writeText(u),
                                  m(!0),
                                  (0, M.Z)({ particleCount: 50, spread: 60, origin: { y: 0.8 } }),
                                  setTimeout(() => m(!1), 2e3));
                              },
                              className:
                                'flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-muted/50 hover:bg-muted font-medium text-xs transition-colors',
                              children: [
                                p
                                  ? (0, r.jsx)(z.Z, { className: 'h-3.5 w-3.5 text-green-500' })
                                  : (0, r.jsx)(J.Z, { className: 'h-3.5 w-3.5' }),
                                (0, r.jsx)('span', { children: p ? 'Copied!' : 'Copy' }),
                              ],
                            }),
                            (0, r.jsxs)('button', {
                              onClick: () => {
                                let e = document.createElement('a'),
                                  t = new Blob([u], { type: 'text/plain' });
                                ((e.href = URL.createObjectURL(t)),
                                  (e.download = 'PROJECT_STRUCTURE.'.concat(
                                    'tree' === i ? 'txt' : i
                                  )),
                                  document.body.appendChild(e),
                                  e.click(),
                                  document.body.removeChild(e));
                              },
                              className:
                                'flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-medium text-xs shadow-sm hover:opacity-90 transition-opacity',
                              children: [
                                (0, r.jsx)(V.Z, { className: 'h-3.5 w-3.5' }),
                                (0, r.jsx)('span', { children: 'Export' }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsx)('div', {
                      className:
                        'p-6 font-mono text-xs sm:text-sm bg-black/90 text-neutral-100 flex-1 overflow-x-auto selection:bg-purple-500/30',
                      children: (0, r.jsx)('pre', {
                        className: 'leading-relaxed whitespace-pre font-mono',
                        children: u,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
