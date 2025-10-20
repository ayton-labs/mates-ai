import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'doc',
      id: 'introduction',
      label: 'Home',
    },
    {
      type: 'category',
      label: 'Quick Wins',
      items: ['resources/quick-wins'],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/ai-101-basics',
        'getting-started/first-week-guide',
        'getting-started/prompt-writing-guide',
        'guides/voice-mode-tricks',
        'guides/deep-research',
      ],
    },
    {
      type: 'category',
      label: 'Daily Essentials',
      items: [
        'daily-essentials/email-management',
        'daily-essentials/document-processing',
        'daily-essentials/meeting-management',
      ],
    },
    {
      type: 'category',
      label: 'Prompt Library',
      items: [
        'prompts/overview',
        'prompts/email-communication',
        'prompts/document-processing',
        'prompts/data-analysis',
        'prompts/content-creation',
        'prompts/operations-admin',
      ],
    },
    {
      type: 'category',
      label: 'Use Cases',
      items: [
        'use-cases/hiring-recruiting',
        'use-cases/competitive-research',
        'use-cases/financial-modeling',
        'use-cases/client-deliverables',
      ],
    },
    {
      type: 'category',
      label: 'Tools & Software',
      items: [
        'tools/chatgpt-vs-claude-vs-gemini',
        'tools/specialized-ai-tools',
      ],
    },
    {
      type: 'category',
      label: 'Industry Playbooks',
      items: [
        'getting-started/real-estate-ai-playbook',
        'getting-started/sales-ai-playbook',
        'getting-started/consulting-ai-playbook',
        'getting-started/founder-ai-playbook',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Guides',
      items: [
        'guides/chatgpt-projects',
        'guides/custom-gpts',
        'guides/ai-workflows',
        'guides/ai-agents',
      ],
    },
    {
      type: 'category',
      label: 'Security & Best Practices',
      items: ['security/security-and-pricing'],
    },
    {
      type: 'category',
      label: 'Resources',
      items: ['resources/faqs'],
    },
  ],
};

export default sidebars;
