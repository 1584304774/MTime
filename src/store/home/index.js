import {
    home,
    homeMovie
} from "@/api/home/api.js"

export default {
    state: {
        moviesInfo : [],
        moviesList : []
    },
    mutations: {
        getMutationsMovies(state,params){
            state.moviesInfo = params.ms
        },
        getActionsList(state,params){
            state.moviesList = params.hotPoints
        }
    },
    actions: {
        async getActionsMovies ({commit}){
            let data = await home()
            commit("getMutationsMovies",data)
           // console.log(data)
        },
        async getActionsList ({commit}){
            let res = await homeMovie()
            commit("getActionsList",res)
            console.log(res)
        }
    },
    namespaced: true
}