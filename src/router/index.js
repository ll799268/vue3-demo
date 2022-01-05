import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('@views/Home/index.vue')
const Mine = () => import('@views/Mine/index.vue')
const ToDoList = () => import('@views/ToDoList/index.vue')

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/toDoList',
    component: ToDoList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router