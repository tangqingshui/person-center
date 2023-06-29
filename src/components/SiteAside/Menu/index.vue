<template>
  <div class="menu-container">
    <!-- 命名路由直接使用name跳转 -->
    <router-link
      v-for="item in list"
      :key="item.name"
      :to="{name: item.name, query:{name:item.name}}"
      :exact="item.exact !== false"
    >
      <Icon />
      <span>{{ item.title }}</span>
    </router-link>
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
    };
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
@import "~@/styles/var.scss";
.menu-container {
  color: $gray;
  margin: 24px 0;
  a {
    padding:0 20px;
    display: flex;
    align-items: center;
    height: 45px;
    &.router-link-active {
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
