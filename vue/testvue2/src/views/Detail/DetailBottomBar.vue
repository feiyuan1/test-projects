<template>
  <div class="bottom-bar">
    <div class="bar-item">
      <Icon type="chatboxes"></Icon>
      <span>客服</span>
    </div>
    <div class="bar-item">
      <Icon type="ios-home"></Icon>
      <span>店铺</span>
    </div>
    <div class="bar-item">
      <Icon type="ios-heart"></Icon>
      <span>收藏</span>
    </div>
    <div class="bar-item">

      <span>加入购物车</span>
    </div>
    <div class="bar-item">

      <span>购买</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar"
  }
</script>

<style scoped>
  .bottom-bar{
    height: 44px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0px;
    display: flex;
  }
  .bottom-bar .bar-item{
    flex: 1;
    text-align: center;
  }
</style>