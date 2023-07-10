import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "http://www.duyiedu.com/source/img/logo.png",
    siteTitle: "我的个人空间",
    contacts: [
      {
       desc: 'tangQingShui',
       icon: "github",
      },
      {
        desc: '912718496@qq.com',
        icon: 'email'
      },
    ],
    menus: [
      {
        name: "home",
        title: "首页",
        icon: "home",
      },
      {
        name: "blog",
        title: "文章",
        icon: "blog",
        startWith: true, // 只要当前路径以link开头，当前菜单就是选中的
      },
      {
        name: "about",
        title: "关于我",
        icon: "about",
      },
      {
        name: "project",
        title: "demo",
        icon: "project",
      },
      {
        name: "message",
        title: "留言板",
        icon: "message",
      },
    ],
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});
