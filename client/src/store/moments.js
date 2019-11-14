import Http from '../utils/Http'
import api from '../utils/api'


const state = {
    momentsData:[],
    hotIssues: [],
    isLoading: false
}

const getters = {}

const mutations = {
    // 设置动态列表
    setMomentsData(state, value){
        state.momentsData = value;
    },
    setLoading(state, value){
        state.isLoading = value;
    },
    setHotIssues(state, value){
      state.hotIssues = value;
    }
}

const actions = {
    //请求首页动态列表数据
    async requestMomentsList(context){
        try {
            context.commit("setLoading", true);
            var result = await Http.get(api.REQUEST_MOMENTS);
            if (result.data.status==0) {
                // 假设是请求成功的数据
                var data = result.data.data;
                context.commit('setMomentsData', data);
                context.commit('setLoading', false);
            }
        } catch (error) {
            throw  new Error(error);
        }
        
    },
    async requestHotIssues(context){
        try {
            var result = await Http.get(api.HOT_ISSUES);
            if (result.data.status==0) {
                // 假设是请求成功的数据
                var data = result.data.data;
                context.commit('setHotIssues', data);
            }
        } catch (error) {
            throw  new Error(error);
        }
        
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}