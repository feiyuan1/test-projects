<template>
  <div class="slot1">
    <slot :data="datas">
      <ul>
        <li v-for="item in datas">{{item}}</li>
      </ul>
    </slot>
    <slot name="left">left</slot>
    <slot name="center">cneter</slot>
    <slot name="right">rihgt</slot>
  </div>
</template>

<script>
  export default {
    name: "slot1",
    data(){
      return{
        datas:[1,2,3,4,5]
      }
    }
  }
</script>

<style scoped>

</style>