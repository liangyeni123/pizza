import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import {routes} from './routes';
import axios from 'axios'

import {store} from './store/store.js'


Vue.use(VueRouter)

axios.defaults.baseURL = 'https://myblog-88888.firebaseio.com/'

Vue.prototype.http = axios

const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition
    }else{
      return{x:0,y:0}
    }

  }
})

//全局守卫
//router.beforeEach((to,from,next) =>{
  //alert("Please login first");
  //next();
  //判断sotre.getters.isLogin == false
  //if(to.path == '/login' || to.path == '/register'){
    //next();
  //}else{
    //alert("please login first!");
    //next('/login');
  //}

//})

//后置钩子
//router.afterEach((to,from) =>{
  //alert("after each");
//})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
