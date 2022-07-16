import { defineConfig } from 'vitepress';
import { version } from '../../package.json'

export default defineConfig({
  lang: 'en-US',
  title: 'Better Widgets',
  description: 'Useful widgets for your next Flutter App',

  lastUpdated: true,

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/widgets/': sidebarGuide(),
      '/config/': sidebarConfig()
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/timeTravelCYN/better-widgets' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present CYN'
    },

    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress'
    }
  }
})

function nav() {
  return [
    { text: 'Widgets', link: '/widgets/why-this-repo', activeMatch: '/Widgets/' },
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: '初心', link: '/widgets/why-this-repo' },
      ]
    }
  ]
}

function sidebarConfig() {
  return [
    {
      text: 'Config',
      items: [
        { text: 'Introduction', link: '/config/introduction' },
        { text: 'App Configs', link: '/config/app-configs' },
        { text: 'Theme Configs', link: '/config/theme-configs' },
        { text: 'Frontmatter Configs', link: '/config/frontmatter-configs' }
      ]
    }
  ]
}
