import Http from '../utils/Http'
import api from '../utils/api'


const state = {
    momentsData: []
}

const getters = {}

const mutations = {
    // 设置动态列表
    setMomentsData(state, value){
        state.momentsData = value;
    }
}

const actions = {
    // 请求首页动态列表数据
    async requestMomentsList(context){

        var result = await Http.get(api.REQUEST_MOMENTS);

        if (result.status===0) {
            // 假设是请求成功的数据
            var data = result.data;
            context.commit('momentsData', data)
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