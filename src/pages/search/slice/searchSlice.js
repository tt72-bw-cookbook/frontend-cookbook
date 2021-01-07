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
		addCategory: (state, action) => {
			const { category, option } = action.payload;
			state.search.categories[category] = option;
			if (state.search.term.includes(`${category}`)) {
				const idx = state.search.term.indexOf(`${category}`);
				console.log(idx);
			} else {
				state.search.term += (`${category}=${option}`)
			}
		},
		addFilter: (state, action) => {
			const [category, option] = action.payload.split(",");
			if (!state.facets[category][option]) {
				console.error("line 25 —— no such facet exists");
				return;
			}
			if (state.activeFacets.some(x => x.id === option)) {
				console.error("line 29 —— facet is already part of active facets");
				return;
			}
			const filter = state.facets[category][option];
			// const { course, id } = filter;
			let queryString = "";
			if (state.activeFacets.length === 0) {
				queryString += "?";
			} else {
				queryString += "&";
			}
			state.activeFacets.push(filter);
			state.searchData.searchTerm += queryString + `${category}=${option}`;
			state.searchData[category] ?
				state.searchData[category] += `,${option}`
				: state.searchData[category] = `${category}=${option}`
		},
		removeFilter: (state, action) => {
			const [category, option] = action.payload.split(",");
			if (!state.facets[category][option]) {
				console.error("no such facet exists");
				return;
			}
			if (state.activeFacets.some(x => x.id === option)) {
				state.activeFacets = state.activeFacets.filter(x => x.id !== option);
			} else {
				console.error("facet is not part of active facets");
				return;
			}
		},
	},
	extraReducers: {}
});

export const { addFilter, removeFilter, addCategory } = searchSlice.actions;

export default searchSlice.reducer;