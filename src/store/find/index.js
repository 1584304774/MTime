import {
    getCityList
} from '@/api/api.js'
export default {
    state: {
        nav: ['首页', '预告片', '排行榜', '影评'],
    },
    mutations: {

    },
    actions: {
        async getActionsCityList() {
            let data = await getCityList()
            console.log(data)
        }

    },
    namespaced: true
}