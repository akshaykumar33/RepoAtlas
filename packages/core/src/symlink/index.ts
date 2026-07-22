import fs from 'node:fs/promises';
import { normalizePath } from '@repo-atlas/utils';

export interface SymlinkInfo {
  isSymlink: boolean;
  target?: string;
  isCycle?: boolean;
}

export class SymlinkResolver {
  private visitedPaths = new Set<string>();

  async resolve(fullPath: string): Promise<SymlinkInfo> {
    try {
      const lstat = await fs.lstat(fullPath);
      if (!lstat.isSymbolicLink()) {
        return { isSymlink: false };
      }

      const target = await fs.readlink(fullPath);
      const normalizedTarget = normalizePath(target);
      const isCycle = this.visitedPaths.has(normalizedTarget);

      return {
        isSymlink: true,
        target: normalizedTarget,
        isCycle,
      };
    } catch {
      return { isSymlink: false };
    }
  }

  markVisited(fullPath: string): void {
    this.visitedPaths.add(normalizePath(fullPath));
  }

  clear(): void {
    this.visitedPaths.clear();
  }
}
