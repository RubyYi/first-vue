<template>
  <div id="translate">
    <TranslateForm v-on:onSubmit="getTextToTranslate"></TranslateForm>
    <TranslateOutput></TranslateOutput>
  </div>
</template>

<script>
import TranslateOutput from "./TranslateOutput";
import TranslateForm from "./TranslateForm";
export default {
  name: "translate",
  components: {
    TranslateForm,
    TranslateOutput
  },
  methods(text){
      console.log(text)
  }
};
</script>

<style scoped>
</style>