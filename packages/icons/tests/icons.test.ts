import { describe, expect, it } from 'vitest';
import { IconResolver } from '../src/index';

describe('Icon Resolver', () => {
  it('resolves specific filenames and extensions', () => {
    const resolver = new IconResolver({ pack: 'emoji' });

    expect(resolver.getFileIcon('package.json')).toBe('📋');
    expect(resolver.getFileIcon('index.ts')).toBe('🔷');
    expect(resolver.getFileIcon('unknown.xyz')).toBe('📄');
    expect(resolver.getFolderIcon()).toBe('📁');
  });

  it('supports custom override icons', () => {
    const resolver = new IconResolver({
      pack: 'emoji',
      customIcons: {
        extensions: {
          xyz: '✨',
        },
      },
    });

    expect(resolver.getFileIcon('unknown.xyz')).toBe('✨');
  });
});
