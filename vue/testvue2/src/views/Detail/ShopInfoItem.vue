<template>
  <div>
    <img :src="imgSrc"/>
  </div>
</template>

<script>
  export default {
    name: "ShopInfoItem",
    props: {
      imgSrc: String || '',
    },
  }
</script>

<style scoped>
  img{
    width: 95%;
  }
</style>
