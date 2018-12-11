import axios from 'axios'

export function login(userInfo){
    console.log(userInfo)
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
export function updateUser(info){//更新用户信息
    console.log(info)
    return axios.put("/v1/user/update/"+info.id,
        info.data,
        // {
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     }
        // }
    )
}
export function getUserInfo(info){//获取用户信息
    return axios.get("/v1/user/"+info.id)
}
export function resetPass(info){//重置密码
    return axios.put("/v1/user/resetpwd/"+info.id,{
            password:info.password
        },
        {
            headers:{
                "content-type":"x-www-form-urlencoded"
            }
        }
    )
}
export function upload(info){//重置密码
    return axios.put("/v1/user/upload/"+info.id,{
            file:info.file.file
        },
        {
            headers:{
                "content-type":"multipart/form-data"
            }
        }
    )
}
