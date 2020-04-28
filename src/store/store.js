import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    //设置属性
    menuItems:{},
    currentUser:null,
    isLogin:false
  },

  getters,
    //获取属性的状态

  mutations,

  actions
    //应用mutations


})
