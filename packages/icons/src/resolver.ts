import { getExtension } from '@repo-atlas/utils';
import { IconMapping, IconPack, IconResolverOptions } from './types';

const EMOJI_PACK: IconMapping = {
  folder: '📁',
  folderOpen: '📂',
  file: '📄',
  extensions: {
    ts: '📘',
    tsx: '⚛️',
    js: '📙',
    jsx: '⚛️',
    json: '📋',
    md: '📝',
    yml: '⚙️',
    yaml: '⚙️',
    css: '🎨',
    html: '🌐',
  },
  filenames: {
    'package.json': '📦',
    'tsconfig.json': '⚙️',
    'README.md': '📖',
    '.gitignore': '🙈',
    'AGENTS.md': '🤖',
  },
};

const UNICODE_PACK: IconMapping = {
  folder: '🗀',
  folderOpen: '🗁',
  file: '🗋',
  extensions: {},
  filenames: {},
};

const PLAIN_PACK: IconMapping = {
  folder: '[D]',
  folderOpen: '[D]',
  file: '[F]',
  extensions: {},
  filenames: {},
};

const PACKS: Record<IconPack, IconMapping> = {
  emoji: EMOJI_PACK,
  unicode: UNICODE_PACK,
  plain: PLAIN_PACK,
};

export class IconResolver {
  private pack: IconMapping;

  constructor(options?: IconResolverOptions) {
    const selectedPack = PACKS[options?.pack || 'emoji'] || EMOJI_PACK;
    this.pack = {
      ...selectedPack,
      ...options?.customIcons,
      extensions: {
        ...selectedPack.extensions,
        ...options?.customIcons?.extensions,
      },
      filenames: {
        ...selectedPack.filenames,
        ...options?.customIcons?.filenames,
      },
    };
  }

  resolveFolder(isOpen = false): string {
    return isOpen ? this.pack.folderOpen : this.pack.folder;
  }

  resolveFile(filename: string): string {
    if (this.pack.filenames[filename]) {
      return this.pack.filenames[filename];
    }
    const ext = getExtension(filename);
    if (ext && this.pack.extensions[ext]) {
      return this.pack.extensions[ext];
    }
    return this.pack.file;
  }
}
