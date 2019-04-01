import axios from "axios";
import qs from 'qs';
const http = axios.create({
    timeout:5000,
    withCredentials:true//自动携带cookie到服务器
})
//请求拦截
http.interceptors.request.use((config)=>{
    if(config.method == "get"){
        if(config.data){
            config.params = {...config.data};//对象解构
        }     
    }else if(config.method == "post"){
        config.data = qs.stringify(config.data);
    }
    return config;
},(e)=>{
    Promise.reject(e);
})
//响应的拦截
http.interceptors.response.use((res)=>{
    if(res.statusText === "OK"){
        return res.data;
    }
},(e)=>{
    Promise.reject(e);
})
//返回一个函数，之后在api/api.js中可以使用这个函数（可以无限.then下去）
export default (method,url,data={})=>{
    if(method == "get"){//若请求方式是get，则将data解构给params
        return http.get(url,{params:data});
    }else if(method == "post"){//若为post，则不需要解构
        return http.post(url,data);
    }else{//如果既不是get也不是post则不做任何操作
        return;
    }
}