import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('@views/Home/index.vue')
const Mine = () => import('@views/Mine/index.vue')

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/mine',
    component: Mine
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router