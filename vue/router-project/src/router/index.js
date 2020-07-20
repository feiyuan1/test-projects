import VueRouter from 'vue-router'
import Vue from 'vue'
import test1 from '@/views/test1.vue'
import test2 from '@/views/test2.vue'
import test3 from '@/views/test3.vue'

Vue.use(VueRouter)
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};
const routes = [
		{
  		path:'',
  		redirect:'/test1'
  	},
	  {
	  	name: 'test1',
	  	path: '/test1',
	  	meta: {
	  		title: 'test1'
	  	},
	  	component: test1,
	  	children: [
	  		{
	  			path: '',
	  			redirect: 'test5'
	  		},
	  		{
	  			path: 'test5',
	  			component: () => import('@/views/test5.vue')
	  		},
	  		{
	  			path: 'test6',
	  			component: () => import('@/views/test6.vue')
	  		},
	  		{
	  			path: 'testttest',
	  			components:{
	  				default: import('@/views/test5.vue'),
	  				tset1: import('@/views/test5.vue'),
	  				test6: import('@/views/test6.vue'),
	  			}
	  		}
	  	]
	  },
	  {
	  	name: 'test2',
	  	path: '/test2',
	  	component: test2,
	  	meta: {
	  		title: 'test2'
	  	},
	  },
	  {
	  	name: 'test3',
	  	path: '/test3/:userId',
	  	component: test3,
	  	meta: {
	  		title: 'test3'
	  	},
	  },
	  {
	  	name: 'test4',
	  	path: '/test4',
	  	component: () => import('@/views/test4.vue'),
	  	meta: {
	  		title: 'test4'
	  	},
	  },
	  {
	  	name: 'query',
	  	path: '/query',
	  	component: () => import('@/views/query.vue'),
	  	meta: {
	  		title: 'query'
	  	},
	  	beforeEnter(to,from,next){
//	  		console.log('this is query route');
//	  		console.log(to)
//	  		console.log(from)
	  		next();
	  	}
	  }
]
const router = new VueRouter({
	routes,
	mode: 'history',
	scrollBehavior (to,from,savedPosition){
		console.log(to)
		 if (savedPosition) {
		 	console.log(savedPosition)
	    return savedPosition
	  } else {
//	  	console.log(to..pos=1)
	    from.matched[0].pos = { x: document.scrollingElement.scrollLeft, y: document.scrollingElement.scrollTop };
	    if(to.matched[0].pos){
	    	return to.matched[0].pos
	    }else{
	    	return {}
	    }
	  }
		}
})

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
   
router.beforeEach((to,from,next) => {
	document.title = to.matched[0].name
//	document.title = to.name
	next()
})

export default router
