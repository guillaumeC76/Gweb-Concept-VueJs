import { createRouter, createWebHashHistory } from 'vue-router'
import Header from '../views/Kliker.vue'

const routes = [
  {
    path: '/',
    name: 'Kliker',
    component: Header
  },
  {
    path: '/carte_a_suivre',
    name: 'Carte à suivre',
    component: () => import('../views/Carte_a_suivre.vue')
  },
  {
    path: '/solution',
    name: 'Notre solution',
    component: () => import('../views/Solution.vue')
  },
  {
    path: '/offres',
    name: 'Nos offres',
    component: () => import('../views/Offres.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
