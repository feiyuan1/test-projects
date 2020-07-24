<template>
	<div class="">
      <img :src="imgSrc" :style="translate" @transitionend="end" @load="load"/>
	</div>
</template>

<script>
	export default {
		name: 'BannerImgItem',
		props: {
			imgSrc: String || '',
			left: Number || 0,
		},
    data(){
		  return {
		    // flag: false,
      }
    },
    methods: {
		  end(){
		    // console.log(this.imgSrc)
		    // console.log(this.left)
      },
      load(){
        this.$emit('bannerLoad')
      }
    },
		computed: {
			translate(){
			  // console.log(this.left)
				return {transform: 'translateX(' + this.left + '%)',transition:'all 2s',display: this.left == 200 ? 'none':'inline-block' };
			}
		}
	}
</script>

<style scoped>
	img{
		width: 100%;
		height: 130px;
		position: absolute;
	}
</style>
