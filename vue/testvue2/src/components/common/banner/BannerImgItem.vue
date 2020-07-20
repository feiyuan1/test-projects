<template>
	<div class="">
			<img :src="imgSrc" :style="translate"/>
	</div>
</template>

<script>
	export default {
		name: 'BannerImgItem',
		props: {
			imgSrc: String || '',
			left: Number || 0,
		},
		computed: {
			translate(){
				return {transform: 'translateX(' + this.left + '%)',transition:'all 1s'};
			}
		}
	}
</script>

<style scoped>
	img{
		z-index: -10;
		width: 100%;
		height: 130px;
		position: absolute;
	}
</style>