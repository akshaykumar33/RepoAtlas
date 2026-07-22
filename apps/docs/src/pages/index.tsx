import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Developer Platform for Repository Structure Visualization"
      description="RepoAtlas transforms any repository into beautiful, configurable, documentation-ready, AI-friendly project structures."
    >
      <main
        style={{ backgroundColor: '#090d16', color: '#f8fafc', minHeight: 'calc(100vh - 60px)' }}
      >
        {/* HERO SECTION */}
        <section
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '5rem 1.5rem 3rem',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              padding: '0.35rem 1rem',
              background: '#1e293b',
              border: '1px solid #334155',
              borderRadius: '20px',
              fontSize: '0.85rem',
              color: '#38bdf8',
              marginBottom: '1.5rem',
            }}
          >
            🚀 Open-Source Developer Platform • Standard for Repo Visualization
          </div>

          <h1
            style={{
              fontSize: '3.5rem',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '1.25rem',
              background: 'linear-gradient(135deg, #ffffff 30%, #94a3b8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Transform Any Repository Into <br />
            <span style={{ color: '#38bdf8', WebkitTextFillColor: '#38bdf8' }}>
              Beautiful Visual Structures
            </span>
          </h1>

          <p
            style={{
              fontSize: '1.25rem',
              color: '#94a3b8',
              maxWidth: '750px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.6,
            }}
          >
            Multi-theme CLI, Node SDK, Docusaurus portal, VSCode extension, and 13 export plugins
            designed for documentation, architecture summaries, and AI context compression.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '3.5rem',
            }}
          >
            <Link to="/docs/quick-start" className="btn-primary-ui">
              Get Started →
            </Link>
            <Link to="/tools" className="btn-secondary-ui">
              ⚡ Open Interactive Studio
            </Link>
          </div>

          {/* CODE TERMINAL SNIPPET */}
          <div
            style={{
              maxWidth: '720px',
              margin: '0 auto',
              textWrap: 'nowrap',
              textAlign: 'left',
              background: '#0f172a',
              border: '1px solid #1e293b',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            }}
          >
            <div
              style={{
                background: '#1e293b',
                padding: '0.65rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#ef4444',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#eab308',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  display: 'inline-block',
                }}
              />
              <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: '#94a3b8' }}>bash</span>
            </div>
            <pre
              style={{
                margin: 0,
                padding: '1.25rem',
                background: '#090d16',
                color: '#38bdf8',
                fontSize: '0.95rem',
              }}
            >
              <code>
                {`$ npx @repo-atlas/cli generate --theme vscode --icons vscode

📂 repo-atlas
├── 📁 apps
│   ├── 📁 cli
│   └── 📁 docs
├── 📁 packages
│   ├── ⚡ core
│   ├── 🎨 renderers
│   └── 📦 exporters
└── 📖 README.md`}
              </code>
            </pre>
          </div>
        </section>

        {/* FEATURE CARDS */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem' }}>
          <h2
            style={{
              textAlign: 'center',
              fontSize: '2rem',
              marginBottom: '2.5rem',
              color: '#f8fafc',
            }}
          >
            Built for Scale & Developer Experience
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            <div className="card-ui">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>🎨</div>
              <h3 style={{ color: '#f8fafc', marginBottom: '0.5rem' }}>Multi-Theme Renderer</h3>
              <p style={{ color: '#94a3b8', margin: 0 }}>
                Render identical tree models into ASCII, Unicode box drawing, VSCode Explorer,
                Material Theme, or Nerd Font glyphs.
              </p>
            </div>

            <div className="card-ui">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>📦</div>
              <h3 style={{ color: '#f8fafc', marginBottom: '0.5rem' }}>13 Export Plugins</h3>
              <p style={{ color: '#94a3b8', margin: 0 }}>
                Export trees into TXT, Markdown, HTML, JSON, YAML, XML, CSV, DOCX, PDF, SVG, PNG,
                Mermaid, and PlantUML diagrams.
              </p>
            </div>

            <div className="card-ui">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>🔍</div>
              <h3 style={{ color: '#f8fafc', marginBottom: '0.5rem' }}>Project Detector</h3>
              <p style={{ color: '#94a3b8', margin: 0 }}>
                Automatically detects Next.js, React, Vue, Express, NestJS, monorepo workspaces,
                package managers, and CI rules.
              </p>
            </div>

            <div className="card-ui">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>⚡</div>
              <h3 style={{ color: '#f8fafc', marginBottom: '0.5rem' }}>Streaming Performance</h3>
              <p style={{ color: '#94a3b8', margin: 0 }}>
                Async non-blocking filesystem engine capable of processing repositories with
                100,000+ files efficiently.
              </p>
            </div>

            <div className="card-ui">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>🔌</div>
              <h3 style={{ color: '#f8fafc', marginBottom: '0.5rem' }}>Pluggable Architecture</h3>
              <p style={{ color: '#94a3b8', margin: 0 }}>
                Follows Open/Closed Principle. Adding a new theme or export format requires creating
                only ONE new class.
              </p>
            </div>

            <div className="card-ui">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>💻</div>
              <h3 style={{ color: '#f8fafc', marginBottom: '0.5rem' }}>CLI & Live Watcher</h3>
              <p style={{ color: '#94a3b8', margin: 0 }}>
                Feature-rich CLI with Commander.js, interactive live watching mode, `doctor` checks,
                and visual command builder.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
