<template>
  <div>
    <h2 style="text-align: center">sell-info</h2>
    <div class="show" v-for="item in 10">
      <p>店铺名称</p>
      <p>商品名称</p>
      <p>商品评价</p>
      <p>店铺平键</p>
      <p>点赞</p>
      <p>收藏</p>
      <p>数量1</p>
      <p>数量2</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SellInfo"
  }
</script>

<style scoped>
  .show{
    display: flex;
    flex-wrap: wrap;
  }
  .show p{
    flex: 1;
    min-width: 100px;
  }
</style>
