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
		addFilter: (state, action) => {
			const [category, option] = action.payload.split(",");
			console.log(option);
			console.log(state.activeFacets);
			if (!state.facets[category][option] || state.activeFacets.includes(x => {
				console.log(x);
				console.log({ id: x.id, option })
				return x.id === option
			}, 0)) {
				console.log("fuck");
				return;
			}

			const filter = state.facets[category][option];

			if (state.activeFacets.includes(filter)) {
				console.log("yes");
				return;
			} else {
				state.activeFacets.push(filter);
			}
		},
		removeFilter: (state, action) => {
			const { filter } = action.payload;
			if (state.activeFacets.includes(x => x.id === filter.id)) {
				state.activeFacets = state.activeFacets.filter(x => x.id !== filter.id);
			}
		},
	},
	extraReducers: {}
});

export const { addFilter, removeFilter } = searchSlice.actions;

export default searchSlice.reducer;