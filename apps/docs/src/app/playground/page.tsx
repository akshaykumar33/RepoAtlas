import { LivePlayground } from '@/components/live-playground';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Live Playground — RepoAtlas',
  description:
    'Interactive live playground for testing RepoAtlas tree renderers, exporters, icon packs, and custom options.',
};

export default function PlaygroundPage() {
  return (
    <div className="py-8">
      <LivePlayground />
    </div>
  );
}
