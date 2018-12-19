import axios from 'axios'
import {getCookie} from "../util/auth"
export function login(userInfo){
    return axios.post("/v1/global/userlogin",{
            username: userInfo.username,
            password: userInfo.password
    })
}
export function loginByvCode(userInfo){
    return axios.post("/v1/global/userloginbysms",{
            username: userInfo.username,
            vcode: userInfo.vcode
    })
}
export function register(userInfo){
    return axios.post("/v1/global/register",{
        username: userInfo.username,
        password: userInfo.password,
        vcode: userInfo.vcode
    })
}
export function getvCode(info){//获取短信验证码
    return axios.post("/v1/global/vcode",{
        phone_num: info.phone
    })
}
export function updateUser(id,params){//更新用户信息
    return axios.put("/v1/user/update/"+id,
        params,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer '+getCookie("token")
            }
        }
    )
}
export function upuserpic(id,params){//更新用户头像
    return axios.put("/v1/user/upload/"+id,
    params,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer '+getCookie("token")
            }
        }
    )
}
export function getUserInfo(info){//获取用户信息
    return axios.get("/v1/user/detail/"+info.id,{
        headers: {
            'Authorization': 'Bearer '+getCookie("token")
        }
    })
}
export function resetPass(id,params){//重置密码
    return axios.put("/v1/user/resetpwd/"+id,params,
        {
            headers:{
                "content-type":"x-www-form-urlencoded",
                'Authorization': 'Bearer '+getCookie("token")
            }
        }
    )
}
export function banner(){//获取轮播图
    return axios.get("/v1/global/banner/?offset=1&limit=4",
        {
            headers:{
                'Authorization': 'Bearer '+getCookie("token")
            }
        }
    )
}
export function getmainsort(){//获取轮播图
    return axios.get("/v1/global/mainsort/?offset=1&limit=13",
        {
            headers:{
                'Authorization': 'Bearer '+getCookie("token")
            }
        }
    )
}
export function getsubsort(id){//获取轮播图
    return axios.get("/v1/global/subsort/?offset=1&limit=20&pid="+id,
        {
            headers:{
                'Authorization': 'Bearer '+getCookie("token")
            }
        }
    )
}
export function getstatus(id){//获取状态
    return axios.get("/v1/user/merchant/"+id,
        {
            headers:{
                'Authorization': 'Bearer '+getCookie("token")
            }
        }
    )
}
export function renshop(params){//商家认证
    let data = new FormData()
    data.append("shop_name",params.shop_name)
    data.append("shop_phone",params.shop_phone)
    data.append("shop_cert",params.shop_cert)
    data.append("shop_qq",params.shop_qq)
    data.append("shop_intro",params.shop_intro)
    data.append("shop_addr",params.shop_addr)
    data.append("owner_cert",params.owner_cert)
    data.append("owner_id",params.owner_id)
    data.append("shop_logo",params.shop_logo)
    return axios.post("/v1/user/merchant/",
        data,
        {
            headers:{
                'Authorization': 'Bearer '+getCookie("token")
            }
        }
    )
}

export function upnshop(params){//重新认证
    let data = new FormData()
    data.append("shop_name",params.shop_name)
    data.append("shop_phone",params.shop_phone)
    data.append("shop_cert",params.shop_cert)
    data.append("shop_qq",params.shop_qq)
    data.append("shop_intro",params.shop_intro)
    data.append("shop_addr",params.shop_addr)
    data.append("owner_cert",params.owner_cert)
    data.append("shop_logo",params.shop_logo)
    return axios.put("/v1/user/merchant/"+params.id,
        data,
        {
            headers:{
                'Authorization': 'Bearer '+getCookie("token")
            }
        }
    )
}

