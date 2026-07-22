import { describe, expect, it } from 'vitest';
import { formatBytes, getExtension, normalizePath } from '../src/index';

describe('Utils', () => {
  it('normalizes windows paths', () => {
    expect(normalizePath('foo\\bar\\baz.ts')).toBe('foo/bar/baz.ts');
  });

  it('gets correct file extension', () => {
    expect(getExtension('index.ts')).toBe('ts');
    expect(getExtension('archive.tar.gz')).toBe('gz');
    expect(getExtension('Dockerfile')).toBe('');
  });

  it('formats bytes correctly', () => {
    expect(formatBytes(0)).toBe('0 B');
    expect(formatBytes(1024)).toBe('1 KB');
    expect(formatBytes(1536)).toBe('1.5 KB');
  });
});
