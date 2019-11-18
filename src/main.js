import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
// import Users from './components/Users'

Vue.config.productionTip = false
// 使用中间件注明要使用路由
Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.use(ElementUI)

//配置路由
const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/helloworld", component: HelloWorld }
  ],
  mode:"history"
})

//注册全局组件
// Vue.component("users",Users)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
