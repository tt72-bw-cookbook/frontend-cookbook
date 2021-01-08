import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import HomePageRecipeCard from './homePageRecipeCard';


const HomePageRecipes = props => {

	const { recipe } = props

	return (
		<RecipeContain>
			<HomePageRecipeCard recipe={recipe} />
		</RecipeContain>
	);

};

const RecipeContain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 32.5%;
    border: 2px solid white;
    border-radius: 25px;
    margin: .4%;
    background-color: white;
`;

export default HomePageRecipes;