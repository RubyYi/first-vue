<template>
  <div class="helloWorld">
    <h1>HelloWorld</h1>
    <p v-text="title"></p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data(){
    return {
      title:'世界'
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--添加“scoped”属性以将CSS仅限于此组件-->
<style scoped>
</style>
