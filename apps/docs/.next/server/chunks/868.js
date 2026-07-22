'use strict';
((exports.id = 868),
  (exports.ids = [868]),
  (exports.modules = {
    626: (e, t, r) => {
      r.d(t, { LivePlayground: () => Y });
      var s = r(2064),
        n = class {
          export(e) {
            let t = ['"Path","Name","Type","SizeBytes","ModifiedAt"'];
            function r(e) {
              return e.replace(/"/g, '""');
            }
            return (
              (function e(s) {
                let n = 0;
                n =
                  'file' === s.type
                    ? (s.metadata?.sizeBytes ?? 0)
                    : (s.metadata?.totalSizeBytes ?? 0);
                let i = s.metadata?.modifiedAt ?? '';
                if (
                  (t.push(`"${r(s.relativePath)}","${r(s.name)}","${s.type}",${n},"${r(i)}"`),
                  s.children)
                )
                  for (let t = 0; t < s.children.length; t++) {
                    let r = s.children[t];
                    r && e(r);
                  }
              })(e),
              {
                format: this.name,
                fileExtension: this.fileExtension,
                mimeType: this.mimeType,
                content: t.join('\n'),
                filename: `${e.name}-tree.csv`,
              }
            );
          }
          constructor() {
            ((this.name = 'csv'), (this.fileExtension = 'csv'), (this.mimeType = 'text/csv'));
          }
        },
        i = class {
          export(e) {
            return {
              format: this.name,
              fileExtension: this.fileExtension,
              mimeType: this.mimeType,
              content: Buffer.from(`DOCX Document for ${e.name}`),
              filename: `${e.name}-tree.docx`,
            };
          }
          constructor() {
            ((this.name = 'docx'),
              (this.fileExtension = 'docx'),
              (this.mimeType =
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document'));
          }
        },
        a = class {
          export(e) {
            let t = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>${e.name} - Project Structure</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 2rem; }
    ul { list-style: none; padding-left: 1.5rem; }
    .folder { font-weight: bold; color: #38bdf8; }
    .file { color: #cbd5e1; }
  </style>
</head>
<body>
  <h1>\u{1F5FA}\uFE0F RepoAtlas Structure: ${e.name}</h1>
  <ul>${(function e(t) {
    let r = 'directory' === t.type,
      s = `<li class="${r ? 'folder' : 'file'}"><span>${r ? '\uD83D\uDCC1' : '\uD83D\uDCC4'} ${t.name}</span>`;
    if (t.children && t.children.length > 0) {
      for (let r of ((s += '<ul>'), t.children)) s += e(r);
      s += '</ul>';
    }
    return s + '</li>';
  })(e)}</ul>
</body>
</html>`;
            return {
              format: this.name,
              fileExtension: this.fileExtension,
              mimeType: this.mimeType,
              content: t,
              filename: `${e.name}-tree.html`,
            };
          }
          constructor() {
            ((this.name = 'html'), (this.fileExtension = 'html'), (this.mimeType = 'text/html'));
          }
        },
        o = class {
          export(e) {
            return {
              format: this.name,
              fileExtension: this.fileExtension,
              mimeType: this.mimeType,
              content: JSON.stringify(e, null, 2),
              filename: `${e.name}-tree.json`,
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
            let t = `# Project Structure: ${e.name}

\`\`\`
${(function e(t, r = 0) {
  let s = '  '.repeat(r),
    n = 'directory' === t.type ? '\uD83D\uDCC1' : '\uD83D\uDCC4',
    i = `${s}- ${n} **${t.name}**
`;
  if (t.children) for (let s of t.children) i += e(s, r + 1);
  return i;
})(e)}\`\`\`
`;
            return {
              format: this.name,
              fileExtension: this.fileExtension,
              mimeType: this.mimeType,
              content: t,
              filename: `${e.name}-structure.md`,
            };
          }
          constructor() {
            ((this.name = 'md'), (this.fileExtension = 'md'), (this.mimeType = 'text/markdown'));
          }
        },
        c = class {
          export(e) {
            let t = ['graph TD'],
              r = 0;
            return (
              (function e(s, n) {
                let i = `node_${r++}`,
                  a =
                    'directory' === s.type ? `["\u{1F4C1} ${s.name}"]` : `["\u{1F4C4} ${s.name}"]`;
                if ((t.push(`  ${i}${a}`), n && t.push(`  ${n} --> ${i}`), s.children))
                  for (let t of s.children) e(t, i);
                return i;
              })(e),
              {
                format: this.name,
                fileExtension: this.fileExtension,
                mimeType: this.mimeType,
                content: t.join('\n'),
                filename: `${e.name}-diagram.mermaid`,
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
              content: Buffer.from(`%PDF-1.4 PDF Document for ${e.name}`),
              filename: `${e.name}-tree.pdf`,
            };
          }
          constructor() {
            ((this.name = 'pdf'),
              (this.fileExtension = 'pdf'),
              (this.mimeType = 'application/pdf'));
          }
        },
        d = class {
          export(e) {
            let t = ['@startuml', `package "${e.name}" {`];
            return (
              (function e(r, s = '  ') {
                if (r.children)
                  for (let n of r.children)
                    'directory' === n.type
                      ? (t.push(`${s}folder "${n.name}" {`), e(n, `${s}  `), t.push(`${s}}`))
                      : t.push(`${s}[${n.name}]`);
              })(e),
              t.push('}', '@enduml'),
              {
                format: this.name,
                fileExtension: this.fileExtension,
                mimeType: this.mimeType,
                content: t.join('\n'),
                filename: `${e.name}-structure.puml`,
              }
            );
          }
          constructor() {
            ((this.name = 'plantuml'),
              (this.fileExtension = 'puml'),
              (this.mimeType = 'text/plain'));
          }
        },
        m = class {
          export(e) {
            return {
              format: this.name,
              fileExtension: this.fileExtension,
              mimeType: this.mimeType,
              content: Buffer.from(`PNG Image for ${e.name}`),
              filename: `${e.name}-tree.png`,
            };
          }
          constructor() {
            ((this.name = 'png'), (this.fileExtension = 'png'), (this.mimeType = 'image/png'));
          }
        },
        h = class {
          export(e) {
            let t = 30,
              r = [];
            !(function e(s, n) {
              let i = 'directory' === s.type ? '\uD83D\uDCC1' : '\uD83D\uDCC4';
              if (
                (r.push(
                  `<text x="${n}" y="${t}" fill="#e2e8f0" font-family="monospace" font-size="14">${i} ${s.name}</text>`
                ),
                (t += 24),
                s.children)
              )
                for (let t of s.children) e(t, n + 20);
            })(e, 20);
            let s = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="${t + 20}" style="background:#0f172a;">
${r.join('\n')}
</svg>`;
            return {
              format: this.name,
              fileExtension: this.fileExtension,
              mimeType: this.mimeType,
              content: s,
              filename: `${e.name}-tree.svg`,
            };
          }
          constructor() {
            ((this.name = 'svg'), (this.fileExtension = 'svg'), (this.mimeType = 'image/svg+xml'));
          }
        },
        u = class {
          export(e) {
            return {
              format: this.name,
              fileExtension: this.fileExtension,
              mimeType: this.mimeType,
              content: (function e(t, r = '') {
                let s = `${r}${t.name}
`;
                if (t.children) for (let n of t.children) s += e(n, `${r}  `);
                return s;
              })(e),
              filename: `${e.name}-tree.txt`,
            };
          }
          constructor() {
            ((this.name = 'txt'), (this.fileExtension = 'txt'), (this.mimeType = 'text/plain'));
          }
        },
        x = class {
          export(e) {
            let t = `<?xml version="1.0" encoding="UTF-8"?>
<tree>
${(function e(t, r = '  ') {
  let s = 'directory' === t.type ? 'directory' : 'file',
    n = `${r}<${s} name="${t.name}">
`;
  if (t.children) for (let s of t.children) n += e(s, `${r}  `);
  return (
    n +
    `${r}</${s}>
`
  );
})(e)}</tree>`;
            return {
              format: this.name,
              fileExtension: this.fileExtension,
              mimeType: this.mimeType,
              content: t,
              filename: `${e.name}-tree.xml`,
            };
          }
          constructor() {
            ((this.name = 'xml'),
              (this.fileExtension = 'xml'),
              (this.mimeType = 'application/xml'));
          }
        },
        f = class {
          export(e) {
            return {
              format: this.name,
              fileExtension: this.fileExtension,
              mimeType: this.mimeType,
              content: (function e(t, r = '') {
                let s = `${r}- name: "${t.name}"
${r}  type: "${t.type}"
`;
                if (t.children && t.children.length > 0)
                  for (let n of ((s += `${r}  children:
`),
                  t.children))
                    s += e(n, `${r}    `);
                return s;
              })(e),
              filename: `${e.name}-tree.yaml`,
            };
          }
          constructor() {
            ((this.name = 'yaml'), (this.fileExtension = 'yaml'), (this.mimeType = 'text/yaml'));
          }
        },
        g = class {
          constructor() {
            ((this.plugins = new Map()),
              this.register(new u()),
              this.register(new l()),
              this.register(new a()),
              this.register(new o()),
              this.register(new f()),
              this.register(new x()),
              this.register(new n()),
              this.register(new i()),
              this.register(new p()),
              this.register(new h()),
              this.register(new m()),
              this.register(new c()),
              this.register(new d()));
          }
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
            let r = 'string' == typeof t ? t : (t?.format ?? 'txt'),
              s = this.get(r);
            if (!s)
              throw Error(
                `Unsupported exporter format '${r}'. Available formats: ${this.list().join(', ')}`
              );
            return s.export(e);
          }
        },
        y = r(5315),
        v = {
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
        D = {
          folder: '\uD83D\uDCC1',
          file: '\uD83D\uDCC4',
          ts: '',
          js: '',
          json: '',
          md: '',
          html: '',
        },
        j = {
          folder: '\uD83D\uDCC1',
          file: '\uD83D\uDCC4',
          ts: '\uDB81\uDEE6',
          js: '\uDB80\uDF1E',
          json: '\uDB81\uDE26',
          md: '\uDB80\uDF54',
        },
        $ = { folder: '\uD83D\uDCC1', file: '\uD83D\uDCC4', ts: '', js: '' },
        b = class {
          constructor(e) {
            'string' == typeof e
              ? (this.pack = e)
              : ((this.pack = e?.pack ?? 'emoji'), (this.customIcons = e?.customIcons?.extensions));
          }
          getFolderIcon(e = !1) {
            switch (this.pack) {
              case 'vscode':
                return D.folder || '\uD83D\uDCC1';
              case 'material':
                return j.folder || '\uD83D\uDCC1';
              case 'nerd':
                return $.folder || '\uD83D\uDCC1';
              case 'plain':
              case 'ascii':
                return '';
              default:
                return e ? v.folderOpen || '\uD83D\uDCC2' : v.folder || '\uD83D\uDCC1';
            }
          }
          getFileIcon(e) {
            let t, r;
            let s = (function (e) {
              let t = y.extname(e);
              return t ? t.substring(1).toLowerCase() : '';
            })(e).toLowerCase();
            if (this.customIcons && this.customIcons[s]) return this.customIcons[s];
            switch (this.pack) {
              case 'vscode':
                ((t = D), (r = D.file || '\uD83D\uDCC4'));
                break;
              case 'material':
                ((t = j), (r = j.file || '\uD83D\uDCC4'));
                break;
              case 'nerd':
                ((t = $), (r = $.file || '\uD83D\uDCC4'));
                break;
              default:
                ((t = v), (r = v.file || '\uD83D\uDCC4'));
            }
            return t[e] || t[s] || r || '';
          }
          resolveFile(e) {
            return this.getFileIcon(e);
          }
        },
        w = class {
          render(e, t = {}) {
            let r = t.iconResolver ?? new b(t.icons ?? 'unicode'),
              s = t.useColor ?? !1,
              n = t.showSize ?? !1;
            return this.renderNode(
              e,
              '',
              !0,
              { iconResolver: r, useColor: s, showSize: n, maxDepth: t.maxDepth ?? 1 / 0 },
              0
            );
          }
        },
        C = class extends w {
          renderNode(e, t, r, s, n) {
            let i = s.iconResolver.getFileIcon(e.name),
              a = `${t}${r ? '`-- ' : '|-- '}${i ? `${i} ` : ''}${e.name}
`;
            if (e.children && n < s.maxDepth) {
              let i = t + (r ? '    ' : '|   ');
              for (let t = 0; t < e.children.length; t++) {
                let r = e.children[t];
                r && (a += this.renderNode(r, i, t === e.children.length - 1, s, n + 1));
              }
            }
            return a;
          }
          constructor(...e) {
            (super(...e), (this.name = 'ascii'));
          }
        },
        k = class extends w {
          render(e) {
            return JSON.stringify(e, null, 2);
          }
          renderNode(e, t, r, s, n) {
            return '';
          }
          constructor(...e) {
            (super(...e), (this.name = 'json'));
          }
        },
        N = class extends w {
          renderNode(e, t, r, s, n) {
            let i = '  '.repeat(n),
              a = s.iconResolver.getFileIcon(e.name),
              o = `${i}- ${a ? `${a} ` : ''}**${e.name}**
`;
            if (e.children && n < s.maxDepth)
              for (let r = 0; r < e.children.length; r++) {
                let i = e.children[r];
                i && (o += this.renderNode(i, t, r === e.children.length - 1, s, n + 1));
              }
            return o;
          }
          constructor(...e) {
            (super(...e), (this.name = 'markdown'));
          }
        },
        E = class extends w {
          renderNode(e, t, r, s, n) {
            let i = 'directory' === e.type,
              a = new b('material'),
              o = i ? a.getFolderIcon() : a.getFileIcon(e.name),
              l = `${t}${r ? '└── ' : '├── '}${o ? `${o} ` : ''}${e.name}
`;
            if (e.children && n < s.maxDepth) {
              let i = t + (r ? '    ' : '│   ');
              for (let t = 0; t < e.children.length; t++) {
                let r = e.children[t];
                r && (l += this.renderNode(r, i, t === e.children.length - 1, s, n + 1));
              }
            }
            return l;
          }
          constructor(...e) {
            (super(...e), (this.name = 'material'));
          }
        },
        T = class extends w {
          render(e) {
            let t = 'graph TD\n';
            return (
              (function e(r) {
                if (r.children)
                  for (let s of r.children) {
                    let n = r.name.replace(/[^a-zA-Z0-9_]/g, '_'),
                      i = s.name.replace(/[^a-zA-Z0-9_]/g, '_');
                    ((t += `  ${n}["${r.name}"] --> ${i}["${s.name}"]
`),
                      e(s));
                  }
              })(e),
              t
            );
          }
          renderNode(e, t, r, s, n) {
            return '';
          }
          constructor(...e) {
            (super(...e), (this.name = 'mermaid'));
          }
        },
        P = class extends w {
          renderNode(e, t, r, s, n) {
            let i = 'directory' === e.type,
              a = new b('nerd'),
              o = i ? a.getFolderIcon() : a.getFileIcon(e.name),
              l = `${t}${r ? '└── ' : '├── '}${o ? `${o} ` : ''}${e.name}
`;
            if (e.children && n < s.maxDepth) {
              let i = t + (r ? '    ' : '│   ');
              for (let t = 0; t < e.children.length; t++) {
                let r = e.children[t];
                r && (l += this.renderNode(r, i, t === e.children.length - 1, s, n + 1));
              }
            }
            return l;
          }
          constructor(...e) {
            (super(...e), (this.name = 'nerd-font'));
          }
        },
        A = class extends w {
          renderNode(e, t, r, s, n) {
            let i =
                'directory' === e.type
                  ? s.iconResolver.getFolderIcon()
                  : s.iconResolver.getFileIcon(e.name),
              a = `${t}${r ? '└── ' : '├── '}${i ? `${i} ` : ''}${e.name}
`;
            if (e.children && n < s.maxDepth) {
              let i = t + (r ? '    ' : '│   ');
              for (let t = 0; t < e.children.length; t++) {
                let r = e.children[t];
                r && (a += this.renderNode(r, i, t === e.children.length - 1, s, n + 1));
              }
            }
            return a;
          }
          constructor(...e) {
            (super(...e), (this.name = 'unicode'));
          }
        },
        R = class extends w {
          renderNode(e, t, r, s, n) {
            let i = 'directory' === e.type,
              a = new b('vscode'),
              o = i ? a.getFolderIcon() : a.getFileIcon(e.name),
              l = `${t}${r ? '└─ ' : '├─ '}${o ? `${o} ` : ''}${e.name}
`;
            if (e.children && n < s.maxDepth) {
              let i = t + (r ? '   ' : '│  ');
              for (let t = 0; t < e.children.length; t++) {
                let r = e.children[t];
                r && (l += this.renderNode(r, i, t === e.children.length - 1, s, n + 1));
              }
            }
            return l;
          }
          constructor(...e) {
            (super(...e), (this.name = 'vscode'));
          }
        },
        F = class {
          constructor() {
            ((this.renderers = new Map()),
              this.register(new A()),
              this.register(new C()),
              this.register(new R()),
              this.register(new E()),
              this.register(new P()),
              this.register(new N()),
              this.register(new k()),
              this.register(new T()));
          }
          register(e) {
            this.renderers.set(e.name.toLowerCase(), e);
          }
          get(e) {
            return this.renderers.get(e.toLowerCase());
          }
          list() {
            return Array.from(this.renderers.keys());
          }
          render(e, t = 'unicode', r) {
            let s = this.get(t);
            if (!s)
              throw Error(
                `Unsupported theme renderer '${t}'. Available themes: ${this.list().join(', ')}`
              );
            return s.render(e, r);
          }
        },
        I = r(7231),
        S = r(5495),
        M = r(9420),
        L = r(3282),
        B = r(1373),
        Z = r(8761),
        O = r(2265),
        U = r(8932),
        z = r(2619),
        _ = r(4767),
        J = r(5032);
      let V = {
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
      function Y() {
        let [e, t] = (0, J.useState)('monorepo'),
          [r, n] = (0, J.useState)('vscode'),
          [i, a] = (0, J.useState)('vscode'),
          [o, l] = (0, J.useState)('tree'),
          [c, p] = (0, J.useState)(!0),
          [d, m] = (0, J.useState)(!1),
          h = V[e].tree,
          u = (0, J.useMemo)(() => {
            if ('tree' !== o) {
              let e = new g();
              try {
                let t = e.export(h, o);
                return String(t.content);
              } catch {
                return 'Error exporting format';
              }
            }
            let e = new F(),
              t = new b(i);
            return e.render(h, r, { iconResolver: t, showSize: c });
          }, [h, r, i, o, c]);
        return (0, s.jsxs)('section', {
          id: 'playground',
          className: 'py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
          children: [
            (0, s.jsxs)('div', {
              className: 'flex flex-col items-center text-center space-y-4 mb-10',
              children: [
                (0, s.jsxs)('div', {
                  className:
                    'inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold',
                  children: [
                    s.jsx(S.Z, { className: 'h-3.5 w-3.5' }),
                    ' Live Interactive Playground',
                  ],
                }),
                s.jsx('h2', {
                  className: 'text-3xl sm:text-5xl font-extrabold tracking-tight',
                  children: 'Test RepoAtlas Engine Live',
                }),
                s.jsx('p', {
                  className: 'text-muted-foreground text-sm sm:text-base max-w-xl',
                  children:
                    'Change themes, icon packs, exporters, and view instant live rendering updates powered by the core TypeScript engine.',
                }),
              ],
            }),
            (0, s.jsxs)('div', {
              className: 'grid grid-cols-1 lg:grid-cols-4 gap-6 items-start',
              children: [
                (0, s.jsxs)('div', {
                  className:
                    'lg:col-span-1 border border-border/80 bg-card/80 p-5 rounded-2xl space-y-6 shadow-xl backdrop-blur-xl',
                  children: [
                    (0, s.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, s.jsxs)('label', {
                          className:
                            'text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5',
                          children: [
                            s.jsx(M.Z, { className: 'h-3.5 w-3.5 text-blue-500' }),
                            ' Preset Repository',
                          ],
                        }),
                        (0, s.jsxs)('select', {
                          value: e,
                          onChange: (e) => t(e.target.value),
                          className:
                            'w-full px-3 py-2 rounded-lg border border-border bg-muted/40 font-medium text-xs focus:outline-none focus:ring-2 focus:ring-primary',
                          children: [
                            s.jsx('option', { value: 'monorepo', children: 'RepoAtlas Monorepo' }),
                            s.jsx('option', { value: 'nextjs', children: 'Next.js 14 App' }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, s.jsxs)('label', {
                          className:
                            'text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5',
                          children: [
                            s.jsx(L.Z, { className: 'h-3.5 w-3.5 text-purple-500' }),
                            ' Theme Preset',
                          ],
                        }),
                        (0, s.jsxs)('select', {
                          value: r,
                          onChange: (e) => n(e.target.value),
                          className:
                            'w-full px-3 py-2 rounded-lg border border-border bg-muted/40 font-medium text-xs focus:outline-none focus:ring-2 focus:ring-primary',
                          children: [
                            s.jsx('option', { value: 'vscode', children: 'VSCode Theme' }),
                            s.jsx('option', { value: 'material', children: 'Material Theme' }),
                            s.jsx('option', { value: 'unicode', children: 'Unicode Tree' }),
                            s.jsx('option', { value: 'nerd-font', children: 'Nerd Font' }),
                            s.jsx('option', { value: 'ascii', children: 'ASCII Plain' }),
                            s.jsx('option', { value: 'markdown', children: 'Markdown List' }),
                            s.jsx('option', { value: 'json', children: 'JSON Tree' }),
                            s.jsx('option', { value: 'mermaid', children: 'Mermaid Diagram' }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, s.jsxs)('label', {
                          className:
                            'text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5',
                          children: [
                            s.jsx(B.Z, { className: 'h-3.5 w-3.5 text-emerald-500' }),
                            ' Icon Pack',
                          ],
                        }),
                        (0, s.jsxs)('select', {
                          value: i,
                          onChange: (e) => a(e.target.value),
                          className:
                            'w-full px-3 py-2 rounded-lg border border-border bg-muted/40 font-medium text-xs focus:outline-none focus:ring-2 focus:ring-primary',
                          children: [
                            s.jsx('option', { value: 'vscode', children: 'VSCode Icons' }),
                            s.jsx('option', { value: 'emoji', children: 'Emoji Pack' }),
                            s.jsx('option', { value: 'material', children: 'Material Icons' }),
                            s.jsx('option', { value: 'nerd', children: 'Nerd Fonts' }),
                            s.jsx('option', { value: 'ascii', children: 'Plain / None' }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, s.jsxs)('label', {
                          className:
                            'text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5',
                          children: [
                            s.jsx(Z.Z, { className: 'h-3.5 w-3.5 text-pink-500' }),
                            ' Mode / Exporter',
                          ],
                        }),
                        (0, s.jsxs)('select', {
                          value: o,
                          onChange: (e) => l(e.target.value),
                          className:
                            'w-full px-3 py-2 rounded-lg border border-border bg-muted/40 font-medium text-xs focus:outline-none focus:ring-2 focus:ring-primary',
                          children: [
                            s.jsx('option', { value: 'tree', children: 'Live Rendered Tree' }),
                            s.jsx('option', { value: 'md', children: 'Markdown (.md)' }),
                            s.jsx('option', { value: 'mermaid', children: 'Mermaid Flowchart' }),
                            s.jsx('option', { value: 'json', children: 'Raw JSON Data' }),
                            s.jsx('option', { value: 'yaml', children: 'YAML Spec' }),
                            s.jsx('option', { value: 'html', children: 'HTML Output' }),
                          ],
                        }),
                      ],
                    }),
                    s.jsx('div', {
                      className: 'pt-2 border-t border-border/40 space-y-3',
                      children: (0, s.jsxs)('label', {
                        className:
                          'flex items-center justify-between text-xs text-muted-foreground cursor-pointer',
                        children: [
                          s.jsx('span', { children: 'Display File Sizes' }),
                          s.jsx('input', {
                            type: 'checkbox',
                            checked: c,
                            onChange: (e) => p(e.target.checked),
                            className:
                              'h-4 w-4 rounded border-border text-primary focus:ring-primary',
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)('div', {
                  className:
                    'lg:col-span-3 border border-border/80 bg-card/90 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col min-h-[450px]',
                  children: [
                    (0, s.jsxs)('div', {
                      className:
                        'flex items-center justify-between px-5 py-3 border-b border-border/60 bg-muted/30',
                      children: [
                        (0, s.jsxs)('div', {
                          className:
                            'flex items-center gap-3 font-mono text-xs text-muted-foreground',
                          children: [
                            (0, s.jsxs)('span', {
                              className: 'font-semibold text-foreground flex items-center gap-1.5',
                              children: [
                                s.jsx(O.Z, { className: 'h-3.5 w-3.5 text-blue-500 animate-spin' }),
                                'Live Preview',
                              ],
                            }),
                            s.jsx('span', { children: '•' }),
                            s.jsx('span', {
                              className: 'text-purple-400 font-medium',
                              children: V[e].name,
                            }),
                          ],
                        }),
                        (0, s.jsxs)('div', {
                          className: 'flex items-center gap-2',
                          children: [
                            (0, s.jsxs)('button', {
                              onClick: () => {
                                (navigator.clipboard.writeText(u),
                                  m(!0),
                                  (0, I.Z)({ particleCount: 50, spread: 60, origin: { y: 0.8 } }),
                                  setTimeout(() => m(!1), 2e3));
                              },
                              className:
                                'flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-muted/50 hover:bg-muted font-medium text-xs transition-colors',
                              children: [
                                d
                                  ? s.jsx(U.Z, { className: 'h-3.5 w-3.5 text-green-500' })
                                  : s.jsx(z.Z, { className: 'h-3.5 w-3.5' }),
                                s.jsx('span', { children: d ? 'Copied!' : 'Copy' }),
                              ],
                            }),
                            (0, s.jsxs)('button', {
                              onClick: () => {
                                let e = document.createElement('a'),
                                  t = new Blob([u], { type: 'text/plain' });
                                ((e.href = URL.createObjectURL(t)),
                                  (e.download = `PROJECT_STRUCTURE.${'tree' === o ? 'txt' : o}`),
                                  document.body.appendChild(e),
                                  e.click(),
                                  document.body.removeChild(e));
                              },
                              className:
                                'flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-medium text-xs shadow-sm hover:opacity-90 transition-opacity',
                              children: [
                                s.jsx(_.Z, { className: 'h-3.5 w-3.5' }),
                                s.jsx('span', { children: 'Export' }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsx('div', {
                      className:
                        'p-6 font-mono text-xs sm:text-sm bg-black/90 text-neutral-100 flex-1 overflow-x-auto selection:bg-purple-500/30',
                      children: s.jsx('pre', {
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
    8036: (e, t, r) => {
      r.d(t, { m: () => s });
      let s = (0, r(1924).createProxy)(
        String.raw`D:\pro\repo-atlas\apps\docs\src\components\live-playground.tsx#LivePlayground`
      );
    },
  }));
