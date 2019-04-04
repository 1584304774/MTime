import http from '@/utilsjs/http.js';

export const list = ()=>http("get","/api/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=2019411102990114")

export const getCityList = ()=>http("get",'/api/Service/callback.mi/News/NewsList.api?t=20194221214773912&pageIndex=1') 

