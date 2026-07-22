import fs from 'node:fs/promises';
import path from 'node:path';
import ignore, { Ignore } from 'ignore';
import { normalizePath } from '@repo-atlas/utils';

export const DEFAULT_IGNORE_PATTERNS = [
  '.git',
  'node_modules',
  'dist',
  '.turbo',
  '.DS_Store',
  'Thumbs.db',
];

export class IgnoreFilter {
  private ig: Ignore;
  private defaultPatterns: string[];

  constructor(customPatterns?: string[]) {
    this.ig = ignore();
    this.defaultPatterns = [...DEFAULT_IGNORE_PATTERNS, ...(customPatterns || [])];
    this.ig.add(this.defaultPatterns);
  }

  async loadGitIgnore(dirPath: string): Promise<boolean> {
    const gitIgnorePath = path.join(dirPath, '.gitignore');
    try {
      const content = await fs.readFile(gitIgnorePath, 'utf-8');
      this.ig.add(content);
      return true;
    } catch {
      return false;
    }
  }

  isIgnored(relativePath: string, isDirectory: boolean): boolean {
    if (!relativePath || relativePath === '.' || relativePath === './') {
      return false;
    }

    const normalized = normalizePath(relativePath);
    const testPath = isDirectory ? `${normalized}/` : normalized;

    // Check default patterns first
    const pathParts = normalized.split('/');
    if (pathParts.some((part) => this.defaultPatterns.includes(part))) {
      return true;
    }

    return this.ig.ignores(testPath);
  }
}
