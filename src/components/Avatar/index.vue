<template>
  <img class="avatar-container" :src="url" :style="{width: `${size}px`, height: `${size}px`}"/>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 200,
    },
  }
}
</script>

<style lang="scss" scoped>
.avatar-container {
  border-radius: 50%;
  object-fit: cover;
  font-size: 0;
  display: block;
}
</style>