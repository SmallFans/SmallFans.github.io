const path = require('path')
module.exports = {
  lang: 'zh-CN',
  title: 'fans 个人博客',
  description: 'Just playing around',
  palette: path.resolve(__dirname, 'palette.styl'),
  markdown: {
    lineNumbers: true,
    anchor: { permalink: false }
  },
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    nav: [ // 导航栏
      {text: '主页', link: '/'}
    ],
    // 在sidebar配置侧导航栏
    sidebar: [
      {
        title: '前端',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          { title: 'test1', path: '/vue/' },
          { title: 'test', path: '/vue/nextTick' }
        ]
      }
    ]
  }
}