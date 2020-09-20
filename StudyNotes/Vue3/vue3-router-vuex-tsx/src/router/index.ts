import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about-vue',
    name: 'About-Vue',
    component: () => import(/* webpackChunkName: "about-vue" */ '../views/About.vue')
  },
  {
    path: '/about-jsx',
    name: 'About-JSX',
    // @ts-ignore
    component: () => import(/* webpackChunkName: "about-jsx" */ '../views/About.tsx')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
