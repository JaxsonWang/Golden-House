import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
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
    component: () => import(/* webpackChunkName: "about-jsx" */ '../views/About.jsx')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
