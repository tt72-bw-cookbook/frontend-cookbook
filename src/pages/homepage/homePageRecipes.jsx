import React from "react";
import styled from "styled-components";
import HomePageRecipeCard from './homePageRecipeCard';


const HomePageRecipes= props => {

    const { recipes } = props

    console.log('recipe data', recipes);

	return (
		<>
    <RecipeContain>
        <HomePageRecipeCard recipes={recipes} />
    </RecipeContain>
		</>
    );
    
};

const RecipeContain = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
`;

export default HomePageRecipes;