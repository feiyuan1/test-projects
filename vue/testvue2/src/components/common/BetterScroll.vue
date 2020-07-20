<template>
  <div class="wrapper" ref="BScroll">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "BetterScroll",
    mounted() {
      let scroll = new BScroll(this.$refs.BScroll,{
        //监听滚动类型
        //1||0:不监听  2：只监听手动滑动 不监听惯性  3：全部监听
        probeType: 3,
      //  上拉加载
        pullUpLoad: true,
        click:true,
      })
      scroll.on('scroll',(pos) => {
        // console.log(pos)
      })
      scroll.on('pullingUp',() => {
        console.log('shanglajiazaigou')
        scroll.finishPullUp()
      })
    }
  }
</script>

<style scoped>
  .wrapper{
    height: calc(100vh - 49px - 44px);
    overflow: hidden;
    margin-top: 45px;
  }
</style>
