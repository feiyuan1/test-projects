<template>
  <div class="detail">
    <nav-bar>
      <Icon type="ios-arrow-back" slot="left" class="left" @click="backHome"/>
      <div slot="center" class="center">
        <div v-for="(item,key) in titles" class="center-item" :class="{active: key == curKey}" @click="active(key)">{{item}}</div>
      </div>
    </nav-bar>
    <better-scroll :height="'calc(100vh - 49px - 44px )'"
                   ref="scroll"
                   @scroll="scroll"
                   :probe-type="3"
    >
      <!--    banner-->
      <banner ref="banner"/>
      <!--    sellinfo-->
      <sell-info ref="sellInfo"/>
      <!--    shopinfo-->
      <shop-info ref="shopInfo"/>
      <!--列表展示-->
      <h2 style="text-align: center">data-info</h2>
      <goods-list :goods="goods" ref="goods"/>
    </better-scroll>
<!--    底部工具栏-->
<!--    backTop-->
  </div>
</template>

<script>
  import BetterScroll from "@com/BetterScroll";
  import NavBar from "@com/NavBar";
  import Banner from "@com/banner/Banner";

  import GoodsList from "@con/goodsList/GoodsList";

  import ShopInfo from "./ShopInfo";
  import SellInfo from "./SellInfo";

  import {getHomeData,getGoodsData} from "@net/home";

  export default {
    name: "Detail",
    components: {
      BetterScroll,
      NavBar,
      Banner,
      GoodsList,
      ShopInfo,
      SellInfo,
    },
    data(){
      return {
        titles: ['封面','评价','详情','推荐'],
        curKey: 0,
        goods: [],
        top2: 0,
        top3: 0,
        top4: 0,
      }
    },
    methods: {
      active(key){
        this.curKey = key;
      //点击 滚动页面
        switch (key) {
          case 0: this.$refs.scroll.scrollTo(0,44)
            break;
          case 1: this.$refs.scroll.scrollTo(0,this.top2)
            break;
          case 2: break;
          case 3: break;
        }
      },
      backHome(){
        this.$router.back()
      },
      scroll(pos){
        // console.log(pos)
      },
    },
    created() {
      //获取推荐区的goodslist数据
      getGoodsData('pop',1).then(response => {
        this.goods = response.data;
      }).catch(err => {
        console.log(err)
      })
    },
    mounted() {
      //获取sellinfo top值
      this.$bus.$on('bannerLoad',() => {
        this.top2 = -this.$refs.sellInfo.$el.offsetTop;
      })
    }
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
