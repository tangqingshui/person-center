<template>
  <pager :current="currentPage" @changePage="n => currentPage = n" :total="500"></pager>
</template>

<script>
import Pager from './index.vue'
export default {
  components: { Pager },
  data() {
    return {
      currentPage: 1,
    }
  },
}
</script>

<style>

</style>