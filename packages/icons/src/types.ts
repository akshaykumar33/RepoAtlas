export type IconPack = 'emoji' | 'unicode' | 'plain';

export interface IconMapping {
  folder: string;
  folderOpen: string;
  file: string;
  extensions: Record<string, string>;
  filenames: Record<string, string>;
}

export interface IconResolverOptions {
  pack?: IconPack;
  customIcons?: Partial<IconMapping>;
}
