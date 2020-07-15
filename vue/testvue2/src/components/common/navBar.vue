<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"/>
    </div>
    <div class="center">
      <slot name="center"/>
    </div>
    <div class="right">
      <slot name="right"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "navBar"
  }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    text-align: center;
    line-height: 44px;
    box-shadow: 0 1px 3px rgba(200,200,200,0.5);
  }
  .center{
    flex: 1;
  }
  .left,.right{
    width: 60px;
  }
</style>
