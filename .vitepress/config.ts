import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "XCraft",
  description: "Hello,XCraft!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: '主页', link: '/' },
      { text: '宣传片', link: '/videos'},
      {
        text: '常用',
        items:[
          { text: '常用指令', link: '/commands'},
          { text: '常见问题', link: '/F&Q'}
        ]
      },
      { text: '关于', link: '/about' }
    ],

    sidebar: [
      {
        text: 'XCraft 指南',
        items: [
          { text: '宣传片', link: '/videos'},
          { text: '快速开始', link: '/started' },
          { text: '常用指令', link: '/commands' },
          { text: '常见问题', link: '/F&Q' },
          { text: '关于', link: '/about' }
        ]
      }
    ],

    socialLinks: [
      {
        icon: {
          svg: '<svg t="1686680217111" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1488" width="200" height="200"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" p-id="1489"></path></svg>'
        },
        link: 'https://qm.qq.com/cgi-bin/qm/qr?k=KTRRJbQ9gEPdsmy7BavNAuBQ4V1250ow&jump_from=webapi&authKey=9XVFnJl4E8mI4aEJBApqMn3O4rkt7ypOxMxeSI9GYJNCyepCx5BXrYnN3kX574iZ',
      }
    ],

    footer: {
      message: '本服务器由 <a href="https://xyun.cloud">XyunCloud</a> 强力驱动',
      copyright: 'Copyright © 2020-2023 <a href="https://xcraft.liutailin.cn">XCraft</a>. All Rights Reserved.'
    },

    editLink: {
      pattern: 'https://github.com/cn-liutailin/XCraft/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdatedText: '最近更新时间',

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})
