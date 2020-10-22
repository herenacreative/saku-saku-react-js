import { axios } from 'libraries';
import config from '../../configs/index';

export const getAllTransfer = (token, id) => {
  return {
    type: "GET_ALL_TRANSFER",
    payload: axios({
      method: 'GET',
      url: `${config.baseURL}/transfer/${id}`,
      headers: {
        Authorization: token
      }
    })
  }
}

export const getAdminTransfer = (token) =>{
    return{
        type: "GET_ADMIN_TRANSEFR",
        payload: axios({
            method: 'GET',
            url: `${config.baseURL}/transfer`,
            headers: {
              Authorization: token
            }
        })
    }
}

export const postTransfer = (token, data) => {
  return {
    type: "POST_TRANSFER",
    payload: axios({
      method: 'POST',
      url: `${config.baseURL}/transfer`,
      data: data,
      headers: {
        Authorization: token
      }
    })
  }
}

export const patchTransfer = (token, id, data) => {
  return {
    type: "PATCH_TRANSFER",
    payload: axios({
      method: 'PATCH',
      url: `${config.baseURL}/transfer/${id}`,
      data: data,
      headers: {
        Authorization: token
      }
    })
  }
}

export const deleteTransfer = (token, id) => {
  return {
    type: "DELETE_TRANSFER",
    payload: axios({
      method: 'DELETE',
      url: `${config.baseURL}/transfer/${id}`,
      headers: {
        Authorization: token
      }
    })
  }
}