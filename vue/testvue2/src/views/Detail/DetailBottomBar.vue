<template>
  <div class="bottom-bar">
    <div class="bar-item">
      <Icon type="ios-chatbubbles-outline" />
      <div>客服</div>
    </div>
    <div class="bar-item">
      <Icon type="ios-home-outline"></Icon>
      <div>店铺</div>
    </div>
    <div class="bar-item">
      <Icon type="ios-heart-outline" />
      <div>收藏</div>
    </div>
    <div class="bar-item item1" @click="add">
      <span>加入购物车</span>
    </div>
    <div class="bar-item item2">
      <span>购买</span>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: "DetailBottomBar",
    data(){
      return {
        title: '',
      }
    },
    methods: {
      //action 映射为 methods
      ...mapActions(['addItem']),
      add(){
        this.addItem(this.title).then((res) => {
          this.$toast.show(res)
        });
      },
    },
    created() {
      this.title = this.$route.params.title;
    }
  }
</script>

<style scoped>
  .bottom-bar{
    height: 44px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0px;
    display: flex;
  }
  .bottom-bar .bar-item{
    flex: 1;
    text-align: center;
  }
  .bar-item i{
    font-size: 24px;
  }
  .bar-item div{
    font-size: 12px;
  }
  .bar-item span{
    line-height: 44px;
  }
  .item1{
    background: crimson;
    color: #fff;
    padding: 0 10px;
  }
  .item2{
    background: goldenrod;
    color: #fff;
  }
</style>
