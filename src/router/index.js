import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('/src/views/Home/index.vue')
const Mine = () => import('/src/views/Mine/index.vue')

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