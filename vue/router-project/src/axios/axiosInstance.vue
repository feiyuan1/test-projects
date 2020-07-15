<template>
</template>

<script>
	import {instance1,request} from '@/network/request'
	export default {
		name: 'axiosMany',
		created(){
//			let instance = this.$http.create({
//				url: 'http://httpbin.org'
//			})
//			instance().then(
//				data => {
//					console.log(data)					
//				}
//			).catch( err => {
//				console.log(err)
//			})
			instance1.then( data => {
				console.log(data)
			}).catch( err => {
				console.log(err)
			})
			
			request().then( data => {
				console.log(data)
			}).catch( err => {
				console.log(err)
			})
		}
	}
</script>

<style>
</style>