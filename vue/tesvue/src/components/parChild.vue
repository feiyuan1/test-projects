<template>
    <div>
        <h1 @click="func">{{title}}</h1>
    </div>
</template>

<script>
    export default {
        name: "parChild",
        props:['title'],
        data(){
            return{
                dataFromChild:'children1111',
            }
        },
        methods:{
            childFun(){
                console.log('cjhild')
            },
            func(){
                this.$emit('children',this.childFun)
            }

        }
    }
</script>

<style scoped>

</style>