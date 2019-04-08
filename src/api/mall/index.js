import http from '@/utilsjs/http.js';
export const mallinfo = ()=>http("get","/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=2019431614968784");
export const mallgoods = ()=>http("get","/Service/callback.mi/ECommerce/RecommendProducts.api?t=2019432010586609&goodsIds=107091%2C107141&pageIndex=1");
export const malldetail = (id)=>http("get","/Service/callback-mall.mi/product/detail.api?goodsId=" + id +"&locationId=290&t=20194815465059218")
export const malldetailimg = (id)=>http("get","/Service/callback.mi/ECommerce/GoodsImageTextInfo.api?t=201948216254373&goodsId=" + id + "&pageIndex=1")