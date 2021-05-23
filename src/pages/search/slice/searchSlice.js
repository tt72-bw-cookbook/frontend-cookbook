import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "./initState";

export const fireSearch = createAsyncThunk(
	"search/status",
	async (search) => {
		const { querySearch, categories } = search;
		let finalQuery = "";
		let categoryString = "";
		Object.entries(categories).forEach(([ctg, opt]) => {
			console.log(ctg, opt);
			if (opt !== "") {
				categoryString += `${categoryString === ""  ? "" : "&"}${ctg}=${opt}`;
			}
		})
		if (querySearch !== "") {
			finalQuery += `/${querySearch}`
		}
		if (categoryString !== "") {
			finalQuery += `?${categoryString}`;
		}
		// https://tt72-cookbook.herokuapp.com/recipes?query=cake&cuisine=american&technique=noCook&dietaryconcerns=kosher&
		let res = await axios.get(`https://tt72-cookbook.herokuapp.com/recipes${finalQuery}`);
		return res.data;
	}
)

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		updateSearch: (state, action) => {
			const value = action.payload;
			state.search.querySearch = value;
		},
		addCategory: (state, action) => {
			const { category, option } = action.payload;
			state.search.categories[category] = option;
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
			let queryString = "";
			if (state.activeFacets.length === 0) {
				queryString += "?";
			} else {
				queryString += "&";
			}
			state.activeFacets.push(filter);
			state.searchData.searchTerm += queryString + `${category}=${option}`;
			state.searchData[category]
				? state.searchData[category] += `,${option}`
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
	extraReducers: {
		[fireSearch.pending]: (state, _) => {
			state.status = "pending";
		},
		[fireSearch.fulfilled]: (state, action) => {
			state.status = "fulfilled"
			state.recipeData = action.payload;
		},
		[fireSearch.rejected]: (state, action) => {
			state.status = "rejected"
			console.log(action.payload)
		}
	}
});

export const { addFilter, removeFilter, addCategory, updateSearch } = searchSlice.actions;

export default searchSlice.reducer;
