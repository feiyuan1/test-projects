<template>
  <nav-bar>
    <Icon type="ios-arrow-back" slot="left" class="left" @click="backHome"/>
    <div slot="center">购物车({{num}})</div>
  </nav-bar>
</template>

<script>
  import NavBar from "@com/NavBar";

  export default {
    name: "CartNavBar",
    props: {
      num: Number || 0,
    },
    components: {
      NavBar,
    },
    methods: {
      backHome(){
        this.$router.back()
      },
    },
  }
</script>

<style scoped>
  .left{
    font-size: 20px;
  }
</style>
