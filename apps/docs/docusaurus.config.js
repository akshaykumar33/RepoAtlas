import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RepoAtlas',
  tagline:
    'Transform any repository into beautiful, configurable, documentation-ready project structures',
  favicon: 'img/favicon.ico',

  url: 'https://repo-atlas.dev',
  baseUrl: '/',

  organizationName: 'akshaykumar33',
  projectName: 'RepoAtlas',

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/akshaykumar33/RepoAtlas/tree/main/apps/docs/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'RepoAtlas',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/tools', label: 'Interactive Tools', position: 'left' },
          {
            href: 'https://github.com/akshaykumar33/RepoAtlas',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Quick Start', to: '/docs/quick-start' },
              { label: 'CLI Options', to: '/docs/cli' },
              { label: 'Themes & Icons', to: '/docs/themes' },
              { label: 'Export Formats', to: '/docs/export-formats' },
            ],
          },
          {
            title: 'Interactive Tools',
            items: [
              { label: 'Command Generator', to: '/tools' },
              { label: 'Live Tree Preview', to: '/tools' },
              { label: 'Theme Gallery', to: '/tools' },
              { label: 'Export Preview', to: '/tools' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'GitHub', href: 'https://github.com/akshaykumar33/RepoAtlas' },
              { label: 'Contributing', to: '/docs/contributing' },
              { label: 'Changelog', to: '/docs/changelog' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RepoAtlas Team. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
