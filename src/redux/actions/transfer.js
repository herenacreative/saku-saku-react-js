import {axios} from 'libraries';

import config from '../../configs/index';
// http://localhost:8080/saku-saku/images/2020-10-06T10:48:52.057ZEvery-Mac-wallpaper.jpeg

export const getAllTransfer = (token, id) =>{
    return{
        type: "GET_TRANSEFR_ALL",
        payload: axios({
            method: 'GET',
            url: `${config.baseURL}/transfer/${id}`,
            headers: {
              Authorization: token
            }
        })
    }
}

export const getTransfer = (token, id) =>{
    return{
        type: "GET_TRANSEFR",
        payload: axios({
            method: 'GET',
            url: `${config.baseURL}/transfer/${id}`,
            headers: {
              Authorization: token
            }
        })
    }
}

export const postTransfer = () =>{
    return{
        type: "POST_TRANSFER",
        payload: axios({
            method: 'POST',
            url: `${config.baseURL}/transfer`,
            // headers: {
            //   Authorization: token
            // }
        })
    }
}