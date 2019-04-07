import {ticket} from '../../api/api.js'

export default {
    state: {
        cinemaList:[]
    },
    mutations: {
        getMutationsTicket(state,params){
          
                //state.cinemaList.push(params)
           
             state.cinemaList = params;
             //console.log( state.cinemaList)
        }
    },
    actions: {
        async getAcitonsTicket({commit}){
            let data = await ticket()
            

           let list = data.data.cinemaList;

          // for(var item in list){
            commit('getMutationsTicket',data.data.cinemaList)
               //console.log(list[item])
           //}
        }
    },
    namespaced: true
}