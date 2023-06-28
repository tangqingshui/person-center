<template>
  <div class="home">
    <pager :current="current" :total="400" @changePage="n => current = n"></pager>
    <empty />
  </div>
</template>

<script>
import Pager from '@/components/Pager';
import Empty from '@/components/Empty'

export default {
  components: { Pager,  Empty },
  name: 'HomeView',
  data() {
    return {
      current: 1
    }
  },
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  height: 500px;
}
</style>
