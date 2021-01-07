import styled from "styled-components";
import { CheckboxGroup, SearchBar } from "./components";

const SearchContainer = props => {
	return (
		<>

			<ParentWrap>
				<HomeH1> Find a Family Recipe </HomeH1>
			</ParentWrap>
			<SearchHeader>
				<SearchBar />
				<CheckboxGroup />
			</SearchHeader>
		</>
	);
}

const ParentWrap = styled.div`
	text-align: center;
	padding: .5rem;
	background-color: var(--tBase);
	position: relative;
`;

const SearchHeader = styled.header`
	/* height: 200px; */
	background-color: var(--tBase);
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: space-evenly;
	/* background-color: var(--tBase); */
	position: sticky;
	top: 0px;
	border-radius: 0 0 25px 25px;

`;

const HomeH1 = styled.h1`
	font-size: 8rem;
	padding-top: 1%;
	font-family: 'Italianno', cursive;
	font-style: bold;
	color: #F3F6FA;
`;





export default SearchContainer;