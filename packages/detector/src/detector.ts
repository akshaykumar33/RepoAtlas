import fs from 'node:fs/promises';
import path from 'node:path';
import { CIProvider, FrameworkType, MonorepoTool, PackageManager, ProjectInfo } from './types';

export class ProjectDetector {
  async detect(projectPath: string): Promise<ProjectInfo> {
    const root = path.resolve(projectPath);

    const [
      hasPkgJson,
      hasPnpmWorkspace,
      hasTurbo,
      hasLerna,
      hasNx,
      hasYarnLock,
      hasPnpmLock,
      hasBunLock,
      hasNextConfig,
      hasViteConfig,
      hasNuxtConfig,
      hasSvelteConfig,
      hasAstroConfig,
      hasGithubActions,
    ] = await Promise.all([
      this.fileExists(path.join(root, 'package.json')),
      this.fileExists(path.join(root, 'pnpm-workspace.yaml')),
      this.fileExists(path.join(root, 'turbo.json')),
      this.fileExists(path.join(root, 'lerna.json')),
      this.fileExists(path.join(root, 'nx.json')),
      this.fileExists(path.join(root, 'yarn.lock')),
      this.fileExists(path.join(root, 'pnpm-lock.yaml')),
      this.fileExists(path.join(root, 'bun.lockb')),
      this.fileExistsAny(root, ['next.config.js', 'next.config.mjs', 'next.config.ts']),
      this.fileExistsAny(root, ['vite.config.js', 'vite.config.ts', 'vite.config.mjs']),
      this.fileExistsAny(root, ['nuxt.config.js', 'nuxt.config.ts']),
      this.fileExistsAny(root, ['svelte.config.js', 'svelte.config.ts']),
      this.fileExistsAny(root, ['astro.config.mjs', 'astro.config.js', 'astro.config.ts']),
      this.fileExists(path.join(root, '.github/workflows')),
    ]);

    const frameworks: FrameworkType[] = [];
    const detectedFiles: string[] = [];

    let packageManager: PackageManager = 'Unknown';
    let monorepo: MonorepoTool = 'None';
    let ciProvider: CIProvider = 'None';

    if (hasPnpmLock) {
      packageManager = 'pnpm';
      detectedFiles.push('pnpm-lock.yaml');
    } else if (hasYarnLock) {
      packageManager = 'yarn';
      detectedFiles.push('yarn.lock');
    } else if (hasBunLock) {
      packageManager = 'bun';
      detectedFiles.push('bun.lockb');
    } else if (hasPkgJson) {
      packageManager = 'npm';
      detectedFiles.push('package.json');
    }

    if (hasPnpmWorkspace) {
      monorepo = 'pnpm-workspace';
      detectedFiles.push('pnpm-workspace.yaml');
    } else if (hasTurbo) {
      monorepo = 'Turborepo';
      detectedFiles.push('turbo.json');
    } else if (hasLerna) {
      monorepo = 'Lerna';
      detectedFiles.push('lerna.json');
    } else if (hasNx) {
      monorepo = 'Nx';
      detectedFiles.push('nx.json');
    }

    if (hasGithubActions) {
      ciProvider = 'GitHub Actions';
      detectedFiles.push('.github/workflows');
    }

    if (hasNextConfig) frameworks.push('Next.js');
    if (hasNuxtConfig) frameworks.push('Nuxt');
    if (hasSvelteConfig) frameworks.push('Svelte');
    if (hasAstroConfig) frameworks.push('Astro');
    if (hasViteConfig) frameworks.push('Vite');

    if (hasPkgJson) {
      try {
        const content = await fs.readFile(path.join(root, 'package.json'), 'utf-8');
        const pkg = JSON.parse(content);
        const deps = { ...pkg.dependencies, ...pkg.devDependencies };
        if (deps.react && !frameworks.includes('Next.js')) frameworks.push('React');
        if (deps.vue && !frameworks.includes('Nuxt')) frameworks.push('Vue');
        if (deps['@nestjs/core']) frameworks.push('NestJS');
        if (deps.express) frameworks.push('Express');
      } catch {
        // Ignore read errors
      }
    }

    if (frameworks.length === 0) {
      frameworks.push('Unknown');
    }

    return {
      frameworks,
      packageManager,
      monorepo,
      ciProvider,
      primaryLanguage: 'TypeScript',
      isMonorepo: monorepo !== 'None',
      detectedFiles,
    };
  }

  private async fileExists(filePath: string): Promise<boolean> {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  private async fileExistsAny(dir: string, filenames: string[]): Promise<boolean> {
    const checks = filenames.map((f) => this.fileExists(path.join(dir, f)));
    const results = await Promise.all(checks);
    return results.some(Boolean);
  }
}
