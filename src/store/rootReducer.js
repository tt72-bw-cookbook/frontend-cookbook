import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "../pages/search/slice/searchSlice";
const rootReducer = combineReducers({
	search: searchReducer,
});

export default rootReducer;