<template>
  <div class="menu-container">
    <!-- 命名路由直接使用name跳转 -->
    <!-- <router-link
      v-for="item in list"
      :key="item.name"
      :to="{name: item.name, query:{name:item.name}}"
      :exact="item.exact !== false"
    >
      <Icon />
      <span>{{ item.title }}</span>
    </router-link> -->
    <div
      v-for="item in list"
      :key="item.name"
      @click="clickMenuItem(item)"
      :class="{activeMenu: activeMenu === item.name}"
    >
      <Icon />
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  props: {
    list: {
      type: Array,
      default:() => []
    }
  },
  data() {
    return {
      activeMenu: this.$route.name
    };
  },
  methods: {
    clickMenuItem(item) {
      this.activeMenu = item.name;
      this.$router.push({name: item.name, query:{name:item.name}})
    }
  },
};
</script>

<style scoped lang="scss">
@import "~@/styles/var.scss";
.menu-container {
  color: $gray;
  margin: 24px 0;
  div {
    padding:0 20px;
    display: flex;
    align-items: center;
    height: 45px;
    // &.router-link-active {
    //   background: $dark;
    // }
    
    &.activeMenu {
      background: $dark;
    }

    &:hover {
      color: #fff;
    }
    .icon-container {
      font-size: 14px;
      margin-right: 8px;
    }
  }
}
</style>
