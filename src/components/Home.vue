<template>
  <div id="home">
    <Header v-on:titleChanged="updateTitle($event)" :title="title"></Header>
    <h1>{{ title }}</h1>
    <Good v-bind:goods="goods"></Good>
    <Users v-bind:users="users"></Users>
    <Users v-bind:users="users"></Users>
    <Footer :title="title"></Footer>
  </div>
</template>

<script>
//拒不注册组件
import Users from "./Users";
import Header from "./Header";
import Footer from "./Footer";
import Good from "./Good";

export default {
  name: "Home",
  data() {
    return {
      title: "这是我的第一个Vue脚手架项目！",
      goods: [
      ],
      users: [
        // {
        //   name: "Henry",
        //   position: "web开发",
        //   show: false
        // },
        // {
        //   name: "Bucky",
        //   position: "web开发",
        //   show: false
        // },
        // {
        //   name: "Emily",
        //   position: "web开发",
        //   show: false
        // },
        // {
        //   name: "Henry",
        //   position: "web开发",
        //   show: false
        // },
        // {
        //   name: "Bucky",
        //   position: "web开发",
        //   show: false
        // },
        // {
        //   name: "Emily",
        //   position: "web开发",
        //   show: false
        // },
        // {
        //   name: "Emily",
        //   position: "web开发",
        //   show: false
        // }
      ]
    };
  },
  components: {
    // "users":Users
    Users,
    Header,
    Footer,
    Good
  },
  methods: {
    updateTitle: function(title) {
      this.title = title;
    }
  },
  // beforeCreate() {
  //   alert("组件实例化之前执行的函数，这里可以写等待加载之类的函数");
  // },
  // created() {
  //   alert("组件实例化完毕，但页面还未显示，这里可以写调用接口之类的方法");
  // },
  // beforeMount() {
  //   alert("组件挂载前，页面仍未展示，但虚拟DOM已经配置");
  // },
  // mounted() {
  //   alert("组件挂载后，此方法执行后，页面显示");
  // },
  // beforeUpdate() {
  //   alert("组件更新前，页面仍未更新，但虚拟DOM已经配置");
  // },
  // updated() {
  //   alert("组件更新，此方法执行后，页面显示");
  // },
  // beforeDestory() {
  //   alert("组件销毁前");
  // },
  // destroyed() {
  //   alert("组件销毁");
  // }
  created(){
    const newGoods = [
        {
          name: "苹果",
          price: "￥20"
        },
        {
          name: "橘子",
          price: "￥10"
        },
        {
          name: "香蕉",
          price: "￥6.8"
        }
      ]
      

      this.goods = newGoods.map(item=>{return {...item,show: false}})



      this.$http.get("http://jsonplaceholder.typicode.com/users")
      .then((res)=>{
         console.log(res)
        if(res.status==200){
        /**
         * email
         * id
         * name
         * phone
         * username
         * website
         */                
        // res.body.forEach(element => {
        //   this.users.push({...element, contacted:false})         
        // });
        this.users = res.body
        
        console.log(this.users)
        } 
      })
  }
};
</script>

<style scoped>
h1 {
  color: aqua;
}
</style>
