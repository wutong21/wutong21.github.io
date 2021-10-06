module.exports = {
  title: 'Wu Tong',
  base: '/',
  themeConfig: {
    lastUpdated: '上一次更新时间',
    nav: [
      { text: '个人简历', link: 'https://wutong21.github.io/profile/' },
      { text: 'Github', link: 'https://github.com/wutong21' },
    ],
    // sidebar: 'auto',
    sidebar: [
      {
        title: '主页',   // 必要的
        path: '/'
      },
      {
        title: '学习记录',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        // sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '../2021/bubble-sort.md',
          '../2021/quick-sort.md',
          '../2021/binary-tree.md',
        ]
      },
    ],
    search: true
  }
}