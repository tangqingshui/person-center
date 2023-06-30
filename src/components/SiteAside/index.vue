<template>
  <div class="site-aside-container">
    <Avatar :url="userImg" />
    <h1 class="title">清水</h1>
    <Menu :list="menus"/>
    <Contact :list="contacts"/>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";

export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  data() {
    return {
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
      userImg: require('@/assets/user.jpg'),
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/var.scss";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: rgba($color: $dark, $alpha: 0.9);
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-container {
 margin: 0 auto;
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>
