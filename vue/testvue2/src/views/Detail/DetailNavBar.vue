<template>
  <nav-bar>
    <Icon type="ios-arrow-back" slot="left" class="left" @click="backHome"/>
    <div slot="center" class="center">
      <div v-for="(item,key) in titles" class="center-item" :class="{active: key == curKey}" @click="active(key)">{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from "@com/NavBar";
  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['封面', '评价', '详情', '推荐'],
        curKey: 0,
      }
    },
    methods: {
      backHome(){
        this.$router.back()
      },
      active(key) {
        this.curKey = key;
        //点击 滚动页面
        this.$emit('active',key)
      },
      changeKey(key){
        this.curKey = key;
      },
    },
  }
</script>

<style scoped>
  .left{
    font-size: 20px;
  }
  .center{
    display: flex;
    text-align: center;
  }
  .center-item{
    flex: 1;
  }
  .active{
    color: crimson;
  }
</style>