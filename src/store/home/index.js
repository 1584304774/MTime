import {
    home
}from "@/api/home/api.js"
export default {
    state: {
        moviesInfo:[]
    },
    mutations: {
        getMutationsMovies(state,params){
            state.moviesInfo = params.ms
            
        }
    },
    actions: {
        async getActionsMovies ({commit}){
            let data = await home()
            commit("getMutationsMovies",data)
            console.log(data)
        }
    },
    namespaced: true
}