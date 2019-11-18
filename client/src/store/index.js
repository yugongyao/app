import Vue from 'vue'
import Vuex from 'vuex'
import Http from '../utils/Http'
import api from '../utils/api'
import moments from './moments'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    starUsers: []
  },
  mutations: {
    setLogin(state, payload){
      state.isLogin = payload;
    },
    setStarUsers(state, payload){
      state.starUsers = payload;
    }
  },
  actions: {
    async requestStars(context){
      try {
        var result = await Http.get(api.STAR_USERS);
        if (result.data.status==0) {
            // 假设是请求成功的数据
            var data = result.data.data;
            context.commit('setStarUsers', data);
        }
      } catch (error) {
          throw  new Error(error);
      }
    }
  },
  modules: {
    moments
  }
})
