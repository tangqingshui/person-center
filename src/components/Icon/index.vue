<template>
  <i class="iconfont icon-container" :class="iconClass"></i>
</template>

<script>
const iconTypeMap = {
  arrowLeft: 'icon-arrowleft',
  arrowRight:  'icon-arrowright',
  ellipsis: 'icon-ellipsis',
  doubleRight: 'icon-double-right',
  doubleLeft: 'icon-double-left',
  empty:'icon-empty',
  home: 'icon-home',
  github: 'icon-github',
  message: 'icon-message_light',
  about: 'icon-aboutme',
  blog: 'icon-blog',
  email: 'icon-email',
  project: 'icon-PROJECT',
  info: 'icon-information',
  error: 'icon-closed',
  success: 'icon-success',
  warn: 'icon-warn',
  arrowUp:'icon-arrowup',
  arrowDown:'icon-arrow-down'
}

export default {
  props:{
    type: {
      type: String,
      default: 'arrowLeft'
    },
  },
  computed: {
    iconClass() {
      return iconTypeMap[this.type];
    }
  }
}
</script>

<style lang="scss" scoped>
@import "//at.alicdn.com/t/c/font_4141208_1kelkbpptoo.css";
</style>