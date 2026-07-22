import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { ProjectDetector } from '../src/index';

describe('Project Detector', () => {
  it('detects monorepo tools and package managers in root workspace', async () => {
    const rootDir = path.resolve(__dirname, '../../..');
    const detector = new ProjectDetector();
    const info = await detector.detect(rootDir);

    expect(info).toBeDefined();
    expect(info.packageManager).toBe('pnpm');
    expect(info.monorepo).toBe('pnpm-workspace');
    expect(info.primaryLanguage).toBe('TypeScript');
    expect(info.ciProvider).toBe('GitHub Actions');
  });
});
