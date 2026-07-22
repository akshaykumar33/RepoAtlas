import fs from 'node:fs/promises';
import path from 'node:path';
import { normalizePath } from '@repoatlasdev/utils';
import ignore, { Ignore } from 'ignore';

export class IgnoreFilter {
  private ig: Ignore;

  constructor(customPatterns: string[] = []) {
    this.ig = ignore();
    // Default system ignore rules
    this.ig.add(['.git', 'node_modules', '.DS_Store', 'Thumbs.db']);
    if (customPatterns.length > 0) {
      this.ig.add(customPatterns);
    }
  }

  async loadGitIgnore(dirPath: string): Promise<void> {
    const gitignorePath = path.join(dirPath, '.gitignore');
    try {
      const content = await fs.readFile(gitignorePath, 'utf-8');
      this.ig.add(content);
    } catch {
      // .gitignore does not exist or is not readable
    }
  }

  isIgnored(relativePath: string, isDirectory: boolean): boolean {
    if (!relativePath || relativePath === '.') return false;
    const normalized = normalizePath(relativePath);
    const pathToCheck = isDirectory ? `${normalized}/` : normalized;
    return this.ig.ignores(pathToCheck);
  }
}
