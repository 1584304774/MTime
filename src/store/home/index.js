import {
    home,
    homeMovie,
    homeHot
} from "@/api/home/api.js"

export default {
    state: {
        moviesInfo : [],
        moviesList : [],
        moviesHot : [],
    },
    mutations: {
        getMutationsMovies(state,params){
            state.moviesInfo = params.ms
        },
        getActionsList(state,params){
            state.moviesList = params.hotPoints
        },
        getActionsHot(state,params){
            state.moviesHot = params.ms
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
        async getActionsHot ({commit}){
            let data = await homeHot()
            commit("getActionsHot",data)
            console.log(data);
        }
    },
    namespaced: true
}