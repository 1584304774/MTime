import http from '@/utilsjs/http.js';
export const mallinfo = ()=>http("get","/api/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=2019431614968784");
export const mallgoods = ()=>http("get","/api/Service/callback.mi/ECommerce/RecommendProducts.api?t=2019432010586609&goodsIds=107091%2C107141&pageIndex=1");