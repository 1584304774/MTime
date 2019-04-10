import http from '@/utilsjs/http.js';
export const home = () => http("get", "/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=2019481093279390")
<<<<<<< HEAD
export const homeMovie = () => http("get", "/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=2019449455286677")
export const homedetail = (id)=>http("get","Service/callback.mi/movie/Detail.api?movieId=" + id + "&locationId=290&t=2019492074778782")
=======


//export const home = ()=>http("get","/api/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=2019431225492383")

//export const home = ()=>http("get","/api/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=2019411102990114")

//export const home = ()=>http("get","/api/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=2019431225492383")

export const homeMovie = ()=>http("get","/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=2019449455286677")
export const homeHot = ()=>http("get","/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=20194922435871346")

>>>>>>> chu
