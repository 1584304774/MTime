import {
    getCityList
} from '@/api/api.js'
export default {
    state: {
        movieList: []
    },
    mutations: {
        getMutationsCityList(state,params){
            state.movieList = params
            console.log(state.movieList)

        }
    },
    actions: {
        async getActionsCityList({commit}) {
            let data = await getCityList()
            commit('getMutationsCityList',data.newsList)
        }

    },
    namespaced: true
}