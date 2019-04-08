import http from '@/utilsjs/http.js';


export const list = ()=>http("get","/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=2019411102990114")

export const getCityList = ()=>http("get",'/Service/callback.mi/News/NewsList.api?t=20194221214773912&pageIndex=1') 

export const getFindTitle = ()=>http("get","/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=2019461327726879")

//export const list = ()=>http("get","/abc/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=2019411102990114")


export const ticket=()=>http('get','/api/proxy/ticket/onlineCinemasByCity.api?locationId=290&_=1554618213413')

export const getTrailerList =()=>http("get","/Service/callback.mi/PageSubArea/TrailerList.api?t=2019471651505808")

export const getTopList = ()=>http("get","/Service/callback.mi/TopList/TopListOfAll.api?t=2019471721643942&pageIndex=1")

export const getReviewList = ()=>http("get","/Service/callback.mi/MobileMovie/Review.api?needTop=false&t=20194719104341909")