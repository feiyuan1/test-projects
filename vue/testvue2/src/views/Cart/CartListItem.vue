<template>
  <div class="cart-list-item">
    <select-icon :title="item.title" @cancel="cancel" @select="select" :status="item.seled"/>
    <p style="text-align: right">x{{item.times}}</p>
  </div>
</template>

<script>
  import SelectIcon from "@com/SelectIcon";

  export default {
    name: "CartListItem",
    components: {
      SelectIcon
    },
    props: {
      item: Object || {},
      //当前item的索引 方便后续修改状态
      key1: {
        type: Number,
        default: 0,
      }
    },
    methods: {
      //手动点击选中
      cancel(){
        this.$store.commit('change',[this.key1,false])
      },
      //手动取消点击选中
      select(){
        this.$store.commit('change',[this.key1,true])
      },
    },
  }
</script>

<style scoped>
  .cart-list-item{
    border-bottom: 1px solid #f1f1f1;
    padding: 10px;
  }
</style>
