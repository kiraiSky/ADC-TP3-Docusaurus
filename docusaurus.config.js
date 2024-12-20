// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Biblioteca Pro Max',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ADC-TP3-Docusaurus/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'masaleiro', // Usually your GitHub org/user name.
  projectName: 'ADC-TP3-Docusaurus', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kiraiSky/ADC-TP3-Docusaurus',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kiraiSky/ADC-TP3-Docusaurus',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Biblioteca Pro max',
        logo: {
          alt: 'My Site Logo',
          src: 'img/LOGO.png',
        },
        items: [
        
          {
            href: 'https://github.com/kiraiSky/ADC-TP3-Docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          {to: '/estante', label: 'Estante Interativa', position: 'left'},
          {to: '/bookReview', label: 'Resenhas', position: 'left'},
          {to: '/vendalivros', label: 'Top Vendas', position: 'left'},
          {to: '/VendaSoftware', label: 'Software', position: 'left'},
          {to: '/sellBooks', label: 'Compre Livros', position: 'left'}
          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Livraria Virtual',
            items: [
              {
                label: 'Estante Interativa',
                to: '/estante',
              },
            ],
          },
          {
            title: 'Criticas & Opiniões',
            items: [
              {
                label: 'Resenhas',
                to: '/bookReview',
              }
            ],
          },
          {
            title: 'Nossa loja',
            items: [
              {
                label: 'Software',
                to: '/VendaSoftware',
              },
              {
                label: 'Livros',
                to: '/vendaLivros',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Biblioteca Pro Max. um projeto académico produzido por Hanna Paiva, Adriano Muncaciu, Paulo Ferreira & João Cunha`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
