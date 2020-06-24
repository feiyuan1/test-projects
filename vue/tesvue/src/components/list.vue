<template>
    <div class="list">
        <ul>
            <li v-for="item,key in arr" >{{item}}</li>
        </ul>
        <button @click="change">change</button>
    </div>
</template>

<script>
    export default {
        name: "list",
        data(){
            return{
                arr:['item1','item2','item3']
            }
        },
        methods:{
            change(){
                this.arr.push('itemn')
            }
        },
        watch:{
            arr(value){
                console.log(value)
            }
        }
    }
</script>

<style scoped>

</style>