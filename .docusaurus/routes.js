
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/anetabtc-nft/__docusaurus/debug',
    component: ComponentCreator('/anetabtc-nft/__docusaurus/debug','ede'),
    exact: true
  },
  {
    path: '/anetabtc-nft/__docusaurus/debug/config',
    component: ComponentCreator('/anetabtc-nft/__docusaurus/debug/config','65a'),
    exact: true
  },
  {
    path: '/anetabtc-nft/__docusaurus/debug/content',
    component: ComponentCreator('/anetabtc-nft/__docusaurus/debug/content','38a'),
    exact: true
  },
  {
    path: '/anetabtc-nft/__docusaurus/debug/globalData',
    component: ComponentCreator('/anetabtc-nft/__docusaurus/debug/globalData','b5d'),
    exact: true
  },
  {
    path: '/anetabtc-nft/__docusaurus/debug/metadata',
    component: ComponentCreator('/anetabtc-nft/__docusaurus/debug/metadata','ed0'),
    exact: true
  },
  {
    path: '/anetabtc-nft/__docusaurus/debug/registry',
    component: ComponentCreator('/anetabtc-nft/__docusaurus/debug/registry','54d'),
    exact: true
  },
  {
    path: '/anetabtc-nft/__docusaurus/debug/routes',
    component: ComponentCreator('/anetabtc-nft/__docusaurus/debug/routes','909'),
    exact: true
  },
  {
    path: '/anetabtc-nft/blog',
    component: ComponentCreator('/anetabtc-nft/blog','1e7'),
    exact: true
  },
  {
    path: '/anetabtc-nft/blog/archive',
    component: ComponentCreator('/anetabtc-nft/blog/archive','95e'),
    exact: true
  },
  {
    path: '/anetabtc-nft/blog/first-blog-post',
    component: ComponentCreator('/anetabtc-nft/blog/first-blog-post','492'),
    exact: true
  },
  {
    path: '/anetabtc-nft/blog/long-blog-post',
    component: ComponentCreator('/anetabtc-nft/blog/long-blog-post','01c'),
    exact: true
  },
  {
    path: '/anetabtc-nft/blog/mdx-blog-post',
    component: ComponentCreator('/anetabtc-nft/blog/mdx-blog-post','7ee'),
    exact: true
  },
  {
    path: '/anetabtc-nft/blog/tags',
    component: ComponentCreator('/anetabtc-nft/blog/tags','494'),
    exact: true
  },
  {
    path: '/anetabtc-nft/blog/tags/docusaurus',
    component: ComponentCreator('/anetabtc-nft/blog/tags/docusaurus','1a9'),
    exact: true
  },
  {
    path: '/anetabtc-nft/blog/tags/facebook',
    component: ComponentCreator('/anetabtc-nft/blog/tags/facebook','8bd'),
    exact: true
  },
  {
    path: '/anetabtc-nft/blog/tags/hello',
    component: ComponentCreator('/anetabtc-nft/blog/tags/hello','a4e'),
    exact: true
  },
  {
    path: '/anetabtc-nft/blog/tags/hola',
    component: ComponentCreator('/anetabtc-nft/blog/tags/hola','3eb'),
    exact: true
  },
  {
    path: '/anetabtc-nft/blog/welcome',
    component: ComponentCreator('/anetabtc-nft/blog/welcome','d64'),
    exact: true
  },
  {
    path: '/anetabtc-nft/docs',
    component: ComponentCreator('/anetabtc-nft/docs','915'),
    routes: [
      {
        path: '/anetabtc-nft/docs/intro',
        component: ComponentCreator('/anetabtc-nft/docs/intro','d03'),
        exact: true,
        'sidebar': "defaultSidebar"
      },
      {
        path: '/anetabtc-nft/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/anetabtc-nft/docs/tutorial-basics/congratulations','e1d'),
        exact: true,
        'sidebar': "defaultSidebar"
      },
      {
        path: '/anetabtc-nft/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/anetabtc-nft/docs/tutorial-basics/create-a-blog-post','d02'),
        exact: true,
        'sidebar': "defaultSidebar"
      },
      {
        path: '/anetabtc-nft/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/anetabtc-nft/docs/tutorial-basics/create-a-document','9e6'),
        exact: true,
        'sidebar': "defaultSidebar"
      },
      {
        path: '/anetabtc-nft/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/anetabtc-nft/docs/tutorial-basics/create-a-page','aeb'),
        exact: true,
        'sidebar': "defaultSidebar"
      },
      {
        path: '/anetabtc-nft/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/anetabtc-nft/docs/tutorial-basics/deploy-your-site','931'),
        exact: true,
        'sidebar': "defaultSidebar"
      },
      {
        path: '/anetabtc-nft/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/anetabtc-nft/docs/tutorial-basics/markdown-features','486'),
        exact: true,
        'sidebar': "defaultSidebar"
      },
      {
        path: '/anetabtc-nft/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/anetabtc-nft/docs/tutorial-extras/manage-docs-versions','7e7'),
        exact: true,
        'sidebar': "defaultSidebar"
      },
      {
        path: '/anetabtc-nft/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/anetabtc-nft/docs/tutorial-extras/translate-your-site','212'),
        exact: true,
        'sidebar': "defaultSidebar"
      }
    ]
  },
  {
    path: '/anetabtc-nft/',
    component: ComponentCreator('/anetabtc-nft/','dd0'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
