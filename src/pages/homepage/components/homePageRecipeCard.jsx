import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

const HomePageRecipeCard = props => {
	const { recipe } = props
	const id = recipe.recipeid

	return (
		<RecipeCard>
			<Link to={`/recipe/${id}`}>
				<Recipeimg src={recipe.pictureurl} />
				<RecipeH2>{recipe.title} </RecipeH2>
				<RecipeDes> {recipe.instructions} </RecipeDes>
			</Link>
		</RecipeCard >
	);

};

const RecipeCard = styled.div`
   background-color: white;
   padding: 3%;
   flex: 1;
`

const RecipeH2 = styled.h2`
    font-size: 2.4rem;
    font-style: italic;
    color: black;
    padding-bottom: 2%;
`

const RecipeDes = styled.h2`
    font-size: 1.8rem;
    font-style: italic;
    color: black;
    padding-bottom: 1%;
`

const Recipeimg = styled.img`
    width: 100%;
    height: 240px;
`

export default HomePageRecipeCard;