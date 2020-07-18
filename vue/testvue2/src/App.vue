<template>
  <div id="app">
    <router-view/>
    <!--    底部导航-->
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from "@com/MainTabBar";
  export default {
    name: 'App',
    components: {
      MainTabBar
    },
    data(){
      return {

      }
    },
  }
</script>

<style>
  @import "./assets/css/base.css";
</style>
