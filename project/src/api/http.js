import axios from 'axios'
import {env} from "@/configs";

export function login(userInfo){
    return axios.post(env+"/login",{
            username: userInfo.username,
            password: userInfo.password
    })
}
export function register(userInfo){
    return axios.post(env+"/register",{
            username: userInfo.name,
            password: userInfo.password,
            idenCode: userInfo.idenCode
    })
}
export function getBigpic(info){
    return axios.post(env+"/getBigpic",{
            pic: info.pic
    })
}
