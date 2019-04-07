import http from '@/utilsjs/http.js';
<<<<<<< HEAD

export const list = ()=>http("get","/api/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=2019411102990114")

export const getCityList = ()=>http("get",'/api/Service/callback.mi/News/NewsList.api?t=20194221214773912&pageIndex=1') 

export const getFindTitle = ()=>http("get","/api/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=2019461327726879")
=======
export const list = ()=>http("get","/abc/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=2019411102990114")


export const ticket=()=>http('get','/api/proxy/ticket/onlineCinemasByCity.api?locationId=290&_=1554367782575')
>>>>>>> origin/xiao
