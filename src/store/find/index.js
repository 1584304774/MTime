import {
    getCityList,
    getFindTitle,
    getTrailerList,
    getTopList,
    getReviewList
} from '@/api/api.js'
export default {
    state: {
        movieList: [],
        FindNewsTitle:"",
        FindTrailerTitle:"",
        trailerList:[],
        FindRankingTitle:"",
        rankingList:[],
        FindReviewTitle:"",
        reviewList:[]
    },
    mutations: {
        getMutationsCityList(state, params) {
            state.movieList = params
        },
        getMutationsFindNewsTitle(state,params){
            state.FindNewsTitle = params;
        },
        getMutationsFindTrailerTitle(state,params){
            state.FindTrailerTitle = params;
        },
        getMutationsTrailerList(state,params){
            state.trailerList = params;
        },
        getMutationsFindRankingTitle(state,params){
            state.FindRankingTitle = params;
        },
        getMutationsRankingList(state,params){
            state.rankingList = params;
        },
        getMutationsFindReviewTitle(state,params){
            state.FindReviewTitle = params;
        },
        getMutationsReviewList(state,params){
            state.reviewList = params;
        }
    },
    actions: {
        async getActionsCityList({ commit }) {
            let data = await getCityList()
            commit('getMutationsCityList', data.newsList)
        },
        async getActionsFindNewsTitle({commit}){
            let data = await getFindTitle();
            commit("getMutationsFindNewsTitle",data.news);
        },
        async getActionsFindTrailerTitle({commit}){
            let data = await getFindTitle();
            commit("getMutationsFindTrailerTitle",data.trailer);
        },
        async getActionsTrailerList({commit}){
            let data = await getTrailerList();
            commit("getMutationsTrailerList",data.trailers);
        },
        async getActionsFindRankingTitle({commit}){
            let data = await getFindTitle();
            commit("getMutationsFindRankingTitle",data.topList);
        },
        async getActionsRankingList({commit}){
            let data = await getTopList();
            commit("getMutationsRankingList",data.topLists);
        },
        async getActionsFindReviewTitle({commit}){
            let data = await getFindTitle();
            commit("getMutationsFindReviewTitle",data.review);
        },
        async getActionsReviewList({commit}){
            let data = await getReviewList();
            commit("getMutationsReviewList",data);
        }
    },
    namespaced: true
}