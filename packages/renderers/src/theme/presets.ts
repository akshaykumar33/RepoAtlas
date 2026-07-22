import { ThemeConfig } from './types';

export const ASCII_THEME: ThemeConfig = {
  name: 'ascii',
  iconPack: 'ascii',
  connectors: {
    middleBranch: '|-- ',
    lastBranch: '`-- ',
    indent: '    ',
    vertical: '|   ',
  },
};

export const UNICODE_THEME: ThemeConfig = {
  name: 'unicode',
  iconPack: 'emoji',
  connectors: {
    middleBranch: '├── ',
    lastBranch: '└── ',
    indent: '    ',
    vertical: '│   ',
  },
};

export const VSCODE_THEME: ThemeConfig = {
  name: 'vscode',
  iconPack: 'vscode',
  connectors: {
    middleBranch: '├─ ',
    lastBranch: '└─ ',
    indent: '   ',
    vertical: '│  ',
  },
  palette: {
    directory: (t: string) => `\x1b[34m\x1b[1m${t}\x1b[0m`, // Bold Blue
    file: (t: string) => `\x1b[37m${t}\x1b[0m`, // White
    connector: (t: string) => `\x1b[90m${t}\x1b[0m`, // Gray
    size: (t: string) => `\x1b[33m${t}\x1b[0m`, // Yellow
  },
};

export const MATERIAL_THEME: ThemeConfig = {
  name: 'material',
  iconPack: 'material',
  connectors: {
    middleBranch: '├── ',
    lastBranch: '└── ',
    indent: '    ',
    vertical: '│   ',
  },
  palette: {
    directory: (t: string) => `\x1b[36m\x1b[1m${t}\x1b[0m`, // Bold Cyan
    file: (t: string) => `\x1b[32m${t}\x1b[0m`, // Green
    connector: (t: string) => `\x1b[35m${t}\x1b[0m`, // Magenta
    size: (t: string) => `\x1b[33m${t}\x1b[0m`, // Yellow
  },
};

export const NERD_FONT_THEME: ThemeConfig = {
  name: 'nerd-font',
  iconPack: 'nerd',
  connectors: {
    middleBranch: '├── ',
    lastBranch: '└── ',
    indent: '    ',
    vertical: '│   ',
  },
  palette: {
    directory: (t: string) => `\x1b[33m\x1b[1m${t}\x1b[0m`, // Bold Yellow
    file: (t: string) => `\x1b[36m${t}\x1b[0m`, // Cyan
    connector: (t: string) => `\x1b[90m${t}\x1b[0m`, // Gray
  },
};

export const THEMES: Record<string, ThemeConfig> = {
  ascii: ASCII_THEME,
  unicode: UNICODE_THEME,
  vscode: VSCODE_THEME,
  material: MATERIAL_THEME,
  'nerd-font': NERD_FONT_THEME,
};
