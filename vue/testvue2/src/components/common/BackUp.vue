<template>
  <div class="backup">
    <Icon type="md-arrow-round-up" />
  </div>
</template>

<script>
  export default {
    name: "BackUp",
    methods: {

    },
  }
</script>

<style scoped>
  .backup{
    position: fixed;
    bottom: 60px;
    right: 10px;
    font-size: 25px;
    color: crimson;
  }
  .backup i{
    border-radius: 50%;
    box-shadow: 0 0 15px #ccc;
    padding: 5px;
    background: #fff;
  }
</style>
