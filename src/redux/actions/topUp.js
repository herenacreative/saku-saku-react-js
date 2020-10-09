import {axios} from 'libraries';
// import API from 'configs';
import config from '../../configs/index';

export const getAllTopUp = (token) =>{
    return{
        type: "GET_TOP_UP",
        payload: axios({
            method: 'GET',
            url: `${config.baseURL}/top-up`,
            headers: {
              Authorization: token
            }
        })
    }
}