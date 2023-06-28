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
  empty:'icon-empty'
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
@import "//at.alicdn.com/t/c/font_4141208_fnt6v4njlqc.css";
</style>