const path = require("path");

module.exports = {
  title: "Clash for Windows",
  description: "by Fndroid",
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-128887007-2",
      },
    ],
    "@vuepress/back-to-top",
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    lastUpdated: "上次更新",
    smoothScroll: true,
    nav: [
      {
        text: "Download the APP",
        link: "https://github.com/Fndroid/clash_for_windows_pkg/releases",
      },
      {
        text: "Github",
        link: "https://github.com/Fndroid/clash-win-docs-new",
      },
    ],
    sidebar: [
      {
        title: "Clash for Windows",
        path: "/",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          "/contents/quickstart",
          "/contents/configfile",
          {
            title: "界面组成",
            path: "/contents/ui",
            children: [
              "/contents/ui/general",
              "/contents/ui/proxies",
              {
                path: "/contents/ui/profiles",
                title: "配置 Profiles",
                children: [
                  "/contents/ui/profiles/policies",
                  "/contents/ui/profiles/rules",
                ],
              },
              "/contents/ui/connections",
              "/contents/ui/logs",
              "/contents/ui/feedback",
            ],
          },
          "/contents/urlscheme",
          "/contents/bypass",
          "/contents/breakconn",
          "/contents/7z",
          "/contents/tun",
          "/contents/tap",
          "/contents/mixin",
          "/contents/parser",
          "/contents/profilespath",
          "/contents/childprocess",
          "/contents/trayicon",
          "/contents/font",
          "/contents/proxyorder",
          "/contents/header",
          "/contents/mac",
        ],
      },
    ],
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@imgs": path.resolve(__dirname, "../assets"),
      },
    },
  },
};
