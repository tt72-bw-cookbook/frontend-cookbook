import { useDispatch, useSelector } from "react-redux"
import { updateSearch, fireSearch } from "../slice/searchSlice";
import styled from "styled-components"

const SearchBar = (props) => {
	const searchTerm = useSelector(state => state.search.term);
	const searchState = useSelector(state => state.search);
	const dispatch = useDispatch();

	const handleChange = (evt) => {
		const { value } = evt.target;
		dispatch(updateSearch(value))
	}
	const onSubmit = (evt) => {
		evt.preventDefault();
		dispatch(fireSearch(searchState.search))
	}

	return (
		<>
			<Search>
				<form onSubmit={onSubmit}>
					<SearchInput
						type="text"
						name="searchWord"
						value={searchTerm}
						onChange={handleChange}
						placeholder="Type in recipes, ingredients, or types of food"
					/>
				</form>
			</Search>
		</>
	)
}

const Search = styled.div`
	width: 60%;
	text-align: center;
	padding: 1%;
`;
const SearchInput = styled.input`
	width: 100%;
	height: 40px;
`;

export default SearchBar;