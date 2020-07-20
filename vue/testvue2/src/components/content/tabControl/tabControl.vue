<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,key) in titles" @click="active(key)">
      <span :class="curKey == key ? 'active' : ''">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabControl",
    props: {
      titles: Array || [],
    },
    data(){
      return {
        curKey: 0,
      }
    },
    methods: {
      active(key){
        this.curKey = key;
        this.$emit('tabClick',key)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    font-size: 15px;
    text-align: center;
    line-height: 40px;
    background: #fff;
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-item span{
    padding: 5px;
  }
  .active{
    color: crimson;
    border-bottom: 2px solid crimson;
  }
</style>
