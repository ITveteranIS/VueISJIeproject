import axios from "axios";
import router from '../router'
import { message } from 'ant-design-vue';
import qs from "qs";

let base='/api';

axios.interceptors.request.use(config=>{
    if (window.sessionStorage.getItem('token')){
        config.headers['Authorization']=window.sessionStorage.getItem('token');
    }
    return config;
},error => {
    console.log(error)
})

axios.interceptors.response.use(success=>{
    if (success.data.status && success.data.status==200){
        if (success.data.code==500|| success.data.code==401 || success.data.code==403){
            message.error({message:success.data.message})
            return;
        }
        if (success.data.code==201){
            localStorage.removeItem('username');
            localStorage.removeItem('token');
            router.push('/login');
        }
        if (success.data.message){
            message.info({message:success.data.message})
        }
    }
    return success.data;
},error => {
    if (error.response.code===504||error.response.code===404){
        message.error({message:'页面不存在'});
        router.replace("/page404")
    }else if (error.response.code===403){
        message.error({message:'权限不足'});
    }else if(error.response.code===201){
        message.error({message:'未登录或账号密码错误'});
    }else {
        if (error.response.data.message){
            message.error({message:error.response.data.message});
        }else {
            message.error({message:'{未知错误}'});
        }
    }
    return;
})

export function getToken(parameter) {
    return axios({
        url: '/sgs-boot/oauth/token',
        method: 'post',
        data: qs.stringify(parameter),
        auth:{
                username: 'itveteran',
                password: '123456'
        }
    })
}

export const postRequest=(url,params)=>{
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params
    })
}

export const  getRequest=(url,params)=>{
    return axios({
        method: 'get',
        url: `${base}${url}`,
        data: params
    })
}

export const  putRequest=(url,params)=>{
    return axios({
        method: 'put',
        url: `${base}${url}`,
        data: params
    })
}

export const  deleteRequest=(url,params)=>{
    return axios({
        method: 'delete',
        url: `${base}${url}`,
        data: params
    })
}

