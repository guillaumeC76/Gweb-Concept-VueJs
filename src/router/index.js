import { createRouter, createWebHashHistory } from 'vue-router'
import Header from '../views/Accueil.vue'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Header
  },
  {
    path: '/projet',
    name: 'Votre projet',
    component: () => import('../views/Projet.vue')
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
