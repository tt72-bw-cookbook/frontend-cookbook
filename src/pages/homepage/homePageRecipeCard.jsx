import React from "react";
import styled from "styled-components";


const HomePageRecipeCard= props => {

    const { recipes } = props


	return (
		<>
        <RecipeH2>{recipes.title} </RecipeH2>
        <img src = {recipes.pictureurl} />

		</>
    );
    
};

const RecipeH2 = styled.h2`
    font-size: 2rem;
`

export default HomePageRecipeCard;