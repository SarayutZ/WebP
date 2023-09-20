import { createRouter, createWebHistory } from 'vue-router'

import RecommendBooksVue from '@/components/RecommendBooks.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: RecommendBooksVue
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
