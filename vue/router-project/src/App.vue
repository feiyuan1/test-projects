<template>
  <div id="app">
  	<div style="position: fixed;">
  		
    <router-link to="/test1" replace tag="button">test1</router-link>|||
    <router-link to="/test2" replace tag="button">test2</router-link>
    <!--动态路由-->
    <router-link to="/test3/pzq" replace tag="button">test3</router-link>
   <!--路由的懒加载-->
   <router-link to="/test4" replace tag="button">test4</router-link>
   <router-link :to="{path:'/query',query:{id:'pzq',name:'feiyuan'}}" replace tag="button">query</router-link>
    <button @click="test1()">test1</button>
    <button @click="test2()">teset2</button>
    <button @click="query()">query</button>
  	</div>
  	<!--<axios-general></axios-general>-->
  	<!--<axios-many></axios-many>-->
  	<!--<axios-global></axios-global>-->
  	<axios-instance></axios-instance>
  	<!--<interceptor></interceptor>-->
    <keep-alive >
    	<transition :name="transitionName">
	    	<router-view />    	  		
    	</transition>
    </keep-alive>
  </div>
</template>

<script>
	import axiosGeneral from '@/axios/axiosGeneral'
	import axiosMany from '@/axios/axiosMany'
	import axiosGlobal from '@/axios/axiosGlobal'
	import axiosInstance from '@/axios/axiosInstance'
//	import interceptor from '@/axios/interceptor'
	export default {
		name: 'APP',
		components: {
			axiosGeneral,
			axiosMany,
			axiosGlobal,
			axiosInstance,
//			interceptor,
		},
		data(){
			return{
				path: '',
				transitionName: 'fade',
			}
		},
		watch:{
			'$route'(to,from){
				if(to.path == '/test2'){
//					console.log('to test2')
					this.transitionName = 'slide-left';
//					console.log(this.transitionName)
				}
			}
		},
		methods:{
			test1(){
				this.$router.replace('/test1')
			},
			test2(){
				this.$router.replace('/test2')
			},
			query(){
				this.$router.push({
					path: '/query',
					query:{
						age: 19,
						num: 0,
						data: 'this is test data'
					}
				})
			}
		},
		activated(){
			this.path ? this.$router.push(this.path) : '';
		},
		beforeRouteLeave(to,from,next){
			this.path = from.matched[0].path;
			console.log(this.path)
			next()
		}
	}
</script>

<style>
	.router-link-active{
		color: red;
	}

</style>
