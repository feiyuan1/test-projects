<template>
  <div id="app">
    <keep-alive exclude="Detail,CartIndex">
      <router-view/>
    </keep-alive>
    <!--    底部导航-->
    <main-tab-bar v-show="$route.path == '/Home' || $route.path == '/Cart' || $route.path == '/Category' || $route.path == '/Profile'"/>
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
