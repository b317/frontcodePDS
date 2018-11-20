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