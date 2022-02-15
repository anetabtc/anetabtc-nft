// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'anetaBTC',
  tagline: 'Wrapped BTC on Ergo & Cardano',
  url: 'https://anetabtc.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'anetabtc', // Usually your GitHub org/user name.
  projectName: 'anetabtc-landing', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {

        logo: {
          alt: 'anetaBTC logo',
          src: 'img/anetaLogoDark.png',
          srcDark: 'img/anetaLogo.png'

        }

        },
        colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        switchConfig: {

          darkIcon: '🌙',
          darkIconStyle: {
            marginLeft: '2'
          },
          lightIcon: '☀️',
          lightIconStyle: {
            marginLeft: '1px',
          },
      },
    },




      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};





module.exports = config;
