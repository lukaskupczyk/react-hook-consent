import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
    title: 'React Hook Consent',
    tagline:
        'React consent management solution and banner for cookies, local storage, session storage and (external) scripts.',
    // favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://lukaskupczyk.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/react-hook-consent/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'lukaskupcyzk', // Usually your GitHub org/user name.
    projectName: 'react-hook-consent', // Usually your repo name.

    trailingSlash: false,

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'React Hook Consent',
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'gettingStartedSidebar',
                    position: 'left',
                    label: 'Getting Started',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'apiSidebar',
                    position: 'left',
                    label: 'API',
                },
                {
                    href: 'https://github.com/lukaskupczyk/react-hook-consent',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
