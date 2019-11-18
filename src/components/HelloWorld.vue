<template>
  <div class="helloWorld">
    <h1>{{name}}</h1>
    <p v-text="title"></p>
    <p>{{greet()}}</p>
    <!-- 不理解 -->
    <!-- <a v-bind:href="website" v-onclick.prevent="alert">百度</a> -->
    <input type="text" v-bind:value="name" />
    <p v-html="websiteTag"></p>
    <p>
      <button v-on:click.once="add(1)">长一岁</button>
      <button v-on:click="subtract(1)">减一岁</button>
      <button v-on:click="add(10)">长十岁</button>
      <button v-on:click="subtract(10)">减十岁</button>
      <span>my age is {{age}}</span>
    </p>
    <p>
      <label for="name">姓名：</label>
      <input type="text" name="name" v-model="name" />
      <label for="age">年龄：</label>
      <input type="text" name="age" v-model="age" />
    </p>
    <p>
      <input ref="name" type="text" @keyup.alt.enter="changeName" />
    </p>
    <p>
      <select name="select" id v-model="gruit">
        <option value="0">苹果</option>
        <option value="1">橘子</option>
        <option value="2">香蕉</option>
      </select>
      <span>{{gruit}}</span>
    </p>

    <div>
      <button @click="a++">Add to A</button>
      <button v-on:click="b++">Add to B</button>
      <div>A - {{a}}</div>
      <div>B - {{b}}</div>
      <div>age + A = {{addToA}}</div>
      <div>age + B = {{addToB}}</div>
    </div>

    <div class="activeClass">
      <button @click="changeLength=!changeLength">changeLength</button>
      <button @click="changeColor=!changeColor">changeColor</button>
      <p :class="compClasses">
        <span>Henry</span>
      </p>
    </div>

    <div>
      <button @click="success = !success">Toggle Success</button>
      <button v-on:click="error = !error">Toggle Error</button>
      <!-- 
        <p v-show="success">网络连接成功： 200</p>
        <p v-show="error">网络连接错误： 404</p>
      -->

      <p v-if="success">网络连接成功： 200</p>
      <p v-else-if="error">网络连接错误： 404</p>
      <p v-else>接口没返回</p>
    </div>

    <div v-for="(user,index) in users" v-bind:key="index">
      <div v-for="(key,value) in user" v-bind:key="key">
        <p>{{key}} ------ {{value}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      name: "HelloWorld",
      title: "你好世界",
      website: "https://fanyi.baidu.com/",
      websiteTag: "<a href='http://www.baidu.com'>Thenews</a>",
      age: 30,
      gruit: "2",
      a: 0,
      b: 0,
      changeColor: false,
      changeLength: false,
      error: false,
      success: true,
      users: [
        { name: "Henry", age: 30 },
        { name: "Bucky", age: 43 },
        { name: "Emily", age: 10 }
      ]
    };
  },
  methods: {
    greet(time = "morning") {
      return "Good " + time + " " + this.name + "!";
    },
    alert() {
      alert("Hello world!");
    },
    add(int) {
      this.age += int;
    },
    subtract(dec) {
      this.age -= dec;
    },
    changeName() {
      this.name = this.$refs.name.value;
    }
    // addToA(){
    //   console.log('addToA');
    //   return this.age + this.a;
    // },
    // addToB(){
    //   console.log('addToB')
    //   return this.age + this.b;
    // }
  },
  computed: {
    addToA() {
      console.log("addToA");
      return this.age + this.a;
    },
    addToB() {
      console.log("addToB");
      return this.age + this.b;
    },
    compClasses() {
      return {
        changeColor: this.changeColor,
        changeLength: this.changeLength
      };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--添加“scoped”属性以将CSS仅限于此组件-->
<style scoped>
.activeClass span {
  color: #fff;
  padding: 5px;
  background: green;
}
.activeClass .changeColor span {
  background: red;
}
.changeLength span::after {
  content: "Length";
  margin-left: 5px;
}
</style>
