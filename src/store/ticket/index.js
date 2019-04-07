import {ticket} from '../../api/api.js'

export default {
    state: {
        cinemaList:[]
    },
    mutations: {
        getMutationsTicket(state,params){       
             state.cinemaList = params;
        }
    },
    actions: {
        async getAcitonsTicket({commit}){
            let data = await ticket()
            commit('getMutationsTicket',data.data.cinemaList)
        }
    },
    namespaced: true
}