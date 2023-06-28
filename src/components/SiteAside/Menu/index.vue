<template>
  <div class="menu-container">
    <a
      v-for="item in list"
      :key="item.link"
      :href="item.link"
      :class="{
        selected: isSelected(item),
      }"
    >
      <Icon />
      <span>{{ item.title }}</span>
    </a>
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
    isSelected(item) {
      var link = item.link.toLowerCase(); // 菜单的链接地址
      var curPathname = location.pathname.toLowerCase(); // 当前浏览器的访问路径
      if (item.startWith) {
        return curPathname.startsWith(link);
      } else {
        return curPathname === link;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "~@/styles/var.scss";
.menu-container {
  color: $gray;
  margin: 24px 0;
  a {
    &.selected {
      background: $dark;
    }
    display: flex;
    align-items: center;
    height: 45px;

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
