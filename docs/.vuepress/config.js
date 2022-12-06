import { defineUserConfig, defaultTheme  } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup'
export default defineUserConfig({
  base: '/object-process/',
  lang: 'zh-CN',
  title: 'object-process',
  description: 'obs,oss 等对象储存URL对象处理参数操作',
  head: [
    ['meta', {'http-equiv': 'X-UA-Compatible', content: 'IE=Edge'}],
    ['meta', {'name': 'renderer', content: 'webkit'}],
    ['meta', {'name': 'author', content: 'luch'}],
    ['script', {}, `
          var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?d64f5f90a8b778dcc6ae876318d0b091";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
        `]
  ],
  theme: defaultTheme({
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://github.com/lei-mu/object-process',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    // repoLabel: '查看源码',

    // 以下为可选的编辑链接选项
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'docs',
    // 默认是 false, 设置为 true 来启用
    editLink: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我改善此页面！',
    navbar: [
      {text: '首页', link: '/'},
      {text: '应用', link: '/reference/application.md'},
      {
        text: '了解更多',
        ariaLabel: '了解更多',
        children: [
          {text: '如何工作的', link: '/learn-more/how-works.md'},
          {text: '常见使用场景', link: '/learn-more/use-scenarios.md'},
        ]
      },
      {text: '更新记录', link: 'https://github.com/lei-mu/object-process/releases', target: '_blank', rel: 'nofollow noopener noreferrer'},
      {text: '博客', link: 'https://www.quanzhan.co/', target: '_blank', rel: '33'},
      // {
      //   text: 'DCloud',
      //   ariaLabel: 'DCloud',
      //   items: [
      //     {text: '插件市场', link: 'https://ext.dcloud.net.cn/plugin?id=392', target: '_blank', rel: 'nofollow noopener noreferrer'},
      //     {text: '社区', link: 'https://ask.dcloud.net.cn/question/74922', target: '_blank', rel: 'nofollow noopener noreferrer'}
      //   ]
      // }
    ],
    lastUpdated: 'Last Updated',
  }),
  plugins: [
    docsearchPlugin({
      appId: '3GCHKFUSLC',
      apiKey: 'b31889c4fb521d5df1f6d154b0859d6d',
      indexName: 'object-process'
    }),
    pwaPlugin({
      // 配置项
    }),
    pwaPopupPlugin({
      locales: {
        '/': {
          message: '发现新内容可用',
          buttonText: '刷新',
        },
        '/zh/': {
          message: '发现新内容可用',
          buttonText: '刷新',
        },
      },
    }),
  ],
})
