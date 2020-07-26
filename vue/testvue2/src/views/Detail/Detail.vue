<template>
  <div class="detail">
    <detail-nav-bar @active="active" ref="nav"/>
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
    <detail-bottom-bar />
<!--    backTop-->
  </div>
</template>

<script>
  import BetterScroll from "@com/BetterScroll";
  import Banner from "@com/banner/Banner";

  import GoodsList from "@con/goodsList/GoodsList";

  import DetailNavBar from "./DetailNavBar";
  import ShopInfo from "./ShopInfo";
  import SellInfo from "./SellInfo";
  import DetailBottomBar from "./DetailBottomBar";

  import {getHomeData,getGoodsData} from "@net/home";

  export default {
    name: "Detail",
    components: {
      BetterScroll,
      Banner,
      GoodsList,
      DetailNavBar,
      ShopInfo,
      SellInfo,
      DetailBottomBar,
    },
    data(){
      return {
        curKey: 0,
        goods: [],
        top2: 0,
        top3: 0,
        top4: 0,
        themeType: [0,0,0,0],
      }
    },
    methods: {
      active(key){
        this.curKey = key;
      //点击 滚动页面
        this.$refs.scroll.scrollTo(0,this.themeType[key])
      },
      scroll(pos){
        this.themeType.forEach((val,index) => {
          if(this.curKey !== index && pos.y <= val){
            this.curKey = index;
            this.$refs.nav.changeKey(index)
          }
        })
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
      this.themeType[0] = -44
      this.$bus.$on('bannerLoad',() => {
        this.themeType[1] = -this.$refs.sellInfo.$el.offsetTop - 44;
        this.themeType[2] = -this.$refs.shopInfo.$el.offsetTop - 44;
        this.themeType[3] = -this.$refs.goods.$el.offsetTop - 44;
      })
    }
  }
</script>

<style scoped>

</style>
