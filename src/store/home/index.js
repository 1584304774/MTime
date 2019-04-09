import {
    home,
    homeMovie,
    homedetail
} from "@/api/home/api.js"

export default {
    state: {
        moviesInfo : [],
        moviesList : [],
        hotdetail:0,
        hotdetailList:[]
    },
    mutations: {
        getMutationsMovies(state,params){
            state.moviesInfo = params.ms
        },
        getActionsList(state,params){
            state.moviesList = params.hotPoints
        },
        getMutationsId(state,params){
            state.hotdetail = params;
        },
        getMutationHotDetailList(state,params){
            state.hotdetailList = params;
           console.log(state.hotdetailList);
        }
    },
    actions: {
        async getActionsMovies ({commit}){
            let data = await home()
            commit("getMutationsMovies",data)
        },
        async getActionsList ({commit}){
            let res = await homeMovie()
            commit("getActionsList",res)
        },
        getId({commit},params){
            commit("getMutationsId",params);
        },
        async getHotDetialList({commit},id){
            let data = await homedetail(id);
            commit("getMutationHotDetailList",data);
        }
    },
    namespaced: true
}