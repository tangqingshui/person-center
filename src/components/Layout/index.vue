<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
 mounted() {
  console.log(111);
 }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixins.scss";
.layout-container {
  @include self-fill(fixed);
  display: flex;
  .main {
    flex: 1;
    overflow: hidden;
  }
}
</style>