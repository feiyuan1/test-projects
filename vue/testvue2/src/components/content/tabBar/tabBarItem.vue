<template>
    <div class="tab-bar-item">
      <Icon :type="type" />
      <div>{{content}}</div>
    </div>
</template>

<script>
  export default {
    name: "tabBarItem",
    props: {
      type: String || "ios-menu-outline",
      content: String || '内容'
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    text-align: center;
    flex: 1;
    font-size: 12px;
  }
  .tab-bar-item i{
    font-size: 24px;
    margin: 3px 0 2px 0;
  }
</style>
