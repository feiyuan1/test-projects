<template>
</template>

<script>
	export default {
		name: 'axiosInstance',
		created(){
			this.$http.defaults.url = 'http://httpbin.org'
			this.$http().then( data => {
				console.log(data)
			}).catch( err => {
				console.log(err)
			})
		}
	}
</script>

<style>
</style>