<template>
  <div class="cart-count">
    <select-icon title="全选" class="select" @select="select" @cancel="cancel" :status="status"/>
    <div class="count">合计:{{total}}</div>
    <div class="calc">结算({{amount}})</div>
  </div>
</template>

<script>
  import SelectIcon from "@com/SelectIcon";

  export default {
    name: "CartCount",
    components: {
      SelectIcon
    },
    props: {
      //合计 title之和
      total:{
        type: String,
        default: '0'
      },
      //结算 选中个数
      amount: {
        type: Number,
        default: 0,
      },
    },
    methods: {
      select(){
        //点击全选
        this.listItem.forEach((item,index) => {
          this.$store.commit('change',[index,true])
        })
      },
      cancel(){
        //取消点击全选
        this.listItem.forEach((item,index) => {
          this.$store.commit('change',[index,false])
        })
      },
    },
    computed: {
      listItem(){
        return this.$store.state.listItem
      },
      status(){
        //判断 是否 手动全选
        return this.listItem.length ? this.listItem.every(item => {
          return item.seled;
        }) : false
      }
    }
  }
</script>

<style scoped>
  .cart-count{
    position: fixed;
    bottom: 50px;
    left: 0;
    right: 0;
    height: 44px;
    display: flex;
    text-align: center;
    line-height: 44px;
  }
  .cart-count .select,.calc{
    width: 100px;
  }
  .cart-count .count{
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  i{
    font-size: 24px;
  }
  .calc{
    background: crimson;
    color: #fff;
    border-radius: 10px;
  }
</style>
