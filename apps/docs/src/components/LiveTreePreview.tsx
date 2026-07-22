import React, { useState } from 'react';

export function LiveTreePreview(): React.JSX.Element {
  const [theme, setTheme] = useState('unicode');

  const getTreeOutput = () => {
    if (theme === 'ascii') {
      return `[D] my-awesome-app
|-- [D] src
|   |-- [D] components
|   |   |-- [F] Button.tsx
|   |   \`-- [F] Navbar.tsx
|   \`-- [F] index.ts
|-- [F] package.json
\`-- [F] README.md`;
    }

    if (theme === 'vscode') {
      return `📂 my-awesome-app
├── 📁 src
│   ├── 📁 components
│   │   ├── ⚛️ Button.tsx
│   │   └── ⚛️ Navbar.tsx
│   └── 📘 index.ts
├── 📦 package.json
└── 📖 README.md`;
    }

    if (theme === 'markdown') {
      return `\`\`\`
my-awesome-app
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   └── Navbar.tsx
│   └── index.ts
├── package.json
└── README.md
\`\`\``;
    }

    // Default unicode
    return `📂 my-awesome-app
├── 📁 src
│   ├── 📁 components
│   │   ├── ⚛️ Button.tsx
│   │   └── ⚛️ Navbar.tsx
│   └── 📘 index.ts
├── 📦 package.json
└── 📖 README.md`;
  };

  return (
    <div className="card-ui mb-8">
      <div
        style={{
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        <h3 style={{ color: '#38bdf8', margin: 0 }}>🌳 Live Tree Sandbox</h3>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            className={`tool-tab-btn ${theme === 'unicode' ? 'active' : ''}`}
            onClick={() => setTheme('unicode')}
          >
            Unicode
          </button>
          <button
            className={`tool-tab-btn ${theme === 'ascii' ? 'active' : ''}`}
            onClick={() => setTheme('ascii')}
          >
            ASCII
          </button>
          <button
            className={`tool-tab-btn ${theme === 'vscode' ? 'active' : ''}`}
            onClick={() => setTheme('vscode')}
          >
            VSCode
          </button>
          <button
            className={`tool-tab-btn ${theme === 'markdown' ? 'active' : ''}`}
            onClick={() => setTheme('markdown')}
          >
            Markdown
          </button>
        </div>
      </div>

      <pre
        style={{
          background: '#090d16',
          color: '#38bdf8',
          padding: '1.25rem',
          borderRadius: '8px',
          margin: 0,
        }}
      >
        <code>{getTreeOutput()}</code>
      </pre>
    </div>
  );
}
