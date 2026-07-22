import { IconPack } from '@repo-atlas/icons';

export interface TreeConnectors {
  middleBranch: string;
  lastBranch: string;
  indent: string;
  vertical: string;
}

export interface ThemePalette {
  directory?: (text: string) => string;
  file?: (text: string) => string;
  extension?: (text: string) => string;
  size?: (text: string) => string;
  connector?: (text: string) => string;
  projectBadge?: (text: string) => string;
}

export interface ThemeConfig {
  name: string;
  connectors: TreeConnectors;
  palette?: ThemePalette;
  iconPack: IconPack;
}
