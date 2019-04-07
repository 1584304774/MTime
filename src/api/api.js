import http from '@/utilsjs/http.js';
export const list = ()=>http("get","/abc/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=2019411102990114")


export const ticket=()=>http('get','/api/proxy/ticket/onlineCinemasByCity.api?locationId=290&_=1554367782575')
