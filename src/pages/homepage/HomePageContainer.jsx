import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Header, Heading } from "../../common/components/";
import { HomePageRecipeCard } from './components';
import SearchContainer from "../search/SearchContainer";
import { fireSearch } from "../search/slice/searchSlice";

const HomePageContainer = props => {
	const dispatch = useDispatch();
	const searchState = useSelector(state => state.search)
	const { search, recipeData } = searchState;

	const recipes = recipeData.elements;



	useEffect(() => {
		dispatch(fireSearch(search));
	}, [dispatch, search])

	return (
		<>
			<Header />
			<SearchContainer />
			<HomeBody>
				<RecipesContainer>
					{
						recipes.length > 0 ?
							// recipes.slice(0, 18)
							recipes.map(recipe => {
								return (<HomePageRecipeCard key={recipe.recipeid} recipe={recipe} />);
							})
							: <Heading h3>No recipes match that search!</Heading>
					}
				</RecipesContainer>
			</HomeBody>
		</>
	);
}

const HomeBody = styled.div`
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	
	h1 {
		margin: 20rem;
		font-size: 5rem;
		font-weight: 800;
		text-align: center;
	}
`;

const RecipesContainer = styled.div`
	display: flex;
	flex-flow: wrap;
	justify-content: space-evenly;
	width: 96%;
	padding-top: 1%;
`;

export default HomePageContainer;