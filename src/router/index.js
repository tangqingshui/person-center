import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import store from '@/store';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  if (to.meta.auth) {
    // 需要鉴权，进入鉴权流程
    const status = store.getters["loginUser/status"];
    if (status === "loading") {
      // 加载中，无法确定是否已经登录
      next({
        path: "/loginLoading",
        query: {
          returnurl: to.fullPath,
        },
      });
    } else if (status === "login") {
      // 登录过了
      next();
    } else {
      // 未登录
      alert("该页面需要登录，你还没有登录，请先登录");
      next({
        path: "/login",
        query: {
          returnurl: to.fullPath,
        },
      });
    }
  } else {
    next();
  }
})

export default router
