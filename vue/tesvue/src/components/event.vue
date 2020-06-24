<template>
    <div>
        <h1>bind event</h1>
        <button @click="event1">click</button>
        <p>{{value}}</p>

        <h1>event once</h1>
        <button @click.once="event1">click once</button>
        <p>{{value}}</p>

        <h1>event prevent stop</h1>
        <div @click="event2" class="parent">
            <div @click.stop="event3" class="child"></div>
        </div>
        <p>{{stop}}</p>

        <h1>event prevent</h1>
        <form action="../../../../node/index.js">
            <input type="submit" @click.prevent="event4" value="submit"/>
        </form>
        <p>{{prevent}}</p>

        <h1>event key</h1>
            <input type="text" v-model="key" @keydown.enter="event5"/>
        <p>{{key}}</p>
    </div>
</template>

<script>
    export default {
        name: "event",
        data(){
            return{
                value:'',
                stop:'',
                prevent:'',
                key:''
            }
        },
        methods:{
            event1(){
                this.value += 'click';
            },
            event2(){
                this.stop += 'parent';
            },
            event3(){
                this.stop += 'children'
            },
            event4(){
                this.prevent += 'prevent'
            },
            event5(){
                console.log(this.key)
            }
        }
    }
</script>

<style scoped>
    .parent{
        width: 100px;
        height:100px;
        background: #42b983;
    }
    .child{
        width: 30px;
        height:30px;
        background: #aaaaaa;
    }
</style>