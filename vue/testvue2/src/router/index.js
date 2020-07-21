import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '',
      redirect: '/Home'
    },
    {
      path: '/Home',
      component: () => import('@view/Home/index'),
    },
    {
      path: '/Detail/:title',
      component: () => import('@view/Detail/Detail')
    },
    {
      path: '/Category',
      component: () => import('@view/Category/index')
    },
    {
      path: '/Cart',
      component: () => import('@view/Cart/index')
    },
    {
      path: '/Profile',
      component: () => import('@view/Profile/index')
    },

  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
