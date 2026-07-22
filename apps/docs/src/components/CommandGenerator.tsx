import React, { useState } from 'react';

export function CommandGenerator(): React.JSX.Element {
  const [theme, setTheme] = useState('unicode');
  const [icons, setIcons] = useState('emoji');
  const [sort, setSort] = useState('name');
  const [only, setOnly] = useState('all');
  const [depth, setDepth] = useState('3');
  const [exclude, setExclude] = useState('dist, *.log');
  const [output, setOutput] = useState('');
  const [compact, setCompact] = useState(false);
  const [color, setColor] = useState(true);
  const [copied, setCopied] = useState(false);

  let command = 'repo-atlas generate';
  if (theme !== 'unicode') command += ` --theme ${theme}`;
  if (icons !== 'emoji') command += ` --icons ${icons}`;
  if (sort !== 'name') command += ` --sort ${sort}`;
  if (only !== 'all') command += ` --only ${only}`;
  if (depth && depth !== '0') command += ` --depth ${depth}`;
  if (exclude) command += ` --exclude "${exclude}"`;
  if (output) command += ` -o ${output}`;
  if (compact) command += ' --compact';
  if (color) command += ' --color';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card-ui mb-8">
      <h3 style={{ color: '#38bdf8', marginBottom: '1rem' }}>⚡ Command Builder</h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '1.5rem',
        }}
      >
        <div>
          <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.85rem' }}>
            Theme
          </label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              background: '#1e293b',
              color: '#fff',
              border: '1px solid #334155',
              borderRadius: '6px',
            }}
          >
            <option value="unicode">Unicode</option>
            <option value="ascii">ASCII</option>
            <option value="vscode">VSCode</option>
            <option value="material">Material</option>
            <option value="nerd-font">Nerd Font</option>
            <option value="markdown">Markdown</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.85rem' }}>
            Icons
          </label>
          <select
            value={icons}
            onChange={(e) => setIcons(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              background: '#1e293b',
              color: '#fff',
              border: '1px solid #334155',
              borderRadius: '6px',
            }}
          >
            <option value="emoji">Emoji</option>
            <option value="unicode">Unicode</option>
            <option value="plain">Plain</option>
            <option value="vscode">VSCode</option>
            <option value="material">Material</option>
            <option value="nerd">Nerd Font</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.85rem' }}>
            Sort By
          </label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              background: '#1e293b',
              color: '#fff',
              border: '1px solid #334155',
              borderRadius: '6px',
            }}
          >
            <option value="name">Name</option>
            <option value="size">Size</option>
            <option value="type">Type</option>
            <option value="date">Date</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.85rem' }}>
            Only
          </label>
          <select
            value={only}
            onChange={(e) => setOnly(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              background: '#1e293b',
              color: '#fff',
              border: '1px solid #334155',
              borderRadius: '6px',
            }}
          >
            <option value="all">All Nodes</option>
            <option value="directories">Directories Only</option>
            <option value="files">Files Only</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.85rem' }}>
            Depth Limit
          </label>
          <input
            type="number"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              background: '#1e293b',
              color: '#fff',
              border: '1px solid #334155',
              borderRadius: '6px',
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.85rem' }}>
            Exclude Patterns
          </label>
          <input
            type="text"
            value={exclude}
            onChange={(e) => setExclude(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              background: '#1e293b',
              color: '#fff',
              border: '1px solid #334155',
              borderRadius: '6px',
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.85rem' }}>
            Output File
          </label>
          <input
            type="text"
            placeholder="e.g. STRUCTURE.md"
            value={output}
            onChange={(e) => setOutput(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              background: '#1e293b',
              color: '#fff',
              border: '1px solid #334155',
              borderRadius: '6px',
            }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
          <input
            type="checkbox"
            id="compact"
            checked={compact}
            onChange={(e) => setCompact(e.target.checked)}
          />
          <label htmlFor="compact" style={{ fontSize: '0.85rem' }}>
            Compact Mode
          </label>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
          <input
            type="checkbox"
            id="color"
            checked={color}
            onChange={(e) => setColor(e.target.checked)}
          />
          <label htmlFor="color" style={{ fontSize: '0.85rem' }}>
            Colored Terminal
          </label>
        </div>
      </div>

      <div
        style={{
          background: '#090d16',
          padding: '1rem',
          borderRadius: '8px',
          border: '1px solid #1e293b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <code style={{ color: '#38bdf8', fontSize: '0.95rem' }}>{command}</code>
        <button onClick={copyToClipboard} className="tool-tab-btn" style={{ marginLeft: '1rem' }}>
          {copied ? '✓ Copied!' : 'Copy Command'}
        </button>
      </div>
    </div>
  );
}
