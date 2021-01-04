import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "./initState";

export const fireSearch = createAsyncThunk(
	"search/status",
	async (filters, search = "") => {
		let res;
		if (search === "") {
			res = await axios.get(`https://tt72-cookbook.herokuapp.com/recipes${filters}`);
		} else {
			res = await axios.get(`https://tt72-cookbook.herokuapp.com/recipes/${search}${filters}`);
		}
		return res;
	}
)

const searchSlice = createSlice({
	name: "search",
	initialState: initialState,
	reducers: {
		addFilter: (state, action) => { },
		removeFilter: (state, action) => { },
	},
	extraReducers: {}
});

export const { addFilter, removeFilter } = searchSlice.actions;
// export selectSearch = 
export default searchSlice.reducer;