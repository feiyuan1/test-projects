<template>
  <div>
    <Icon :type="type" @click="select" :class="{selected: status || flag}"/>
    <span>{{title}}</span>
  </div>
</template>

<script>
  export default {
    name: "SelectIcon",
    props: {
      title: String || '',
      //全选 修改的状态
      status: Boolean || false,
    },
    data(){
      return {
        //手动选择的状态
        flag: false,
      }
    },
    methods: {
      select(){
        if(this.flag){
          this.$emit('cancel')
        }else{
          this.$emit('select')
        }
        this.flag = !this.flag;
      },
    },
    computed: {
      //手动 或者 全选  共同 判断
      type(){
        return this.status || this.flag ? 'ios-checkmark-circle' : 'ios-radio-button-off'
      }
    }
  }
</script>

<style scoped>
  i{
    font-size: 24px;
    margin-right: 5px;
  }
  .selected{
    color: crimson;
  }
</style>
