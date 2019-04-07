import {
    getCityList,
    getFindTitle
} from '@/api/api.js'
export default {
    state: {
        movieList: [],
        FindNewsTitle:"",
        FindTrailerTitle:""
    },
    mutations: {
        getMutationsCityList(state, params) {
            state.movieList = params
        },
        getMutationsFindNewsTitle(state,params){
            state.FindNewsTitle = params;
        },
        getMutationsFindTrailerTitle(state,params){
            state.FindTrailerTitle = params;
            console.log(state.FindTrailerTitle);
        }
    },
    actions: {
        async getActionsCityList({ commit }) {
            let data = await getCityList()
            commit('getMutationsCityList', data.newsList)
        },
        async getActionsFindNewsTitle({commit}){
            let data = await getFindTitle();
            commit("getMutationsFindNewsTitle",data.news);
        },
        async getActionsFindTrailerTitle({commit}){
            let data = await getFindTitle();
            commit("getMutationsFindTrailerTitle",data.trailer);
        }

    },
    namespaced: true
}