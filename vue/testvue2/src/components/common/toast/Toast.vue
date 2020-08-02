<template>
  <!--    tip-->
  <div class="tip" v-show="tipShow">{{mes}}</div>
</template>

<script>
  export default {
    name: "toast",
    data(){
      return {
        mes: '',
        tipShow: false,
      }
    },
    methods: {
      show(message='',duration=2000){
        console.log(message,duration)
        this.tipShow = true;
        this.mes = message;
        setTimeout(() => {
          this.tipShow = false;
          this.mes = '';
        },duration)
      },
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