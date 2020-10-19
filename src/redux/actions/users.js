import { axios } from 'libraries';
import config from '../../configs/index';

export const getAllUsers = (token, search, page, limit) => {
	return {
		type: "GET_USER_ALL",
		payload: axios({
			method: 'GET',
			url: `${config.baseURL}/users/`,
			params: {
				search: search,
				page: page,
				limit: limit,
			},
			headers: {
				Authorization: token
			}
		})
	}
}

export const getIdUsers = (token, id) => {
	return {
		type: "GET_USER_ID",
		payload: axios({
			method: 'GET',
			url: `${config.baseURL}/users/${id}`,
			headers: {
				Authorization: token
			}
		})
	}
}

export const patchUser = (id, formData, token) => {
	return {
		type: "PATCH_USER",
		payload: axios({
			method: 'PATCH',
			url: `${config.baseURL}/users/${id}`,
			data: formData,
			headers: {
				Authorization: token
			}
		})
	}
}

export const deleteUser = (token, id) => {
	return {
		type: "DELETE_USER",
		payload: axios({
			method: 'DELETE',
			url: `${config.baseURL}/users/${id}`,
			headers: {
				Authorization: token
			}
		})
	}
}