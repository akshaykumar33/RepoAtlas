import { IconPack } from '@repoatlasdev/icons';

export interface RepoAtlasConfig {
  maxDepth?: number;
  theme?: string;
  icons?: IconPack;
  iconPack?: IconPack;
  sort?: 'name' | 'size' | 'type';
  only?: 'all' | 'files' | 'directories';
  exclude?: string[];
  include?: string[];
  respectGitIgnore?: boolean;
  format?: string;
  ignorePatterns?: string[];
  includeHidden?: boolean;
  showSize?: boolean;
  useColor?: boolean;
  outputFile?: string;
}
