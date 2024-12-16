import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ADC-TP3-Docusaurus/__docusaurus/debug',
    component: ComponentCreator('/ADC-TP3-Docusaurus/__docusaurus/debug', 'b5b'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/__docusaurus/debug/config',
    component: ComponentCreator('/ADC-TP3-Docusaurus/__docusaurus/debug/config', '239'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/__docusaurus/debug/content',
    component: ComponentCreator('/ADC-TP3-Docusaurus/__docusaurus/debug/content', '39c'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/__docusaurus/debug/globalData',
    component: ComponentCreator('/ADC-TP3-Docusaurus/__docusaurus/debug/globalData', '887'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/__docusaurus/debug/metadata',
    component: ComponentCreator('/ADC-TP3-Docusaurus/__docusaurus/debug/metadata', 'bfc'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/__docusaurus/debug/registry',
    component: ComponentCreator('/ADC-TP3-Docusaurus/__docusaurus/debug/registry', 'd62'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/__docusaurus/debug/routes',
    component: ComponentCreator('/ADC-TP3-Docusaurus/__docusaurus/debug/routes', '1a6'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/blog',
    component: ComponentCreator('/ADC-TP3-Docusaurus/blog', '2ce'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/blog/archive',
    component: ComponentCreator('/ADC-TP3-Docusaurus/blog/archive', '435'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/blog/blog',
    component: ComponentCreator('/ADC-TP3-Docusaurus/blog/blog', 'ee8'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/blog/first-blog-post',
    component: ComponentCreator('/ADC-TP3-Docusaurus/blog/first-blog-post', '551'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/blog/long-blog-post',
    component: ComponentCreator('/ADC-TP3-Docusaurus/blog/long-blog-post', '5c2'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/blog/mdx-blog-post',
    component: ComponentCreator('/ADC-TP3-Docusaurus/blog/mdx-blog-post', 'b11'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/blog/tags',
    component: ComponentCreator('/ADC-TP3-Docusaurus/blog/tags', '043'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/blog/tags/docusaurus',
    component: ComponentCreator('/ADC-TP3-Docusaurus/blog/tags/docusaurus', 'ee2'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/blog/tags/facebook',
    component: ComponentCreator('/ADC-TP3-Docusaurus/blog/tags/facebook', 'd96'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/blog/tags/hello',
    component: ComponentCreator('/ADC-TP3-Docusaurus/blog/tags/hello', '117'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/blog/tags/hola',
    component: ComponentCreator('/ADC-TP3-Docusaurus/blog/tags/hola', 'd9a'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/blog/welcome',
    component: ComponentCreator('/ADC-TP3-Docusaurus/blog/welcome', '4f7'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/markdown-page',
    component: ComponentCreator('/ADC-TP3-Docusaurus/markdown-page', '98e'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/pagina',
    component: ComponentCreator('/ADC-TP3-Docusaurus/pagina', 'b7a'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/VendaLivros',
    component: ComponentCreator('/ADC-TP3-Docusaurus/VendaLivros', 'a73'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/VendaSoftware',
    component: ComponentCreator('/ADC-TP3-Docusaurus/VendaSoftware', 'cf3'),
    exact: true
  },
  {
    path: '/ADC-TP3-Docusaurus/docs',
    component: ComponentCreator('/ADC-TP3-Docusaurus/docs', '404'),
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
    component: ComponentCreator('/ADC-TP3-Docusaurus/', 'e14'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
