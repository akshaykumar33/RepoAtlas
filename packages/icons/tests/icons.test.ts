import { describe, expect, it } from 'vitest';
import { IconResolver } from '../src/index';

describe('Icon Resolver', () => {
  it('resolves specific filenames and extensions', () => {
    const resolver = new IconResolver({ pack: 'emoji' });

    expect(resolver.resolveFile('package.json')).toBe('📦');
    expect(resolver.resolveFile('index.ts')).toBe('📘');
    expect(resolver.resolveFile('unknown.xyz')).toBe('📄');
    expect(resolver.resolveFolder()).toBe('📁');
  });

  it('supports custom override icons', () => {
    const resolver = new IconResolver({
      pack: 'emoji',
      customIcons: {
        file: '✨',
      },
    });

    expect(resolver.resolveFile('unknown.xyz')).toBe('✨');
  });
});
