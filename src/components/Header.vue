<template>
    <header @click="changeTitle">
        <h1>{{title1}}{{title}}</h1>
    </header>
</template>

<script>
export default {
    name:'Header',
    data(){
        return {
            title1:'Vue.js Demo'
        }
    },
    props:{
        title:{
            type:String,
        }
    },
    methods:{
        changeTitle:function(){
            // this.title = "changed"
            this.$emit("titleChanged","子向父组件传值")
        }
    }
}
</script>

<style scoped>
header{
    background:lightgreen;
    padding: 10px;
}
h1{
    color: #222;
    text-align: center;
}
</style>