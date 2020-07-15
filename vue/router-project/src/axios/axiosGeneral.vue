<template>
	
</template>

<script>
	export default {
		name: 'axiosGeneral',
		created(){
			this.$http({
				url:'http://httpbin.org',
				//改变请求方式
				method: 'get',
				params: {
					name: 'pzq',
					age: 'qqq'
				}
			}).then( data => {
				console.log(data)
			}).catch( err => {
				console.log(err)
			})
			this.$http.get('http://httpbin.org',{
				params: {
					name: 'sdafd'
				}
			}).then( data => {
				console.log(data)
			}).catch( err => {
			  console.log(err)
			})
		},
	}
</script>

<style>
</style>