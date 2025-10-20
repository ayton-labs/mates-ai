import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Practical AI for Mates',
  tagline: 'You\'re already using AI. Here\'s how to use it 10x better.',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://mates-ai.vercel.app',
  baseUrl: '/',

  organizationName: 'ayton-labs',
  projectName: 'mates-ai',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-XXXXXXXXXX', // Replace with your Google Analytics ID
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Practical AI for Mates',
      logo: {
        alt: 'Practical AI Logo',
        src: 'img/favicon.png',
      },
      items: [
        {
          to: '/getting-started/prompt-writing-guide',
          label: 'Get Started',
          position: 'right',
          className: 'button button--primary',
        },
        {
          href: 'https://chat.openai.com',
          label: 'ChatGPT',
          position: 'right',
        },
        {
          href: 'https://claude.ai',
          label: 'Claude',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Quick Links',
          items: [
            {
              label: 'Get Started',
              to: '/getting-started/prompt-writing-guide',
            },
            {
              label: 'Quick Wins',
              to: '/resources/quick-wins',
            },
            {
              label: 'Prompt Library',
              to: '/prompts/overview',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'AI Tools',
              to: '/tools/chatgpt-vs-claude-vs-gemini',
            },
            {
              label: 'Security Guide',
              to: '/security/security-and-pricing',
            },
            {
              label: 'FAQs',
              to: '/resources/faqs',
            },
          ],
        },
        {
          title: 'AI Platforms',
          items: [
            {
              label: 'ChatGPT',
              href: 'https://chat.openai.com',
            },
            {
              label: 'Claude',
              href: 'https://claude.ai',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Practical AI for Mates. Written by Ollie Ayton (<a href="mailto:ollie@aytonlabs.io">ollie@aytonlabs.io</a>)`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
