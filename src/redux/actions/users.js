import {axios} from 'libraries';
import config from '../../configs/index';

export const getAllUsers = (token) =>{
    return{
        type: "GET_USER_ALL",
        payload: axios({
            method: 'GET',
            url: `${config.baseURL}/auth/users`,
            headers: {
              Authorization: token
            }
        })
    }
}

export const getIdUsers = (token, id) =>{
    return{
        type: "GET_USER_ID",
        payload: axios({
            method: 'GET',
            url: `${config.baseURL}/auth/users/${id}`,
            headers: {
              Authorization: token
            }
        })
    }
}

export const getUser = (id) =>{
    return{
        type: "GET_USER",
        payload: axios({
            method: 'GET',
            url: `${config.baseURL}/auth/users/${id}`,
            // headers: {
            //   Authorization: token
            // }
        })
    }
}

export const patchUser = (token, id) =>{
    return{
        type: "PATCH_USER",
        payload: axios({
            method: 'PATCH',
            url: `${config.baseURL}/auth/users/${id}`,
            headers: {
              Authorization: token
            }
        })
    }
}
