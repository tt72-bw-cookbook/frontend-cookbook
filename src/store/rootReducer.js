import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "../pages/search/slice/searchSlice";
import { vanillaReducer } from './vanillaRedux/reducers/index';
const rootReducer = combineReducers({
	search: searchReducer,
	user: vanillaReducer
});

export default rootReducer;
