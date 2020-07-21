<template>
    <div class="tab-bar-item" @click="href" :class="{isActive:isActive != -1}" :style="activeClass">
      <Icon :type="type" />
      <div>{{content}}</div>
    </div>
</template>

<script>
  export default {
    name: "tabBarItem",
    props: {
      type: String || "ios-menu-outline",
      content: String || '内容',
      path: String,
      activeColor: String || 'crimson'
    },
    methods: {
      href(){
        this.$route.path != this.path && this.$router.replace(this.path)
      }
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path)
      },
      activeClass(){
        return {color: this.isActive != -1 ? this.activeColor : '#000',}
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    text-align: center;
    flex: 1;
    font-size: 12px;
  }
  .tab-bar-item i{
    font-size: 24px;
    margin: 3px 0 2px 0;
  }
</style>
