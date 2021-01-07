import React from "react";
import styled from "styled-components";


const HomePageRecipeCard= props => {

    const { recipes } = props


	return (
		<>
        <RecipeCard>
            <Recipeimg src = {recipes.pictureurl} />
            <RecipeH2>{recipes.title} </RecipeH2>
            <RecipeDes> {recipes.instructions} </RecipeDes>
        </RecipeCard>
		</>
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