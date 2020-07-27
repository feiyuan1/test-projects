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
    <detail-bottom-bar @add="add"/>
<!--    backTop-->
    <back-up @click.native="backup" v-show="isShow" />
    <!--    tip-->
    <div class="tip" v-show="tipShow">{{tip}}</div>
  </div>
</template>

<script>
  import BetterScroll from "@com/BetterScroll";
  import Banner from "@com/banner/Banner";
  import BackUp from "@com/BackUp";

  import GoodsList from "@con/goodsList/GoodsList";

  import DetailNavBar from "./DetailNavBar";
  import ShopInfo from "./ShopInfo";
  import SellInfo from "./SellInfo";
  import DetailBottomBar from "./DetailBottomBar";

  import {getHomeData,getGoodsData} from "@net/home";

  import {backTopMixIn} from "@/common/mixin";

  export default {
    name: "Detail",
    components: {
      BetterScroll,
      Banner,
      BackUp,
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
        tip: '1111',
        themeType: [0,0,0,0],
        tipShow: false,
      }
    },
    mixins: [backTopMixIn],
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
      add(tip){
        this.tip = tip;
        this.hide()
      },
      hide(){
        //tip 显示+自动隐藏
        this.tipShow = true;
        setTimeout(() => {
          this.tipShow = false;
        },500)
      },
      scroll(pos){
        this.isShow = pos.y < -700;
        // this.$refs.tabControl.$el.offsetTop = pos.y < -this.height ? '44px' : 'auto';
        // if(pos.y < -this.height){
        //   console.log('1000')
        // }
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
        this.themeType[1] = this.$refs.sellInfo && -this.$refs.sellInfo.$el.offsetTop - 44;
        this.themeType[2] = this.$refs.shopInfo && -this.$refs.shopInfo.$el.offsetTop - 44;
        this.themeType[3] = this.$refs.goods && -this.$refs.goods.$el.offsetTop - 44;
      })
    }
  }
</script>

<style scoped>
  .tip{
    background: #000;
    color: #fff;
    padding: 5px 0 ;
    text-align: center;
    position: absolute;
    bottom: 70px;
    width: 50%;
    border-radius: 5px;
    left: 25%;
  }
</style>
