import {
    home,
    homeMovie,
<<<<<<< HEAD
    homedetail
=======
    homeHot
>>>>>>> chu
} from "@/api/home/api.js"

export default {
    state: {
        moviesInfo : [],
        moviesList : [],
<<<<<<< HEAD
        hotdetail:0,
        hotdetailList:[]
=======
        moviesHot : [],
>>>>>>> chu
    },
    mutations: {
        getMutationsMovies(state,params){
            state.moviesInfo = params.ms
        },
        getActionsList(state,params){
            state.moviesList = params.hotPoints
        },
<<<<<<< HEAD
        getMutationsId(state,params){
            state.hotdetail = params;
        },
        getMutationHotDetailList(state,params){
            state.hotdetailList = params;
           console.log(state.hotdetailList);
=======
        getActionsHot(state,params){
            state.moviesHot = params.ms
>>>>>>> chu
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
<<<<<<< HEAD
        getId({commit},params){
            commit("getMutationsId",params);
        },
        async getHotDetialList({commit},id){
            let data = await homedetail(id);
            commit("getMutationHotDetailList",data);
=======
        async getActionsHot ({commit}){
            let data = await homeHot()
            commit("getActionsHot",data)
            console.log(data);
>>>>>>> chu
        }
    },
    namespaced: true
}