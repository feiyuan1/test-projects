<template>
  <div>
    <div class="shop-info">
      <h2>shop-info</h2>
      <shop-info-item
              :imgSrc="item"
              v-for="(item,key) in srcs"
              ref="item"/>
    </div>
  </div>
</template>

<script>
  import ShopInfoItem from "./ShopInfoItem";
  export default {
    name: "ShopInfo",
    data() {
      return {
        srcs: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVLFvKoH9wFtlpyoHBMu6N5XtJMe_8vACCRg&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRr05BfGHVY074xQ56l6u4hY5wuHpJO3Bum2g&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFfsihwREfA0_gQgZgHgx_SIPMaS7CSfYTBQ&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMs8L3mt08cARmbDCcZUoDitf5x9SIr_iw7w&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIVAyGnnlYn33mjumpMay6o0H_PIB4oa-Ncw&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8uFH7Qiwzwmazv8cV6uDwydk-5PEHX4vbFg&usqp=CAU'
        ]
      }
    },
    components: {
      ShopInfoItem
    }
  }
</script>

<style scoped>
  .shop-info{
    text-align: center;
  }
</style>
