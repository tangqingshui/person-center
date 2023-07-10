export const children = [
  {
    path: 'about',
    name: 'about',
    component: () => import('@/views/About'),
  },
  {
    path: 'project',
    name: 'project',
    component: () => import('@/views/Project'),
  },
  {
    path: 'message',
    name: 'message',
    component: () => import('@/views/Message'),
  },
  {
    path: 'blog',
    name: 'blog',
    component: () => import('@/views/Blog'),
    exact: false,
    meta: {
      auth: true,
    }
  },
  {
    name: "categoryBlog",
    path: "/article/cate/:categoryId",
    component: () => import('@/views/Blog'),
  },
  { 
    name: "blogDetail", 
    path: "/article/:id", 
    component: () => import('@/views/Blog/Detail.vue'), },
  {
    path: 'home',
    name: 'home',
    component: () => import('@/views/Home'),
  },
  {
    path: '/',
    redirect: '/home'
  },
]
export const routes = [
  {
    path: '/',
    component: () => import('@/views/index.vue'),
    children
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login'),
  },
  {
    path: '/loginLoading',
    name: 'loginLoading',
    component: () => import('@/views/Login/Loading.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue'),
  },
  {
    path: '*',//匹配未定义的路由
    redirect: '/404'//重定向
  }
]


