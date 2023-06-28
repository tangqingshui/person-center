<template>
  <icon :type="type" @mouseleave.native="type = 'ellipsis'" @mouseenter.native="type = isLeftArrow ? 'doubleLeft' : 'doubleRight'" class="page-icon-container"></icon>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: { Icon },
  props: {
    isLeftArrow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      type: 'ellipsis'
    };
  },
}
</script>

<style lang="scss" scoped>
</style>