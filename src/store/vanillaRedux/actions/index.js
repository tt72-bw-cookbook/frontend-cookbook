// import axios from 'axios';
import axiosAuth from '../../../utils/axiosAuth';
import { axiosLogin } from '../../../utils/axiosSecret';

//action types
export const FETCH_CURRENT_USER_START = 'FETCH_CURRENT_USER_START';
export const FETCH_CURRENT_USER_SUCCESS = 'FETCH_CURRENT_USER_SUCCESS';
export const FETCH_CURRENT_USER_FAILURE = 'FETCH_CURRENT_USER_FAILURE';

export const FETCH_CURRENT_USER_RECIPES_START = 'FETCH_CURRENT_USER_RECIPES_START';
export const FETCH_CURRENT_USER_RECIPES_SUCCESS = 'FETCH_CURRENT_USER_RECIPES_SUCCESS';
export const FETCH_CURRENT_USER_RECIPES_FAILURE = 'FETCH_CURRENT_USER_RECIPES_FAILURE';

export const POST_USER_LOGIN_START = 'POST_USER_LOGIN_START';
export const POST_USER_LOGIN_SUCCESS = 'POST_USER_LOGIN_SUCCESS';
export const POST_USER_LOGIN_FAILURE = 'POST_USER_LOGIN_FAILURE';

export const FETCH_USER_LOGOUT_START = 'FETCH_USER_LOGOUT_START';
export const FETCH_USER_LOGOUT_SUCCESS = 'FETCH_USER_LOGOUT_SUCCESS';
export const FETCH_USER_LOGOUT_FAILURE = 'FETCH_USER_LOGOUT_FAILURE';

export const POST_USER_RECIPE_START = 'POST_USER_RECIPE_START';
export const POST_USER_RECIPE_SUCCESS = 'POST_USER_RECIPE_SUCCESS';
export const POST_USER_RECIPE_FAILURE = 'POST_USER_RECIPE_FAILURE';

export const DELETE_RECIPE_BY_ID_START = 'DELETE_RECIPE_BY_ID_START';
export const DELETE_RECIPE_BY_ID_SUCCESS = 'DELETE_RECIPE_BY_ID_SUCCESS';
export const DELETE_RECIPE_BY_ID_FAILURE = 'DELETE_RECIPE_BY_ID_FAILURE';

export const PUT_RECIPE_BY_ID_START = 'PUT_RECIPE_BY_ID_START';
export const PUT_RECIPE_BY_ID_SUCCESS = 'PUT_RECIPE_BY_ID_SUCCESS';
export const PUT_RECIPE_BY_ID_FAILURE = 'PUT_RECIPE_BY_ID_FAILURE';

//action creators
export const fetchCurrentUser = () => {
	return (dispatch) => {
		dispatch({ type: FETCH_CURRENT_USER_START });

		axiosAuth().get('users/current')
			.then((res) => {
				dispatch({
					type: FETCH_CURRENT_USER_SUCCESS,
					payload: res.data
				})
			})
			.catch((err) => {
				dispatch({
					type: FETCH_CURRENT_USER_FAILURE,
					payload: err.message
				})
			})
	}
}

export const fetchCurrentUserRecipes = () => {
	return (dispatch) => {
		dispatch({ type: FETCH_CURRENT_USER_RECIPES_START });

		axiosAuth().get('recipes/currentuser')
			.then((res) => {
				dispatch({
					type: FETCH_CURRENT_USER_RECIPES_SUCCESS,
					payload: res.data
				})
			})
			.catch((err) => {
				dispatch({
					type: FETCH_CURRENT_USER_RECIPES_FAILURE,
					payload: err.message
				})
			})
	}
}

export const postUserLogin = (username, password) => {
	return (dispatch) => {
		dispatch({ type: POST_USER_LOGIN_START });
		axiosLogin(username, password)
			.then((res) => {
				dispatch({
					type: POST_USER_LOGIN_SUCCESS,
					payload: res.data.access_token
				})
			})
			.catch((err) => {
				dispatch({
					type: POST_USER_LOGIN_FAILURE,
					payload: err.message
				})
			})
	}
}

export const fetchUserLogout = () => {
	return (dispatch) => {
		dispatch({ type: FETCH_USER_LOGOUT_START })
		axiosAuth().get('/logout')
			.then((res) => {
				dispatch({
					type: FETCH_USER_LOGOUT_SUCCESS,
					payload: res.data
				})
			})
			.catch((err) => {
				dispatch({
					type: FETCH_USER_LOGOUT_FAILURE,
					payload: err.message
				})
			})
	}
}

export const postUserRecipe = (newRecipe) => {
	return (dispatch) => {
		dispatch({ type: POST_USER_RECIPE_START });

		axiosAuth().post('recipes', newRecipe)
			.then((res) => {
				dispatch({
					type: POST_USER_RECIPE_SUCCESS,
					payload: res.data
				})
			})
			.catch((err) => {
				dispatch({
					type: POST_USER_RECIPE_FAILURE,
					payload: err.message
				})
			})
	}
}

export const deleteRecipeById = (id) => {
	return (dispatch) => {
		dispatch({ type: DELETE_RECIPE_BY_ID_START });

		axiosAuth().delete(`recipe/${id}`)
			.then((res) => {
				dispatch({
					type: DELETE_RECIPE_BY_ID_SUCCESS,
					payload: res.data
				})
			})
			.catch((err) => {
				dispatch({
					type: DELETE_RECIPE_BY_ID_FAILURE,
					payload: err.message
				})
			})
	}
}

export const putRecipeById = (id, updateFields) => {
	return (dispatch) => {
		dispatch({ type: PUT_RECIPE_BY_ID_START });

		axiosAuth().put(`recipe/${id}`, updateFields)
			.then((res) => {
				dispatch({
					type: PUT_RECIPE_BY_ID_SUCCESS,
					payload: res.data
				})
			})
			.catch((err) => {
				dispatch({
					type: PUT_RECIPE_BY_ID_FAILURE,
					payload: err.message
				})
			})
	}
}

