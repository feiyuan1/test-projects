<template>
    <div @click="func">
        click me
    </div>
</template>

<script>
    export default {
        name: "blocfun",
        methods:{
            func(){
                var a;
                {
                    let name = 'abc';
                    a = function(){
                        var age = 12;
                        console.log(age);
                    }
                }
                a();
            }
        }
    }
</script>

<style scoped>

</style>