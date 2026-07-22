import React from 'react';
import Layout from '@theme/Layout';
import { CommandGenerator } from '../components/CommandGenerator';
import { LiveTreePreview } from '../components/LiveTreePreview';
import { ThemeGallery } from '../components/ThemeGallery';
import { ExportPreview } from '../components/ExportPreview';

export default function ToolsPage(): React.JSX.Element {
  return (
    <Layout
      title="Interactive Tools"
      description="Interactive Command Generator, Live Tree Preview, Theme Gallery, and Export Previewer for RepoAtlas"
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: '#f8fafc',
              marginBottom: '0.75rem',
            }}
          >
            Interactive Tools Studio
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: '650px', margin: '0 auto' }}>
            Build custom CLI commands visually, preview multi-theme repository trees in real-time,
            compare themes, and test 13 export format generators.
          </p>
        </div>

        <CommandGenerator />
        <LiveTreePreview />
        <ThemeGallery />
        <ExportPreview />
      </div>
    </Layout>
  );
}
