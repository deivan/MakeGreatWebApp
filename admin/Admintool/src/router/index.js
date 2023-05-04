import { createRouter, createWebHistory } from 'vue-router'
import ServerInfo from '../components/ServerInfo.vue'
import UsersView from '../views/UsersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ServerInfo
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    }
  ]
})

export default router
