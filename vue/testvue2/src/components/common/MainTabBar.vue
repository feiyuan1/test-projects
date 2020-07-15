<template>
  <tab-bar>
    <tab-bar-item content="首页" type="md-home" path="/Home" activeColor="firebrick"/>
    <tab-bar-item content="分类" type="ios-apps" path="/Category" activeColor="#42b983"/>
    <tab-bar-item content="购物车" type="ios-basket-outline" path="/Cart" activeColor="burlywood"/>
    <tab-bar-item content="我的" type="md-contact" path="/Profile" activeColor="mediumslateblue"/>
  </tab-bar>
</template>

<script>
  import tabBar from "@con/tabBar/tabBar";
  import tabBarItem from "@con/tabBar/tabBarItem";
  export default {
    name: "MainTabBar",
    components: {
      tabBar,
      tabBarItem
    },
  }
</script>

<style scoped>

</style>
