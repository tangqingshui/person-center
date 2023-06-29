<template>
  <div class="home-container">
    <Layout>
      <template #left>
        <div class="left">
          <site-aside></site-aside>
        </div>
      </template>
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view />
      </keep-alive>
      <router-view v-else />
    </Layout>
  </div>
</template>

<script>
import Pager from '@/components/Pager';
import Empty from '@/components/Empty'
import SiteAside from '@/components/SiteAside'
import Layout from '@/components/Layout'

export default {
  components: { Pager, Empty, SiteAside, Layout },
  name: 'HomeView',
  data() {
    return {
      current: 1
    }
  },
}
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100%;

  .left {
    width: 300px;
    height: 100%;
  }
}
</style>
