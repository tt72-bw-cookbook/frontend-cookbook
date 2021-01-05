import React from "react";
import styled from "styled-components";
import { CheckboxGroup } from "./components";

const SearchContainer = props => {
	return (
		<>

			<ParentWrap>
				<HomeH1> Find a Family Recipe </HomeH1>
			</ParentWrap>
			<SearchHeader>
				<Search>
					<SearchInput
						key='random1'
						value={''}
						placeholder={'Type in recipes, ingredients, or types of food'}
						onChange={(e) => e.target.value}
					/>
				</Search>
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

`;

const HomeH1 = styled.h1`
	font-size: 5rem;
	padding-top: 1%;
	font-family: 'Italianno', cursive;
`;

const Search = styled.div`
	width: 60%;
	text-align: center;
	padding: 1%;
`;
const SearchInput = styled.input`
	width: 100%;
	height: 40px;
`;



export default SearchContainer;