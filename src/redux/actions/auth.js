import { axios } from 'libraries';
import config from '../../configs/index';

export const login = log => {
  return {
    type: "LOGIN",
    payload: axios({
      method: 'POST',
      url: `${config.baseURL}/auth/login`,
      data: log,
      // headers: {
      //   'Access-Control-Allow-Origin': '*'
      // }
    })
  }
}

export const logout = () => {
  return {
    type: "LOGOUT_FULFILLED"
  }
}

export const register = (data) => {
  return {
    type: "REGISTER",
    payload: axios({
      method: 'POST',
      url: `${config.baseURL}/auth/sign-up`,
      data: data
    })
  }
}