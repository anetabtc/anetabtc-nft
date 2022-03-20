
const config = {
  title: 'Aneta Angels',
  tagline: 'Wrapped BTC on Ergo & Cardano',
  url: 'https://anetabtc.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'anetaBTC',
  projectName: 'anetabtc-nft',

  presets: [
    [
      'classic',

      ({
theme: {
          customCss: require.resolve('./src/pages/nft.css'),
        },
      }),
    ],
  ],


};





module.exports = config;
