import { IconPack } from '@repo-atlas/icons';

export interface RepoAtlasConfig {
  format?: 'ascii' | 'unicode' | 'markdown' | 'json' | 'mermaid' | string;
  maxDepth?: number;
  ignorePatterns?: string[];
  includeHidden?: boolean;
  showSize?: boolean;
  iconPack?: IconPack;
  theme?: string;
  outputFile?: string;
}
