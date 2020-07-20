<template>
  <div class="goods-item">
    <img :src="goodsItem.img" @load="loading"/>
    <p>{{goodsItem.title}}</p>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: Object || {},
    },
    methods: {
      loading(){
        this.$bus.$emit('loading')
      }
    }
  }
</script>

<style scoped>
  .goods-item{
    width: 45%;
    overflow: hidden;
    text-align: center;
    padding-bottom: 5px;
  }
  .goods-item img{
    border-radius: 10px;
  }
</style>
