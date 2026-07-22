import React, { useState } from 'react';

export function ExportPreview(): React.JSX.Element {
  const [activeFormat, setActiveFormat] = useState('html');

  const previews: Record<string, string> = {
    html: `<!DOCTYPE html>
<html>
<head><title>RepoAtlas - my-app</title></head>
<body style="background: #0d1117; color: #58a6ff;">
  <h1>my-app</h1>
  <pre>📂 src\n├── 📘 index.ts</pre>
</body>
</html>`,
    json: `{
  "id": ".",
  "name": "my-app",
  "type": "directory",
  "children": [
    { "name": "src", "type": "directory" },
    { "name": "package.json", "type": "file" }
  ]
}`,
    mermaid: `graph TD
  n_1["my-app"]
  n_2["src"]
  n_3["package.json"]
  n_1 --> n_2
  n_1 --> n_3`,
    csv: `"Path","Name","Type","SizeBytes","ModifiedAt"
".","my-app","directory",3072,"2026-07-22"
"src","src","directory",1024,"2026-07-22"
"package.json","package.json","file",512,"2026-07-22"`,
    yaml: `name: "my-app"
type: "directory"
path: "."
children:
  - name: "src"
    type: "directory"
  - name: "package.json"
    type: "file"`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="200">
  <rect width="100%" height="100%" fill="#0d1117"/>
  <text x="20" y="40" fill="#58a6ff">📂 my-app</text>
</svg>`,
    plantuml: `@startuml
package "my-app" {
  package "src" {
    [index.ts]
  }
  [package.json]
}
@enduml`,
  };

  return (
    <div className="card-ui mb-8">
      <h3 style={{ color: '#38bdf8', marginBottom: '1rem' }}>📦 Export Previewer</h3>

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        {Object.keys(previews).map((fmt) => (
          <button
            key={fmt}
            className={`tool-tab-btn ${activeFormat === fmt ? 'active' : ''}`}
            onClick={() => setActiveFormat(fmt)}
          >
            {fmt.toUpperCase()}
          </button>
        ))}
      </div>

      <pre
        style={{
          background: '#090d16',
          color: '#38bdf8',
          padding: '1.25rem',
          borderRadius: '8px',
          margin: 0,
          overflowX: 'auto',
        }}
      >
        <code>{previews[activeFormat]}</code>
      </pre>
    </div>
  );
}
