<template>
  <div>
    <nav-bar bgColor="firebrick">
      <div slot="center">首页</div>
    </nav-bar>
    <better-scroll
            ref="scroll"
            @scroll="scroll"
            @pullingUp="pullingUp"
            :pull-upload="true"
            :probe-type="3"
    >
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
      <!--    banner 轮播图-->
      <banner ref="banner"/>
      <!--    每日推荐-->
      <recommend :recommend="result" ref="recommend"/>
      <!--    特色-->
      <feature ref="feature"/>
      <!--    首页分类-->
      <tab-control :titles="['流行','新品','精选']" @tabClick="tabClick" ref="tabControl"/>
      <!--列表展示-->
      <goods-list :goods="goods"/>
<!--      backup 回滚到顶部-->
    </better-scroll>
    <back-up @click.native="backup" v-show="isShow" />
  </div>
</template>

<script>
  import NavBar from "@com/NavBar";
  import Banner from "@com/banner/Banner";
  import BetterScroll from "@com/BetterScroll";

  import tabControl from "@con/tabControl/tabControl";
  import GoodsList from "@con/goodsList/GoodsList";

  import Recommend from "./Recommend";
  import Feature from "./Feature";

  import {getHomeData,getGoodsData} from "@net/home";

  import {debounce} from "@/common/util";
  import {backTopMixIn} from "@/common/mixin";

  export default {
    name: "index",
    components: {
      NavBar,
      Banner,
      BetterScroll,
      tabControl,
      GoodsList,
      Recommend,
      Feature
    },
    data(){
      return {
        result: [],
        listData: {
          fea: {page: 0, list: []},//jingxuan
          new: {page: 0, list: []},//xinpin
          pop: {page: 0, list: []},//liuxing
        },
        curTab: 'pop',
        fixed: true,
      }
    },
    mixins: [backTopMixIn],
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
      scroll(pos){
        this.isShow = pos.y < -700;
        // this.$refs.tabControl.$el.offsetTop = pos.y < -this.height ? '44px' : 'auto';
        // if(pos.y < -this.height){
        //   console.log('1000')
        // }
      },
      pullingUp(){
        this.getGoodsData(this.curTab);
      },

    },
    computed: {
      goods(){
        return this.listData[this.curTab].list;
      },
      height(){
        let count = 44;
        for(let key in this.$refs){
          if(key == 'banner' || key == 'recommend' || key == 'feature'){
            count += parseFloat(this.$refs[key].$el.offsetHeight)
          }
        }
        return count;
      },
    },
    created(){
      //请求 banner recommend 数据
      this.getHomeData();
      //请求news pop fea 数据
      this.getGoodsData('pop');
      this.getGoodsData('new');
      this.getGoodsData('fea');
    },
    mounted() {
      let refresh = debounce(this.$refs.scroll.refresh,500)
      this.$bus.$on('loading',() => {
        refresh()
      });
    },
  }
</script>

<style scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
