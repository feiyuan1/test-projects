<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommend.slice(0,4)">
      <a :href="'http://' + item.img">
        <img :src="item.img"/>
      </a>
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    props: {
      recommend: Array || [],
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    margin: 54px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item{
    flex: 1;
    text-align: center;
    font-size: 12px;
    padding: 3px 0 5px;
  }
  .recommend-item img{
    height: 70px;
    width: 70px;
    border-radius: 50%;

  }
</style>
