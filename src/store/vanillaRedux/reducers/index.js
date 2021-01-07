import {
	FETCH_CURRENT_USER_START,
	FETCH_CURRENT_USER_SUCCESS,
	FETCH_CURRENT_USER_FAILURE,
	FETCH_CURRENT_USER_RECIPES_START,
	FETCH_CURRENT_USER_RECIPES_SUCCESS,
	FETCH_CURRENT_USER_RECIPES_FAILURE,
	POST_USER_LOGIN_START,
	POST_USER_LOGIN_SUCCESS,
	POST_USER_LOGIN_FAILURE,
	FETCH_USER_LOGOUT_START,
	FETCH_USER_LOGOUT_SUCCESS,
	FETCH_USER_LOGOUT_FAILURE,
	POST_USER_RECIPE_START,
	POST_USER_RECIPE_SUCCESS,
	POST_USER_RECIPE_FAILURE,
	DELETE_RECIPE_BY_ID_START,
	DELETE_RECIPE_BY_ID_SUCCESS,
	DELETE_RECIPE_BY_ID_FAILURE,
	PUT_RECIPE_BY_ID_START,
	PUT_RECIPE_BY_ID_SUCCESS,
	PUT_RECIPE_BY_ID_FAILURE,
	REJECT_LOGGED_IN,
	CONFIRM_LOGGED_IN,
	POST_NEW_USER_START,
	POST_NEW_USER_SUCCESS,
	POST_NEW_USER_FAILURE
} from '../actions/index'

const initialState = {
	isLoading: false,
	isLoggedIn: true,
	recipeData: [],
	userData: {},
	newRecipeData: {},
	error: ''
}

export const vanillaReducer = (state = initialState, action) => {
	switch (action.type) {

		//user recipes
		case FETCH_CURRENT_USER_RECIPES_START:
			return {
				...state,
				isLoading: true,
				error: ''
			}

		case FETCH_CURRENT_USER_RECIPES_SUCCESS:
			return {
				...state,
				isLoading: false,
				recipeData: action.payload,
				error: ''
			}

		case FETCH_CURRENT_USER_RECIPES_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			}

		//user info
		case FETCH_CURRENT_USER_START:
			return {
				...state,
				isLoading: true,
				error: ''
			}

		case FETCH_CURRENT_USER_SUCCESS:
			return {
				...state,
				isLoading: false,
				userData: action.payload,
				error: ''
			}

		case FETCH_CURRENT_USER_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			}

		//login
		case POST_USER_LOGIN_START:
			return {
				...state,
				isLoading: true,
				error: ''
			}

		case POST_USER_LOGIN_SUCCESS:
			return {
				...state,
				isLoading: false,
				isLoggedIn: true,
				error: '',
			}

		case POST_USER_LOGIN_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			}

		//logout
		case FETCH_USER_LOGOUT_START:
			return {
				...state,
				isLoading: true,
				error: ''
			}

		case FETCH_USER_LOGOUT_SUCCESS:
			return {
				...state,
				isLoading: false,
				isLoggedIn: false,
				error: '',
			}

		case FETCH_USER_LOGOUT_FAILURE:
			return {
				...state,
				isLoading: false,
				isLoggedIn: true,
				error: action.payload
			}

		//new recipe
		case POST_USER_RECIPE_START:
			return {
				...state,
				isLoading: true,
				error: ''
			}

		case POST_USER_RECIPE_SUCCESS:
			return {
				...state,
				isLoading: false,
				newRecipeData: action.payload,
				error: ''
			}

		case POST_USER_RECIPE_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			}

		//delete recipe
		case DELETE_RECIPE_BY_ID_START:
			return {
				...state,
				isLoading: true,
				error: ''
			}

		case DELETE_RECIPE_BY_ID_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: ''
			}

		case DELETE_RECIPE_BY_ID_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			}

		//update recipe
		case PUT_RECIPE_BY_ID_START:
			return {
				...state,
				isLoading: true,
				error: ''
			}

		case PUT_RECIPE_BY_ID_SUCCESS:
			return {
				...state,
				isLoading: false,
				newRecipeData: action.payload,
				error: ''
			}

		case PUT_RECIPE_BY_ID_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			}

		//login authentication
		case CONFIRM_LOGGED_IN:
			return {
				...state,
				isLoggedIn: action.payload
			}

		case REJECT_LOGGED_IN:
			return {
				...state,
				isLoggedIn: action.payload
			}

		//signup
		case POST_NEW_USER_START:
			return {
				...state,
				isLoading: true,
				error: ''
			}

		case POST_NEW_USER_SUCCESS:
			return {
				...state,
				isLoading: false,
				isLoggedIn: true,
				error: ''
			}

		case POST_NEW_USER_FAILURE:
			return {
				...state,
				isLoading: false,
				isLoggedIn: false,
				error: action.payload
			}

		default:
			return state;
	}
}