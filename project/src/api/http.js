import axios from 'axios'
import {env} from "@/configs";

export function login(userInfo){
    return axios.post(env+"/login",{
        params: {
            username: userInfo.name,
            password: userInfo.password
        }
    })
}
export function register(userInfo){
    return axios.post(env+"/register",{
        params: {
            username: userInfo.name,
            password: userInfo.password,
            idenCode: userInfo.idenCode
        }
    })
}
export function getBigpic(info){
    return axios.post(env+"/getBigpic",{
        params: {
            pic: info.pic
        }
    })
}
