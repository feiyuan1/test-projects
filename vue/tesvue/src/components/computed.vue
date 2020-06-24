<template>
    <div>
        {{count}}
        <div @click="count = Math.ceil(Math.random()*10)">clickme</div>
    </div>
</template>

<script>
    export default {
        name: "computed",
        data(){
            return{
                num: 10,
            }
        },
        computed:{
            count:{
                set(newValue){
                   this.num = newValue;
                },
                get(){
                    var n = 0;
                    while(this.num >= 0){
                        n += this.num;
                        this.num--;
                    }
                    return n;
                }
            }
        }
    }
</script>

<style scoped>

</style>