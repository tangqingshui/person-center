<template>
  <div class="views-container">
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
    <ToTop />
  </div>
</template>

<script>
import Pager from '@/components/Pager';
import Empty from '@/components/Empty'
import SiteAside from '@/components/SiteAside'
import Layout from '@/components/Layout'
import ToTop from "@/components/ToTop";

export default {
  components: { Pager, Empty, SiteAside, Layout, ToTop },
  name: 'HomeView',
  data() {
    return {
      current: 1,
    }
  },
}
</script>

<style lang="scss" scoped>
.views-container {
  width: 100%;
  height: 100%;
  .left {
    width: 300px;
    height: 100%;
  }
}
</style>
