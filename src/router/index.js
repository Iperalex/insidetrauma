import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contatti',
    name: 'contatti',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Contatti" */ '../views/Contatti.vue')
  },
  {
    path: '/faculty',
    name: 'faculty',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Faculty" */ '../views/Faculty.vue')
  },
  {
    path: '/formazione',
    name: 'formazione',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Fromazione" */ '../views/Formazione.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
