<template>
  <div id="app">
<!--    底部导航-->
    <tab-bar>
      <tab-bar-item :content="'首页'" :type="'md-home'"/>
      <tab-bar-item :content="'分类'" :type="'ios-apps'"/>
      <tab-bar-item :content="'购物车'" :type="'ios-basket-outline'"/>
      <tab-bar-item :content="'我的'" :type="'md-contact'"/>
    </tab-bar>
  </div>
</template>

<script>
  import tabBar from "@con/tabBar/tabBar";
  import tabBarItem from "@con/tabBar/tabBarItem";
  export default {
    name: 'App',
    components: {
      tabBar,
      tabBarItem
    }
  }
</script>

<style>
  @import "./assets/css/base.css";
</style>
