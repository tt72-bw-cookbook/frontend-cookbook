import axios from 'axios';
import axiosAuth from '../../../utils/axiosAuth';

//action types
export const FETCH_CURRENT_USER_START = 'FETCH_CURRENT_USER_START';
export const FETCH_CURRENT_USER_SUCCESS = 'FETCH_CURRENT_USER_SUCCESS';
export const FETCH_CURRENT_USER_FAILURE = 'FETCH_CURRENT_USER_FAILURE';

export const FETCH_CURRENT_USER_RECIPES_START = 'FETCH_CURRENT_USER_RECIPES_START';
export const FETCH_CURRENT_USER_RECIPES_SUCCESS = 'FETCH_CURRENT_USER_RECIPES_SUCCESS';
export const FETCH_CURRENT_USER_RECIPES_FAILURE = 'FETCH_CURRENT_USER_RECIPES_FAILURE';

//action creators
export const fetchCurrentUser = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_CURRENT_USER_START});

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
    dispatch({ type: FETCH_CURRENT_USER_RECIPES_START});

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

