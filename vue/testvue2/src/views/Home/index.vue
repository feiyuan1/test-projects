<template>
  <div>
    <nav-bar bgColor="firebrick">
      <div slot="center">首页</div>
    </nav-bar>
    <better-scroll>
      <!--    banner 轮播图-->
      <banner/>
      <!--    每日推荐-->
      <recommend :recommend="result"/>
      <!--    特色-->
      <feature />
      <!--    首页分类-->
      <tab-control :titles="['流行','新品','精选']" class="tab-control" @tabClick="tabClick"/>
      <!--列表展示-->
      <goods-list :goods="goods"/>
    </better-scroll>
  </div>
</template>

<script>
  import NavBar from "@com/navBar";
  import Banner from "@com/banner/Banner";
  import tabControl from "@con/tabControl/tabControl";
  import GoodsList from "@con/goodsList/GoodsList";
  import BetterScroll from "@com/BetterScroll";

  import Recommend from "./Recommend";
  import Feature from "./Feature";

  import {getHomeData,getGoodsData} from "@net/home";

  export default {
    name: "index",
    components: {NavBar,Banner，Recommend,Feature,tabControl,GoodsList,BetterScroll},
    data(){
      return {
        result: [],
        listData: {
          fea: {page: 0, list: []},//jingxuan
          new: {page: 0, list: []},//xinpin
          pop: {page: 0, list: []},//liuxing
        },
        curTab: 'pop',
      }
    },
    methods: {
      //监听事件的方法
      tabClick(key){
        switch (key) {
          case 0: this.curTab='pop';break;
          case 1: this.curTab='new';break;
          case 2: this.curTab='fea';break;
        }
      },

      //网络请求的方法
      getHomeData(){
        getHomeData().then(data => {
          this.result = data.data;
        }).catch(err => {
          console.log(err)
        })
      },
      getGoodsData(type){
        let page = this.listData[type].page + 1;
        getGoodsData(type,page).then(data => {
          this.listData[type].list = data.data;
          this.listData[type].page = page;
        }).catch(err => {
          console.log(err);
        })
      },
    },
    computed: {
      goods(){
        return this.listData[this.curTab].list;
      }
    },
    created(){
      //请求 banner recommend 数据
      this.getHomeData();
      //请求news pop fea 数据
      this.getGoodsData('pop');
      this.getGoodsData('new');
      this.getGoodsData('fea');
    }
  }
</script>

<style scoped>
  .tab-control{
    /*一旦达到设置的位置  就固定  移动端一般支持  IE不定*/
    position: sticky;
    top: 44px;
  }
</style>
