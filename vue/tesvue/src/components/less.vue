<template>
  <div class="less">less test</div>
</template>

<script>
  export default {
    name: "less"
  }
</script>

<style scoped lang="less">
  @color:red;
  .less{
    color: @color;
  }
</style>