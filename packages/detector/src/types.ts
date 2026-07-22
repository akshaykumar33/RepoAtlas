export type FrameworkType =
  | 'Next.js'
  | 'React'
  | 'Vue'
  | 'Svelte'
  | 'Vite'
  | 'Astro'
  | 'Nuxt'
  | 'Remix'
  | 'Express'
  | 'NestJS'
  | 'Gatsby'
  | 'Angular'
  | 'Unknown';

export type PackageManager = 'pnpm' | 'npm' | 'yarn' | 'bun' | 'Unknown';

export type MonorepoTool = 'pnpm-workspace' | 'Turborepo' | 'Lerna' | 'Nx' | 'Cargo' | 'None';

export type CIProvider = 'GitHub Actions' | 'GitLab CI' | 'CircleCI' | 'Travis CI' | 'None';

export type PrimaryLanguage =
  | 'TypeScript'
  | 'JavaScript'
  | 'Python'
  | 'Rust'
  | 'Go'
  | 'Java'
  | 'C++'
  | 'PHP'
  | 'Ruby'
  | 'Unknown';

export interface ProjectInfo {
  frameworks: FrameworkType[];
  packageManager: PackageManager;
  monorepo: MonorepoTool;
  ciProvider: CIProvider;
  primaryLanguage: PrimaryLanguage;
  isMonorepo: boolean;
  detectedFiles: string[];
}
