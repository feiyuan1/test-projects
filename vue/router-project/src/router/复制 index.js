import Vue from 'vue'
import VueRouter from 'vue-router'
import test1 from '@/views/test1.vue'
import test2 from '@/views/test2.vue'
import test3 from '@/views/test3.vue'
Vue.use(VueRouter)

  const routes = [
  	{
  		path:'',
  		redirect:'/test1'
  	},
	  {
	  	name: 'test1',
	  	path: '/test1',
	  	component: test1
	  },
	  {
	  	name: 'test2',
	  	path: '/test2',
	  	component: test2
	  },
	  {
	  	name: 'test3',
	  	path: '/test3/:userId',
	  	component: test3,
	  },
	  {
	  	name: 'test4',
	  	path: '/test4',
	  	component: () => import('@/views/test4.vue'),
	  }
	]

const router = new VueRouter({
	mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
