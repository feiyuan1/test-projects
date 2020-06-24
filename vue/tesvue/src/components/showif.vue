<template>
    <div class="showif">
        <ul>
            <li v-if="booler">v-if</li>
            <li v-show="booler">v-show</li>
        </ul>
        <ul>
            <li v-if="age>=20">adult</li>
            <li v-else-if="age>=14">teenager</li>
            <li v-else-if="age<14">baby</li>
        </ul>
        <button @click="change">change{{age}}</button>
    </div>


</template>

<script>
    export default {
        name: "showif",
        data(){
            return{
                booler: true,
                age:15,
            }
        },
        methods:{
            change(){
                this.booler = !this.booler;
                this.age = Math.floor(Math.random()*30)
            }
        },
    }
</script>

<style scoped>

</style>