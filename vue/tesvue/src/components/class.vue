<template>
    <div>
        <span class="page" :class="{classObj:booler}">123</span>
    </div>
</template>

<script>
    export default {
        name: "class",
        data(){
            return{
                booler:false,
            }
        },
    }
</script>

<style scoped>

</style>