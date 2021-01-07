import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "./initState";

export const fireSearch = createAsyncThunk(
	"search/status",
	async (search) => {

		const { queryCategory, querySearch, categories } = search;

		let finalQuery = "";
		let categoryString = "";

		Object.entries(categories).forEach(([ctg, opt]) => {
			console.log(ctg, opt);
			if (opt !== "") {
				categoryString += `${ctg}=${opt}`;
			}
		})

		if (querySearch !== "") {
			finalQuery += `/${querySearch}`
		}
		if (categoryString !== "") {
			finalQuery += `?${categoryString}`
		}

		let res = await axios.get(`https://tt72-cookbook.herokuapp.com/recipes${finalQuery}`);;
		// if (finalQuery === "") {
		// 	res = await axios.get(`https://tt72-cookbook.herokuapp.com/recipes/`);
		// } else {
		// 	res = await axios.get(`https://tt72-cookbook.herokuapp.com/recipes/${finalQuery}`);
		// }
		return res.data;
	}
)

const replaceAt = (str, index, replacement) => {
	return str.substr(0, index) + replacement + str.substr(index + replacement.length);
}


const searchSlice = createSlice({
	name: "search",
	initialState: initialState,
	reducers: {
		updateSearch: (state, action) => {
			const value = action.payload;
			// state.search.querySearch = value.concat(state.search.querySearch);
			state.search.querySearch = value;
		},
		addCategory: (state, action) => {
			const { category, option } = action.payload;
			state.search.categories[category] = option;
			// if (state.search.queryCategory.includes(`${category}`)) {
			// 	let idx = state.search.queryCategory.indexOf(`${category}`);
			// 	idx += category.length + 1;
			// 	state.search.queryCategory = replaceAt(state.search.queryCategory, idx, option)
			// 	console.log(idx);
			// } else {
			// 	state.search.queryCategory += (`${category}=${option}`)
			// }
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
	extraReducers: {
		[fireSearch.pending]: (state, action) => {
			state.status = "pending";
			// console.log(action.payload)
		},
		[fireSearch.fulfilled]: (state, action) => {
			state.status = "fulfilled"
			// console.log(action.payload)
			state.searchData = action.payload;
		},
		[fireSearch.rejected]: (state, action) => {
			state.status = "rejected"
			console.log(action.payload)
		},
		[fireSearch.resolved]: (state, action) => {
			state.status = "idle"
		}
	}
});

export const { addFilter, removeFilter, addCategory, updateSearch } = searchSlice.actions;

export default searchSlice.reducer;