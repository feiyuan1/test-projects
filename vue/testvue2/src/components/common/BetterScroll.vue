<template>
  <div class="wrapper" ref="BScroll" :style="{height: height}">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "BetterScroll",
    props: {
      probeType: Number || 0,
      pullUpload: Boolean || false,
      height: {
        type: String,
        default: 'calc(100vh - 49px - 44px)',
      },
    },
    data(){
      return {
        scroll: null
      }
    },
    methods: {
      scrollTo(x,y,time=500){
        this.scroll.scrollTo(x,y,time)
      },
      refresh(){
        this.scroll.refresh()
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.BScroll,{
        //监听滚动类型
        //1||0:不监听  2：只监听手动滑动 不监听惯性  3：全部监听
        probeType: this.probeType,
      //  上拉加载
        pullUpLoad: this.pullUpload,
        click:true,
      })
      this.scroll.on('scroll',(pos) => {
        this.$emit('scroll',pos)
      })
      this.scroll.on('pullingUp',() => {
        console.log('shanglajiazaigou')
        this.$emit('pullingUp')
        this.scroll.finishPullUp()
      })
    }
  }
</script>

<style scoped>
  .wrapper{
    overflow: hidden;
    margin-top: 45px;
    /*position: relative;*/
  }
</style>
