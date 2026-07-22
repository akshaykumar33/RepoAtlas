import fs from 'node:fs/promises';
import path from 'node:path';
import { normalizePath } from '@repoatlasdev/utils';

export interface SymlinkInfo {
  isSymlink: boolean;
  target?: string;
  isCycle?: boolean;
}

export class SymlinkResolver {
  private visitedRealPaths = new Set<string>();

  async resolve(filePath: string): Promise<SymlinkInfo> {
    try {
      const lstats = await fs.lstat(filePath);
      if (!lstats.isSymbolicLink()) {
        return { isSymlink: false };
      }

      const target = await fs.readlink(filePath);
      const realPath = await fs.realpath(filePath);
      const isCycle = this.visitedRealPaths.has(realPath);

      return {
        isSymlink: true,
        target: normalizePath(target),
        isCycle,
      };
    } catch {
      return { isSymlink: false };
    }
  }

  markVisited(filePath: string) {
    try {
      const real = path.resolve(filePath);
      this.visitedRealPaths.add(real);
    } catch {
      // Ignore
    }
  }
}
