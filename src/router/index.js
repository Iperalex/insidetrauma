import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Formazione from '../views/Formazione.vue'
import Faculty from '../views/Faculty.vue'
import Contatti from '../views/Contatti.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/formazione',
    name: 'Formazione',
    component: Formazione
  },

  {
    path: '/faculty',
    name: 'Faculty',
    component: Faculty
  },
  
  {
    path: '/contatti',
    name: 'contatti',
    component: Contatti
  },
]

const router = new VueRouter({
  routes
})

export default router
