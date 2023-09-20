import { createRouter, createWebHistory } from 'vue-router'

import RecommendCourse from '../components/RecommendCourse.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: RecommendCourse
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router