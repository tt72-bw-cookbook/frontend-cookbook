import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "../../common/components/";
import axios from 'axios';
import { HomePageRecipes } from './components';
import SearchContainer from "../search/SearchContainer";

// GET Recipes data 
const recipesURL = 'https://tt72-cookbook.herokuapp.com/recipes';

const HomePageContainer = props => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		axios
			.get(recipesURL)
			.then((res) => {
				// console.log(res.data.elements)
				setRecipes(res.data.elements)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	return (
		<>
			<Header />
			<SearchContainer />
			<HomeBody>
				<RecipesContainer>
					{
						recipes.slice(0, 18).map(recipe => {
							return <HomePageRecipes key={recipe.recipeid} recipes={recipe} />;
						})
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
	width: 90%;
	padding-top: 1%;
`;

export default HomePageContainer;