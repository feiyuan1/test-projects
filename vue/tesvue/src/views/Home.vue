<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
<!--    <showIf></showIf>-->
<!--    <list></list>-->
<!--    <class1></class1>-->
<!--    <event></event>-->
<!--    <transition1></transition1>-->
<!--    <life v-if="isShow"></life>-->
<!--    <button @click="change">change</button>-->
<!--    <par-child :title="title" @children="parent1"></par-child>-->
<!--    <h3>{{username}}</h3>-->
<!--    <model v-model="username"></model>-->
<!--    <component is="model">-->
<!--      <p>slot.....</p>-->
<!--    </component>-->
<!--    <block-fun></block-fun>-->
<!--    <computed></computed>-->
<!--    <data-bind></data-bind>-->
    <less></less>
<!--    作用域插槽  父组件用子组件中的数据-->
    <slot1>
      <template slot-scope="data1">
        <span >{{data1.data.join('-')}}</span>
      </template>
    </slot1>
<!--    普通插槽 父组件中的内容会替换掉子组件中的默认内容-->
    <slot1 >
      <div slot="left">divtest</div>
    </slot1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import showIf from '@/components/showif.vue'
import list from '@/components/list.vue'
import class1 from '@/components/class.vue'
import event from '@/components/event.vue'
import transition1 from '@/components/transition.vue'
import life from '@/components/life.vue'
import parChild from '@/components/parChild.vue'
import model from '@/components/model.vue'
import blockFun from '@/components/blockFun.vue'
import computed from '@/components/computed.vue'
import dataBind from '@/components/dataBind.vue'
import less from '@/components/less.vue'
import slot1 from '@/components/slot.vue'
export default {
  name: 'Home',
  data(){
    return{
      isShow:true,
      title:'title1',
      username:'',
    }
  },
  methods:{
    change(){
      this.isShow = !this.isShow;
    },
    parent1(data){
      data()
    }
  },
  components: {
    HelloWorld,
    showIf,
    list,
    class1,
    event,
    transition1,
    life,
    parChild,
    model,
    blockFun,
    computed,
    dataBind,
    less,
    slot1
  }
}
</script>
