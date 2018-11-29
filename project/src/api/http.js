import axios from 'axios'

export function login(userInfo){
    return axios.post("/v1/user/login",{
            username: userInfo.username,
            password: userInfo.password
    })
}
export function loginByvCode(userInfo){
    return axios.post(env+"/v1/user/loginbysms",{
            username: userInfo.username,
            vcode: userInfo.vcode
    })
}
export function register(userInfo){
    return axios.post("/v1/user/",{
        username: userInfo.name,
        password: userInfo.password,
        vcode: userInfo.vcode
    })
}
export function getvCode(info){//获取短信验证码
    return axios.post("/v1/user/vcode/",{
        phone_num: info.phone
    })
}
