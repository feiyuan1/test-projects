<template>
    <div>
        <h1 @click="func">click</h1>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "model",
        data(){
            return{

            }
        },
        methods:{
            func(){
                this.$emit('input','hello parent!')
            },
        }
    }
</script>

<style scoped>

</style>