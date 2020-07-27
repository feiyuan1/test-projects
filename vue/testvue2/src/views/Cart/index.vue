<template>
  <div>
    <cart-nav-bar :num="listItem.length"/>
    <div class="content">
      <cart-list-item v-for="(item,key) in listItem" :item="item" :key1="key"/>
    </div>
    <cart-count :total="total" :amount="amount"/>
  </div>
</template>

<script>
  import CartNavBar from "./CartNavBar";
  import CartListItem from "./CartListItem";
  import CartCount from "./CartCount";

  export default {
    name: "CartIndex",
    components: {
      CartNavBar,
      CartListItem,
      CartCount,
    },
    computed: {
      listItem(){
        return this.$store.state.listItem
      },
      //结算 个数
      amount(){
        let arr = this.listItem.filter((item) => {
          return item.seled;
        })
        return arr.length
      },
      //合计 title之和
      total(){
        return this.listItem.reduce((str1,item) => {
          if(item.seled){
            return str1 + item.title
          }
        },'')
      },
    }
  }
</script>

<style scoped>
  .content{
    margin-top: 44px;
    height: calc(100vh - 44px - 44px);
    overflow-y: auto;
  }
</style>
