<template>
  <div id="tab-bar">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "tabBar"
  }
</script>

<style scoped>
  #tab-bar{
    display: flex;
    position: fixed;
    /*左右都设置 保证宽度铺满*/
    right: 0;
    left: 0;
    bottom: 0;
    height: 49px;
    background: #f6f6f6;
    box-shadow: 0 -1px 10px rgba(200,200,200,0.3);
  }
</style>
