// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    'installation',
    'quick-start',
    {
      type: 'category',
      label: 'Core Reference',
      items: ['cli', 'configuration', 'themes', 'icons', 'export-formats'],
    },
    {
      type: 'category',
      label: 'Guides & SDK',
      items: ['examples', 'api'],
    },
    {
      type: 'category',
      label: 'Community',
      items: ['faq', 'changelog', 'contributing'],
    },
  ],
};

export default sidebars;
