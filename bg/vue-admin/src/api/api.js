import axios from 'axios';
import { getCookie } from '../common/auth';

let base = '';
export const Login = params => { return axios.post(`/v1/global/adminlogin`, params); };

//用户管理
export const register = params => { return axios.post(`/v1/global/register`, params,{
    headers:{
        "Authorization":"Bearer "+getCookie("token")
    }
}); };
export const getadminListPage = params => { return axios.get(`/v1/admin/?offset=${params.offset}&limit=10`); };
export const updatePass = params => { return axios.put(` /v1/admin/detail/${params.id}`, params,{
    headers:{
        "Authorization":"Bearer "+getCookie("token")
    }
}); };
export const getUserPage = params => { return axios.get(`/v1/admin/userlist/?offset=${params.offset}&limit=10`, { params: params ,headers:{
    "Authorization":"Bearer "+getCookie("token")
}}); };

export const delUser = params => { return axios.DELETE(`/v1/admin/userdel/${params.id}`, { params: params },{headers:{
    "Authorization":"Bearer "+getCookie("token")
}}); };

export const updateUser = params => { return axios.PUT(`/v1/admin/userupd/${params.id}`, { params: params },{headers:{
    "Authorization":"Bearer "+getCookie("token")
}}); };
//角色管理
export const addRole = params => { return axios.POST(`/v1/admin/roleadd`, { params: params },{headers:{
    "Authorization":"Bearer "+getCookie("token")
}}); };
export const getRole = params => { return axios.get(`/v1/admin/rolelist/?offset=${params.offset}&limit=10`, { params: params,headers:{
    "Authorization":"Bearer "+getCookie("token")
}}); };
export const updateRole = params => { return axios.PUT(`/v1/admin/roleupd/${params.id}`, { params: params },{headers:{
    "Authorization":"Bearer "+getCookie("token")
}}); };
//广告管理
export const bannerList = params => { return axios.GET(`/v1/admin/banner/?offset=${params.offset}&limit=10`, { params: params,headers:{
    "Authorization":"Bearer "+getCookie("token")
}}); };
export const addbanner = params => { return axios.POST(`/v1/admin/banner/`, { params: params},{headers:{
    "Authorization":"Bearer "+getCookie("token")
}}); };
export const updatebanner = params => { return axios.PUT(`/v1/admin/banner/${params.id}`, { params: params},{headers:{
    "Authorization":"Bearer "+getCookie("token")
}}); };
export const updatebannerpic = params => { return axios.PUT(`/v1/admin/bannerupload/${params.id}`, { params: params},{headers:{
    "Authorization":"Bearer "+getCookie("token")
}}); };
export const checkbanner = params => { return axios.GET(`/v1/admin/banner/${params.id}`, { params: params},{headers:{
    "Authorization":"Bearer "+getCookie("token")
}}); };
export const delbanner = params => { return axios.DELETE(`/v1/admin/banner/${params.id}`, { params: params},{headers:{
    "Authorization":"Bearer "+getCookie("token")
}}); };



//////lizi 
export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const getShopListPage = params => { return axios.get(`${base}/shop/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };