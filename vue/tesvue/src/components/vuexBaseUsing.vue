<template>
	<div>
		<h1>test1-----vuex基本使用</h1>
		<p>{{$store.state.count}}</p>
		<button @click="add">++</button>
		<h1>test2-----getters基本使用</h1>
		<p>平方：{{$store.getters.pingf}}</p>
		<p>加5：{{$store.getters.pingf1(5)}}</p>
		<h1>test3-----mutations usually params</h1>
		<p>{{$store.state.count}}</p>
		<button @click="fun">++</button>
		<h1>test4-----mutations unusually params</h1>
		<p>{{$store.state.count}}</p>
		<button @click="fun1">++</button>
		<h1>test5-----mutations 类型常量</h1>
		<p>{{$store.state.count}}</p>
		<button @click="fun21">类型常量</button>
		<h1>test5-----动态修改state</h1>
		<p>{{$store.state.name}}</p>
		<button @click="fun3">change</button>
		<h1>test5-----动态修改state</h1>
		<p>{{$store.state}}</p>
		<button @click="fun4">delete</button>
		<h1>test5-----异步操作</h1>
		<p>{{$store.state}}</p>
		<button @click="fun5">add</button>
	</div>	
</template>

<script>
	import {fun2} from '@/store/const.js'
	export default {
		name: 'baseUsing',
		methods:{
			add(){
				this.$store.commit('add')
			},
			fun(){
				this.$store.commit('fun','this is fun1')
			},
			fun1(){
				this.$store.commit('fun1',{num:100})
			},
			fun21(){
				this.$store.commit(fun2)
			},
			fun3(){
				this.$store.commit('fun3')
			},
			fun4(){
				this.$store.commit('fun4')
			},
			fun5(){
				this.$store.dispatch('asyfun','asyfun').then(() => {
					console.log('操作完成')
				})
			}
		}
	}
</script>

<style>
</style>