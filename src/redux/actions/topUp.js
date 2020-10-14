import { axios } from 'libraries';
import config from '../../configs/index';

export const getAllTopUp = (token) => {
  return {
    type: "GET_ALL_TOP_UP",
    payload: axios({
      method: 'GET',
      url: `${config.baseURL}/top-up`,
      headers: {
        Authorization: token
      }
    })
  }
}

export const getIdTopUp = (token, id) => {
  return {
    type: "GET_ID_TOP_UP",
    payload: axios({
      method: 'GET',
      url: `${config.baseURL}/top-up/${id}`,
      headers: {
        Authorization: token
      }
    })
  }
}

export const postTopUp = (token, data) => {
  return {
    type: "POST_TOP_UP",
    payload: axios({
      method: 'POST',
      url: `${config.baseURL}/top-up`,
      data: data,
      headers: {
        Authorization: token
      }
    })
  }
}

export const patchTopUp = (token, id, data) => {
  return {
    type: "PATCH_TOP_UP",
    payload: axios({
      method: 'PATCH',
      url: `${config.baseURL}/top-up/${id}`,
      data: data,
      headers: {
        Authorization: token
      }
    })
  }
}

export const deleteTopUp = (token, id) => {
  return {
    type: "DELETE_TOP_UP",
    payload: axios({
      method: 'DELETE',
      url: `${config.baseURL}/top-up/${id}`,
      headers: {
        Authorization: token
      }
    })
  }
}