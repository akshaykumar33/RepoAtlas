import { IconPack } from '@repoatlasdev/icons';

export interface ThemeConnectors {
  vertical: string;
  branch?: string;
  middleBranch?: string;
  lastBranch: string;
  indent: string;
}

export interface ThemePreset {
  name: string;
  connectors: ThemeConnectors;
  defaultIconPack?: IconPack;
  iconPack?: IconPack;
  supportsColor?: boolean;
  palette?: Record<string, (t: string) => string>;
}

export type ThemeConfig = ThemePreset;
