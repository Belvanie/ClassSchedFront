import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Plannifier from '../views/Plannifier.vue'
import Planning from '../views/Planning.vue'
import Home from '../views/Home.vue'
import Reservations from '../views/Reservations.vue'
import Reserver from '../views/Reserver.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/plannifier/',
    name: 'plannifier',
    component: Plannifier
  },
  {
    path: '/planning/',
    name: 'planning',
    component: Planning
  },
  {
    path: '/accueil/',
    name: 'home',
    component: Home
  },
  {
    path: '/reservations/',
    name: 'reservations',
    component: Reservations
  },
  {
    path: '/reserver/',
    name: 'reserver',
    component: Reserver
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router