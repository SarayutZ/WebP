import { createRouter, createWebHistory } from 'vue-router'
import MenuQuestionVue from '@/components/MenuQuestion.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MenuQuestionVue
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
