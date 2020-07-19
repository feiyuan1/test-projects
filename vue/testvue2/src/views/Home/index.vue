<template>
  <div>
    <nav-bar bgColor="firebrick">
      <div slot="center">首页</div>
    </nav-bar>
<!--    banner 轮播图-->
		<banner/>
<!--    每日推荐-->
    <recommend :recommend="result"/>
<!--    特色-->
    <feature />
  </div>
</template>

<script>
  import NavBar from "@com/navBar";
  import Banner from "@com/banner/Banner";
  
  import Recommend from "./Recommend";
  import Feature from "./Feature";

  import {getHomeData} from "@net/home";

  export default {
    name: "index",
    components: {NavBar,Banner,Recommend,Feature},
    data(){
      return {
        result: [],
      }
    },
    methods: {

    },
    created(){
      getHomeData().then(data => {
        this.result = data.data;
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style scoped>

</style>
