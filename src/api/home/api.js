import http from '@/utilsjs/http.js';
export const home = ()=>http("get","/api/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=2019411102990114")