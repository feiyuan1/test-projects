<template>
	<transition name="fade">
		<div style="margin-top: 50px; position: relative;">this is a test1.vue
	   <router-link to="/test1/test5" replace tag="button">test5</router-link>
	   <router-link to="/test1/test6" replace tag="button">test6</router-link>
	   <router-link to="/test1/testtest" replace tag="button">testtsetes</router-link>
		<keep-alive>
			<router-view ></router-view>
			<router-view name="test1"></router-view>
			<router-view name="test6"></router-view>
		</keep-alive>
		<div style="width:100px;height:100px;background:black"></div>
		</div>
	</transition>
	
</template>

<script>
	export default {
		name: 'APP',
		data(){
			return{
				path: ''
			}
		},
		activated(){
			this.path ? this.$router.push(this.path) : '';
		},
		beforeRouteLeave(to,from,next){
			this.path = from.path;
//			console.log(this.path)
			next()
		}
	}
</script>

<style>
</style>