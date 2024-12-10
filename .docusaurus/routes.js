import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ADC-TP3-Docusaurus/__docusaurus/debug',
    component: ComponentCreator('/ADC-TP3-Docusaurus/__docusaurus/debug', 'db4'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/__docusaurus/debug/config',
    component: ComponentCreator('/ADC-TP3-Docusaurus/__docusaurus/debug/config', 'e71'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/__docusaurus/debug/content',
    component: ComponentCreator('/ADC-TP3-Docusaurus/__docusaurus/debug/content', 'ea0'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/__docusaurus/debug/globalData',
    component: ComponentCreator('/ADC-TP3-Docusaurus/__docusaurus/debug/globalData', '34b'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/__docusaurus/debug/metadata',
    component: ComponentCreator('/ADC-TP3-Docusaurus/__docusaurus/debug/metadata', 'd55'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/__docusaurus/debug/registry',
    component: ComponentCreator('/ADC-TP3-Docusaurus/__docusaurus/debug/registry', 'c14'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/__docusaurus/debug/routes',
    component: ComponentCreator('/ADC-TP3-Docusaurus/__docusaurus/debug/routes', '53e'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/blog',
    component: ComponentCreator('/ADC-TP3-Docusaurus/blog', '526'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/blog/archive',
    component: ComponentCreator('/ADC-TP3-Docusaurus/blog/archive', '5b6'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/blog/blog',
    component: ComponentCreator('/ADC-TP3-Docusaurus/blog/blog', 'c6d'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/blog/first-blog-post',
    component: ComponentCreator('/ADC-TP3-Docusaurus/blog/first-blog-post', '0f0'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/blog/long-blog-post',
    component: ComponentCreator('/ADC-TP3-Docusaurus/blog/long-blog-post', '4ad'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/blog/mdx-blog-post',
    component: ComponentCreator('/ADC-TP3-Docusaurus/blog/mdx-blog-post', '86b'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/blog/tags',
    component: ComponentCreator('/ADC-TP3-Docusaurus/blog/tags', 'b8c'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/blog/tags/docusaurus',
    component: ComponentCreator('/ADC-TP3-Docusaurus/blog/tags/docusaurus', '911'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/blog/tags/facebook',
    component: ComponentCreator('/ADC-TP3-Docusaurus/blog/tags/facebook', '426'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/blog/tags/hello',
    component: ComponentCreator('/ADC-TP3-Docusaurus/blog/tags/hello', '5df'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/blog/tags/hola',
    component: ComponentCreator('/ADC-TP3-Docusaurus/blog/tags/hola', 'f27'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/blog/welcome',
    component: ComponentCreator('/ADC-TP3-Docusaurus/blog/welcome', '26a'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/markdown-page',
    component: ComponentCreator('/ADC-TP3-Docusaurus/markdown-page', '815'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/pagina',
    component: ComponentCreator('/ADC-TP3-Docusaurus/pagina', '667'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/VendaLivros',
    component: ComponentCreator('/ADC-TP3-Docusaurus/VendaLivros', 'cb0'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/VendaSoftware',
    component: ComponentCreator('/ADC-TP3-Docusaurus/VendaSoftware', '776'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/docs',
    component: ComponentCreator('/ADC-TP3-Docusaurus/docs', '458'),
    routes: [
      {
        path: '/ADC-TP3-Docusaurus/docs/category/tutorial---basics',
        component: ComponentCreator('/ADC-TP3-Docusaurus/docs/category/tutorial---basics', 'b9f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ADC-TP3-Docusaurus/docs/category/tutorial---extras',
        component: ComponentCreator('/ADC-TP3-Docusaurus/docs/category/tutorial---extras', 'd25'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ADC-TP3-Docusaurus/docs/intro',
        component: ComponentCreator('/ADC-TP3-Docusaurus/docs/intro', 'be9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ADC-TP3-Docusaurus/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/ADC-TP3-Docusaurus/docs/tutorial-basics/congratulations', '3af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ADC-TP3-Docusaurus/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/ADC-TP3-Docusaurus/docs/tutorial-basics/create-a-blog-post', 'b7e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ADC-TP3-Docusaurus/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/ADC-TP3-Docusaurus/docs/tutorial-basics/create-a-document', '77c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ADC-TP3-Docusaurus/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/ADC-TP3-Docusaurus/docs/tutorial-basics/create-a-page', '7b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ADC-TP3-Docusaurus/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/ADC-TP3-Docusaurus/docs/tutorial-basics/deploy-your-site', '155'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ADC-TP3-Docusaurus/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/ADC-TP3-Docusaurus/docs/tutorial-basics/markdown-features', '87f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ADC-TP3-Docusaurus/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/ADC-TP3-Docusaurus/docs/tutorial-extras/manage-docs-versions', '71c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ADC-TP3-Docusaurus/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/ADC-TP3-Docusaurus/docs/tutorial-extras/translate-your-site', '6be'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/ADC-TP3-Docusaurus/',
    component: ComponentCreator('/ADC-TP3-Docusaurus/', '7f6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
