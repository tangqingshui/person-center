<template>
  <div class="site-aside-container">
    <template v-if="data">
      <Avatar :url="userImg" />
      <h1 class="title">{{ data.siteTitle }}</h1>
      <Menu :list="data.menus"/>
      <Contact :list="data.contacts"/>
    </template>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import { mapState } from "vuex";

export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  data() {
    return {
      userImg: require('@/assets/user.jpg'),
    }
  },
  computed: mapState("setting", ["data"]),
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
