<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" :goodsItem="item"/>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
  export default {
    name: "GoodsList",
    props: {
      goods: Array || [],
    },
    components: {
      GoodsListItem
    },
  }
</script>

<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
