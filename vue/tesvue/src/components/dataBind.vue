<template>
    <div>
        <p v-html="htmldata"></p>
        <p v-once >{{oncedata}}</p>
        <p @click="click">click me</p>
        <p v-pre>{{message}}</p>
    </div>
</template>

<script>
    export default {
        name: "dataBind",
        data(){
            return{
                htmldata:'<a>123</a>',
                oncedata:'data',
            }
        },
        methods:{
            click(){
                this.oncedata = 'data1';
                console.log(this.oncedata)
            }
        },
    }
</script>

<style scoped>

</style>