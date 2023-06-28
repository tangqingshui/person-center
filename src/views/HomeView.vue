<template>
  <div class="home">
    <pager :current="current" :total="400" @changePage="n => current = n"></pager>
    <empty />
    <div  class="site-aside">
      <site-aside></site-aside>
    </div>
  </div>
</template>

<script>
import Pager from '@/components/Pager';
import Empty from '@/components/Empty'
import SiteAside from '@/components/SiteAside'

export default {
  components: { Pager,  Empty,  SiteAside},
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
}
.site-aside {
  width: 300px;
  height: 900px;
}
</style>
