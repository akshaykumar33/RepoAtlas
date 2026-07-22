import fs from 'node:fs/promises';
import path from 'node:path';
import {
  CIProvider,
  FrameworkType,
  MonorepoTool,
  PackageManager,
  PrimaryLanguage,
  ProjectInfo,
} from './types';

export class ProjectDetector {
  async detect(dirPath: string): Promise<ProjectInfo> {
    const detectedFiles: string[] = [];
    const entries = await this.safeReadDir(dirPath);

    const hasFile = (name: string): boolean => {
      const found = entries.includes(name);
      if (found) detectedFiles.push(name);
      return found;
    };

    // Detect Package Manager
    let packageManager: PackageManager = 'Unknown';
    if (hasFile('pnpm-lock.yaml')) packageManager = 'pnpm';
    else if (hasFile('package-lock.json')) packageManager = 'npm';
    else if (hasFile('yarn.lock')) packageManager = 'yarn';
    else if (hasFile('bun.lockb') || hasFile('bun.lock')) packageManager = 'bun';

    // Detect Monorepo Tool
    let monorepo: MonorepoTool = 'None';
    if (hasFile('pnpm-workspace.yaml')) monorepo = 'pnpm-workspace';
    else if (hasFile('turbo.json')) monorepo = 'Turborepo';
    else if (hasFile('lerna.json')) monorepo = 'Lerna';
    else if (hasFile('nx.json')) monorepo = 'Nx';

    // Detect CI Provider
    let ciProvider: CIProvider = 'None';
    if (entries.includes('.github')) ciProvider = 'GitHub Actions';
    else if (hasFile('.gitlab-ci.yml')) ciProvider = 'GitLab CI';
    else if (entries.includes('.circleci')) ciProvider = 'CircleCI';
    else if (hasFile('.travis.yml')) ciProvider = 'Travis CI';

    // Detect Primary Language
    let primaryLanguage: PrimaryLanguage = 'Unknown';
    if (hasFile('tsconfig.json') || hasFile('tsconfig.base.json')) primaryLanguage = 'TypeScript';
    else if (hasFile('package.json')) primaryLanguage = 'JavaScript';
    else if (hasFile('Cargo.toml')) primaryLanguage = 'Rust';
    else if (hasFile('go.mod')) primaryLanguage = 'Go';
    else if (hasFile('requirements.txt') || hasFile('pyproject.toml')) primaryLanguage = 'Python';
    else if (hasFile('pom.xml') || hasFile('build.gradle')) primaryLanguage = 'Java';

    // Detect Frameworks by checking package.json dependencies
    const frameworks: FrameworkType[] = [];
    const packageJsonPath = path.join(dirPath, 'package.json');
    try {
      const content = await fs.readFile(packageJsonPath, 'utf-8');
      const pkg = JSON.parse(content);
      const allDeps = {
        ...pkg.dependencies,
        ...pkg.devDependencies,
      };

      if (allDeps['next']) frameworks.push('Next.js');
      if (allDeps['react'] && !frameworks.includes('Next.js')) frameworks.push('React');
      if (allDeps['vue']) frameworks.push('Vue');
      if (allDeps['svelte'] || allDeps['@sveltejs/kit']) frameworks.push('Svelte');
      if (allDeps['vite']) frameworks.push('Vite');
      if (allDeps['astro']) frameworks.push('Astro');
      if (allDeps['nuxt']) frameworks.push('Nuxt');
      if (allDeps['express']) frameworks.push('Express');
      if (allDeps['@nestjs/core']) frameworks.push('NestJS');
      if (allDeps['gatsby']) frameworks.push('Gatsby');
      if (allDeps['@angular/core']) frameworks.push('Angular');
    } catch {
      // package.json might not exist
    }

    if (frameworks.length === 0) {
      frameworks.push('Unknown');
    }

    return {
      frameworks,
      packageManager,
      monorepo,
      ciProvider,
      primaryLanguage,
      isMonorepo: monorepo !== 'None',
      detectedFiles,
    };
  }

  private async safeReadDir(dirPath: string): Promise<string[]> {
    try {
      return await fs.readdir(dirPath);
    } catch {
      return [];
    }
  }
}
