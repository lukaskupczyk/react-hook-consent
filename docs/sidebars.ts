import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    gettingStartedSidebar: ['getting-started/intro'],
    apiSidebar: [
        'api/intro',
        'api/use-consent-manager/manage-docs-versions',
        'api/use-consent-manager/translate-your-site',
        'api/use-consent/congratulations',
        'api/use-consent/create-a-blog-post',
        'api/use-consent/create-a-document',
        'api/use-consent/create-a-page',
        'api/use-consent/deploy-your-site',
        'api/use-consent/markdown-features',
    ],

    // But you can create a sidebar manually
    /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
