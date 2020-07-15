<template>
</template>

<script>
	export default {
		name: 'axiosMany',
		created(){
			let _this = this;
			this.$http.all([ this.$http({
				url: 'http://httpbin.org'
			}), this.$http({
				url: 'http://httpbin.org'
			})]).then(
				this.$http.spread( (data1,data2) => {
					console.log(data1, 'balbalaba')
					console.log(data2)
				})
			).catch( err => {
				console.log(err)
			})
		}
	}
</script>

<style>
</style>