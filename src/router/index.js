import Vue from 'vue'
import VueRouter from 'vue-router'
import leftNav from './modules/leftNav'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/componentsView',
  },
  {
    path: '/leftMain',
    component: () => import('@/layout/leftMain/index.vue')
  },
  {
    path: '/topMain',
    component: () => import('@/layout/topMain/index.vue')
  },
  {
    path: '/contentMain',
    component: () => import('@/layout/contentMain/index.vue')
  },
  {
    path: '/componentsView',
    component: () => import('@/layout/index.vue'),
    redirect:'/home',
    children:[
      ...leftNav
    ],
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
