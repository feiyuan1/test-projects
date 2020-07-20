<template>
	<div class="banner">
		<banner-img :srcs="srcs"/>
		<banner-indicator />
	</div>
</template>

<script>
	import BannerImg from '@con/banner/BannerImg';
	import BannerIndicator from './BannerIndicator';
	
	export default {
		name: 'Banner',
		data(){
			return {
				srcs: [
					'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVLFvKoH9wFtlpyoHBMu6N5XtJMe_8vACCRg&usqp=CAU',
					'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRr05BfGHVY074xQ56l6u4hY5wuHpJO3Bum2g&usqp=CAU',
					'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFfsihwREfA0_gQgZgHgx_SIPMaS7CSfYTBQ&usqp=CAU',
					'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMs8L3mt08cARmbDCcZUoDitf5x9SIr_iw7w&usqp=CAU'
				]
			}
		},
		components: {
			BannerImg,
			BannerIndicator
		},
	}
</script>

<style scoped>
	.banner{
		margin-top: 44px;
		height: 150px;
	}
</style>