<template>
  <div class="empty-container">
    <Icon type="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: '暂无数据'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/var.scss";
@import "~@/styles/mixins.scss";
.empty-container {
  @include self-center();
  text-align: center;
  color: $gray;

  .icon-container {
    color: inherit;
    font-size: 100px;
  }
}
</style>