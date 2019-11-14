import Vue from 'vue'
import Vuex from 'vuex'
import moments from './moments'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
  },
  mutations: {
    setLogin(state, payload){
      state.isLogin = payload;
    },
  },
  actions: {
  },
  modules: {
    moments
  }
})
