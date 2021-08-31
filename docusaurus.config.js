const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Simply-DJS',
  tagline: 'A Simple, Easy and Beginner friendly Discord.js Package for everyone.',
  url: 'https://simplydjs.js.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'Rahuletto#0243',
  projectName: 'simply-djs',
  themeConfig: {
    hideableSidebar: true,
    stylesheets: [
      "https://fonts.googleapis.com/icon?family=Material+Icons",
      "https://kit.fontawesome.com/a6e95e39af.js",
      'https://buttons.github.io/buttons.js',
  'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
  '/js/code-block-buttons.js',
  "https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
    ],
    throwIfNamespace: false,
    metadatas: [
      {
        name: 'og:title', content: 'Simply DJS'
      },
      {
        name: 'og:description', content: 'Package that simplifies Discord.js v13'
      },
      {
        name: 'og:site_name', content: 'Simply DJS'
      },
      {
        name: 'og:color', content: '#5865F2'
      }
    ],
    navbar: {
      title: '',
      items: [
        {
          to: '/',
          position: 'left',
          label: 'Simply-DJS',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/Rahuletto/simply-djs',
          label: 'GitHub',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Help',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
            {
              label: 'Support Server',
              href: 'https://discord.gg/3JzDV9T5Fn',
            },
          ],
        },
        {
          title: ' ',
         /* items: [
            {
              label: ' ',
              to: '/',
            },
          ], **/
        },
        {
          title: 'Contact Me',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Rahuletto',
            },
            {
              label: 'Twitter',
              href: 'https://twitter/rahuletto',
            },
            {
              label: 'Instagram',
              href: 'https://instagram/rahuletto',
            },
          ],
        },
      ],
      copyright: `<br>Copyright © ${new Date().getFullYear()}  Simply Develop. npm i simply-djs<br>Made By Rahuletto#0243 with 💖<br><br>Not affiliated with Discord (or) Discord.js`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
