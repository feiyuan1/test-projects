<template>
    <div>
        <p v-if="booler">123{{name}}</p>
    </div>
</template>

<script>
    export default {
        name: "life",
        data(){
            return{
                name:'vue',
                booler:true,
            }
        },
        methods:{
            change(){
                this.booler = !this.booler;
                // this.name = 'isssss...'
            }
        },
        beforeCreate() {
            console.log('beforecreat')
            console.log(this)
        },
        created() {
            console.log('created')
            console.log(this.name)
        },
        beforeMount() {
            console.log('beforeMount')
        },
        mounted() {
            console.log(this.$el)
            console.log('mounted')
        },
        beforeDestroy() {
            console.log('beforedestroy')
        },
        destroyed() {
            console.log('destoryed')
        },
        beforeUpdate() {
            console.log('beforeupdate')
        },
        updated() {
            console.log('updated')
        }
    }
</script>

<style scoped>

</style>