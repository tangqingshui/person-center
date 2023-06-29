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
  },

]
export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    children
  },
]


