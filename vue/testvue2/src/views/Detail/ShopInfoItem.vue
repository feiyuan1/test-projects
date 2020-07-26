<template>
  <div>
    <img :src="imgSrc" @load="load"/>
  </div>
</template>

<script>
  export default {
    name: "ShopInfoItem",
    props: {
      imgSrc: String || '',
    },
    methods: {
      load(){
        this.$emit('load')
      },
    }
  }
</script>

<style scoped>
  img{
    width: 95%;
  }
</style>
