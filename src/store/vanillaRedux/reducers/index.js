import {
  FETCH_CURRENT_USER_START,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_FAILURE,
  FETCH_CURRENT_USER_RECIPES_START,
  FETCH_CURRENT_USER_RECIPES_SUCCESS,
  FETCH_CURRENT_USER_RECIPES_FAILURE,

} from '../actions/index'

const initialState = {
  isLoading: false,
  recipeData: [],
  userData: {},
  error:''
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
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

    default:
      return state;
  }
}