<template>
  <div class="goods-item" @click="detail">
    <img v-lazy="goodsItem.img" @load="loading"/>
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
      },
      detail(){
        this.$router.push('/Detail/' + this.goodsItem.title)
      },
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
