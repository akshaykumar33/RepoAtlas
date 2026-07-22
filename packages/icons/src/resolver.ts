import { getExtension } from '@repoatlasdev/utils';
import { EMOJI_ICONS, MATERIAL_ICONS, NERD_FONTS_ICONS, VSCODE_ICONS } from './presets';
import { IconPack, IconResolverOptions } from './types';

export class IconResolver {
  private pack: IconPack;
  private customIcons?: Record<string, string>;

  constructor(options?: IconPack | IconResolverOptions) {
    if (typeof options === 'string') {
      this.pack = options;
    } else {
      this.pack = options?.pack ?? 'emoji';
      this.customIcons = options?.customIcons?.extensions;
    }
  }

  getFolderIcon(isOpen = false): string {
    switch (this.pack) {
      case 'vscode':
        return VSCODE_ICONS.folder || '📁';
      case 'material':
        return MATERIAL_ICONS.folder || '📁';
      case 'nerd':
        return NERD_FONTS_ICONS.folder || '📁';
      case 'plain':
      case 'ascii':
        return '';
      case 'emoji':
      case 'unicode':
      default:
        return isOpen ? EMOJI_ICONS.folderOpen || '📂' : EMOJI_ICONS.folder || '📁';
    }
  }

  getFileIcon(filename: string): string {
    const ext = getExtension(filename).toLowerCase();
    if (this.customIcons && this.customIcons[ext]) {
      return this.customIcons[ext];
    }

    let iconMap: Record<string, string>;
    let defaultIcon: string;

    switch (this.pack) {
      case 'vscode':
        iconMap = VSCODE_ICONS;
        defaultIcon = VSCODE_ICONS.file || '📄';
        break;
      case 'material':
        iconMap = MATERIAL_ICONS;
        defaultIcon = MATERIAL_ICONS.file || '📄';
        break;
      case 'nerd':
        iconMap = NERD_FONTS_ICONS;
        defaultIcon = NERD_FONTS_ICONS.file || '📄';
        break;
      case 'emoji':
      case 'unicode':
      default:
        iconMap = EMOJI_ICONS;
        defaultIcon = EMOJI_ICONS.file || '📄';
        break;
    }

    return iconMap[filename] || iconMap[ext] || defaultIcon || '';
  }

  resolveFile(filename: string): string {
    return this.getFileIcon(filename);
  }
}
