import axios from 'axios';
import { getCookie } from '../common/auth';
export const Login = params => { return axios.post(`/v1/global/adminlogin`, params); };

//管理员管理
export const register = params => { return axios.post(`/v1/admin/register`, params,{
    headers:{
        "Authorization":"Bearer "+ sessionStorage.getItem('token')
    }
}); };
export const getadminListPage = params => { return axios.get(`/v1/admin/?offset=${params.offset}&limit=10`,{ params: params ,headers:{
    "Authorization":"Bearer "+sessionStorage.getItem('token')
}}); };
export const updatePass = (params,id) => { return axios.put(` /v1/admin/detail/${id}`, params,{
    headers:{
        "Authorization":"Bearer "+sessionStorage.getItem('token')
    }
}); };
//用户管理
export const getUserPage = params => { return axios.get(`/v1/admin/userlist/?offset=${params.offset}&limit=10`, { params: params ,headers:{
    "Authorization":"Bearer "+sessionStorage.getItem('token')
}}); };

export const delUser = (id) => { return axios.delete(`/v1/admin/userdel/${id}`,{headers:{
    "Authorization":"Bearer "+sessionStorage.getItem('token')
}}); };

export const updateUser = (params,id) => { 
    return axios.put(`/v1/admin/userupd/${id}`,params,{headers:{
    "Authorization":"Bearer "+sessionStorage.getItem('token')
}}); };
//角色管理
export const addRole = params => { return axios.post(`/v1/admin/roleadd`, params,{headers:{
    "Authorization":"Bearer "+sessionStorage.getItem('token')
}}); };
export const getRole = params => { return axios.get(`/v1/admin/rolelist/?offset=${params.offset}&limit=10`, { params: params,headers:{
    "Authorization":"Bearer "+sessionStorage.getItem('token')
}}); };
export const updateRole = (params,id) => { return axios.put(`/v1/admin/roleupd/${id}`, params,{headers:{
    "Authorization":"Bearer "+sessionStorage.getItem('token')
}}); };
//广告管理
export const bannerList = params => { return axios.get(`/v1/admin/banner/?offset=${params.offset}&limit=10`, { params: params,headers:{
    "Authorization":"Bearer "+sessionStorage.getItem('token')
}}); };
export const addbanner = params => { return axios.post(`/v1/admin/banner/`,  params,{headers:{
    "Authorization":"Bearer "+sessionStorage.getItem('token')
}}); };
export const updatebanner = (params,id) => { 
    
    return axios.put(`/v1/admin/banner/${id}`,  params,{headers:{
    "Authorization":"Bearer "+sessionStorage.getItem('token')
}}); };
export const updatebannerpic = (params,id) => { return axios.put(`/v1/admin/bannerupload/${id}`,  params,{headers:{
    "Authorization":"Bearer "+sessionStorage.getItem('token')
}}); };
export const checkbanner = params => { 
    return axios.get(`/v1/admin/banner/${params.id}`, {  params,headers:{
    "Authorization":"Bearer "+sessionStorage.getItem('token')
}}); };
export const delbanner = id => { return axios.delete(`/v1/admin/banner/${id}`,{headers:{
    "Authorization":"Bearer "+sessionStorage.getItem('token')
}}); };
///商品管理
export const getmainsort = params => { return axios.get(`/v1/admin/mainsort/?offset=${params.offset}&limit=10`, { params: params,headers:{
    "Authorization":"Bearer "+sessionStorage.getItem('token')
}}); };
export const getsubsort = params => { return axios.get(`/v1/admin/subsort/?offset=${params.offset}&limit=10&pid=${params.id}`, { params: params,headers:{
    "Authorization":"Bearer "+sessionStorage.getItem('token')
}}); };
export const addmainsort = params => { return axios.post(`/v1/admin/mainsortadd/`, params,{headers:{
    "Authorization":"Bearer "+sessionStorage.getItem('token')
}}); };
export const addsubsort = params => { 
    return axios.post(`/v1/admin/subsortadd/`, params,{headers:{
    "Content-Type":"application/json",
    "Authorization":"Bearer "+sessionStorage.getItem('token')
}}); };
export const updatemainsort = (params,id) => {
    return axios.put(`/v1/admin/mainsort/${id}`,  params,{headers:{
    "Authorization":"Bearer "+sessionStorage.getItem('token')
}}); };
export const updatesubsort = (params,id) => { return axios.put(` /v1/admin/subsort/${id}`,  params,{headers:{
    "Authorization":"Bearer "+sessionStorage.getItem('token')
}}); };
export const delmainsort = (id) => { return axios.delete(` /v1/admin/mainsort/${id}`,{headers:{
    "Authorization":"Bearer "+sessionStorage.getItem('token')
}}); };
export const delsubsort = (id) => { return axios.delete(`/v1/admin/subsort/${id}`,{headers:{
    "Authorization":"Bearer "+sessionStorage.getItem('token')
}}); };