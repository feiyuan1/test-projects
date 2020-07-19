<template>
	<div class="banner-img"  @touchstart="start" @touchmove="pause" @touchend="goOn">
		<banner-img-item :left="((key + slide) < -1 ? length - 2 : key + slide) * 100 + move" :imgSrc="item" v-for="(item,key) in srcs" ref="item"/>
	</div>
</template>

<script>
	import BannerImgItem from '@com/banner/BannerImgItem'
	
	export default {
		name: 'BannerImg',
		props: {
			srcs: Array || []
		},
		data(){
			return {
				timer: null,
				slide: 0,
				startX: 0,
				move: 0,
			}
		},
		components: {
			BannerImgItem
		},
		methods: {
			//定时器  鼠标移到图片 定时器消失  手动翻页：移动1/3就可以  translate
			
			tranLeft(){
				this.timer = setInterval(() => {
					this.slide = (this.slide - 1) % this.length;
				},1000)
			},
			start(ev){
				let tar = ev.touches[0] || ev;
				this.startX = tar.clientX;
			},
			pause(ev){
				console.log('cancel')
				//停止自动播放
				clearInterval(this.timer)
				//允许拖动
				let tar = ev.touches[0] || ev;
				this.move = tar.clientX - this.startX;
//				console.log(this.move)
			},
			goOn(ev){
				console.log('goon')
				//记录 并 判断 移动距离 --》left+1？
				let parWidth = this.$refs.item[0].$el.offsetWidth;
				if((Math.abs(this.move) / parWidth) > 0.3){
					this.slide = (this.slide - 1) % this.length;
				}
				this.move = 0;
				//恢复自动
				this.tranLeft();
			},
		},
		created(){
			this.tranLeft();
		},
//		watch: {
//			slide(num){
//				if(num < 0){
//					this.slide = this.length - 1;
//				}
//			}
//		},
		computed: {
			length(){
				return this.srcs.length;
			},
			
		},
	}
</script>

<style scoped>
	.banner-img{
		position: relative;
		height: 100%;
		overflow: hidden;
	}
</style>