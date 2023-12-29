import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import("@/views/PortfolioView.vue")
    }
  ]
})

export default router
