<template>
    <div id="translateForm">
        <form v-on:submit="formSubmit">
            <input v-model="textToTranslate" type="text" placeholder="输入要翻译的内容">
            <select>
                <option value="en">English</option>
            </select>
            <input type="submit" value="翻译">
        </form>
    </div>
</template>

<script>
export default {
    name:'translateForm',
    data:function(){
        return {
            textToTranslate: ''
        }
    },
    methods:{
        formSubmit(e){
            // console.log(this.textToTranslate);
            this.$emit('onSubmit',this.textToTranslate)
            e.preventDefault();

        }
    }
}
</script>

<style scoped>

</style>