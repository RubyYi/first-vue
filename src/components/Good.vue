<template>
  <div id="good">
    <ul>
      <li v-for="(good,index) in goods" v-bind:key="index" @click="good.show=!good.show">
        <h1>{{good.name}}</h1>
        <h2 v-show="good.show">{{good.price}}</h2>
      </li>
    </ul>
  </div>
</template>
    
<script>
export default {
  name: "good",
  data() {
    return {
      
    };
  },
  props:{
      goods:{
          type:Array,
      }
  },
  beforeUpdate(){
      console.log(this.goods)
  }
};
</script>

<style scoped>
</style>