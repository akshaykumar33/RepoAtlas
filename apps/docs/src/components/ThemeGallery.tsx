import React from 'react';

export function ThemeGallery(): React.JSX.Element {
  const themes = [
    {
      name: 'Unicode',
      desc: 'Box drawing connectors with emoji glyphs',
      preview: `📂 repo-atlas
├── 📁 apps
│   └── 📁 cli
└── 📁 packages
    └── 📘 core`,
    },
    {
      name: 'ASCII',
      desc: 'Standard ASCII character connectors',
      preview: `[D] repo-atlas
|-- [D] apps
|   \`-- [D] cli
\`-- [D] packages
    \`-- [F] core`,
    },
    {
      name: 'VSCode',
      desc: 'VSCode Explorer style connectors with dev icons',
      preview: `📂 repo-atlas
├── 📁 apps
│   └── ⚙️ cli
└── 📁 packages
    └── ⚡ core`,
    },
    {
      name: 'Material Theme',
      desc: 'Material icon mapping with vibrant color highlights',
      preview: `📁 repo-atlas
├─ 📁 apps
│  └─ 📁 cli
└─ 📁 packages
   └─ 📄 index.ts`,
    },
  ];

  return (
    <div className="card-ui mb-8">
      <h3 style={{ color: '#38bdf8', marginBottom: '1rem' }}>🎨 Theme Gallery</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {themes.map((t) => (
          <div
            key={t.name}
            style={{
              background: '#090d16',
              border: '1px solid #1e293b',
              borderRadius: '8px',
              padding: '1rem',
            }}
          >
            <h4 style={{ color: '#f8fafc', margin: '0 0 0.25rem 0' }}>{t.name}</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
              {t.desc}
            </p>
            <pre
              style={{ margin: 0, padding: '0.75rem', background: '#111827', fontSize: '0.85rem' }}
            >
              <code>{t.preview}</code>
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
