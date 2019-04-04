import { mallinfo,mallgoods } from '@/api/mall/index.js';
export default {
    state: {
        mallscrollimg: [],
        navigatorIcon: [],
        cellA: "",
        cellB: "",
        cellC: [],
        topicstarwar: [],
        topicavengers: [],
        topicwarcraft: [],
        topicTrans: [],
        topicLeague: [],
        topicsmall: [],
        category: [],
        goodsList:[]
    },
    mutations: {
        getMutationsMallInfo(state, params) {
            state.mallscrollimg = params.scrollImg;
        },
        getMutationsNavigatorIcon(state, params) {
            state.navigatorIcon = params.navigatorIcon;
        },
        getMutationsCellA(state, params) {
            state.cellA = params.cellA;
        },
        getMutationsCellB(state, params) {
            state.cellB = params.cellB;
        },
        getMutationsCellC(state, params) {
            state.cellC = params.cellC.list;
        },
        getMutationsTopicStarWar(state, params) {
            state.topicstarwar = params.topic[0];
        },
        getMutationsTopicAvengers(state, params) {
            state.topicavengers = params.topic[1];
        },
        getMutationsTopicWarCraft(state, params) {
            state.topicwarcraft = params.topic[2];
        },
        getMutationsTopicTrans(state, params) {
            state.topicTrans = params.topic[3];
        },
        getMutationsTopicLeague(state, params) {
            state.topicLeague = params.topic[4];
        },
        getMutationsTopicSmall(state, params) {
            for (var i = 0; i < params.topic.length; i++) {
                state.topicsmall.push(params.topic[i].checkedImage);
            }

        },
        getMutationsgetCategory(state,params){
            state.category = params.category;
        },
        getMutationsGoodsList(state,params){
            state.goodsList = params.goodsList;
        }
    },
    actions: {
        async getMallInfo({ commit }) {
            let data = await mallinfo();
            commit("getMutationsMallInfo", data)//轮播图的图片
        },
        async getNavigatorIcon({ commit }) {//malllist的内容
            let data = await mallinfo();
            commit("getMutationsNavigatorIcon", data);

        },
        async getCellA({ commit }) {//malldeadpol中cellA的内容
            let data = await mallinfo();
            commit("getMutationsCellA", data);
        },
        async getCellB({ commit }) {//malldeadpol中cellB的内容
            let data = await mallinfo();
            commit("getMutationsCellB", data);
        },
        async getCellC({ commit }) {//malldeadpol中cellC的内容
            let data = await mallinfo();
            commit("getMutationsCellC", data);
        },
        async getTopicStarWar({ commit }) {//malltoggle中的内容
            let data = await mallinfo();
            commit("getMutationsTopicStarWar", data);
        },
        async getTopicAvengers({ commit }) {//malltoggle中的内容
            let data = await mallinfo();
            commit("getMutationsTopicAvengers", data);
        },
        async getTopicWarCraft({ commit }) {//malltoggle中的内容
            let data = await mallinfo();
            commit("getMutationsTopicWarCraft", data);
        },
        async getTopicTrans({ commit }) {//malltoggle中的内容
            let data = await mallinfo();
            commit("getMutationsTopicTrans", data);
        },
        async getTopicLeague({ commit }) {//malltoggle中的内容
            let data = await mallinfo();
            commit("getMutationsTopicLeague", data);
        },
        async getTopicSmall({ commit }) {//malltoggle中的内容
            let data = await mallinfo();
            commit("getMutationsTopicSmall", data);
        },
        async getCategory({ commit }) {//malltoggle中的内容
            let data = await mallinfo();
            commit("getMutationsgetCategory", data)
        },
        async getGoodsList({ commit }) {//mallgoods中的内容
            let data = await mallgoods();
            commit("getMutationsGoodsList", data);
            console.log(data);
        }
    },

    namespaced: true
}