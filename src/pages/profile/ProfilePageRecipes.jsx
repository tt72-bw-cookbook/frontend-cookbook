import React from "react";
import styled from "styled-components";


const ProfilePageRecipes = props => {

	const { userRecipes } = props

	return (
		<>
			<UserRecipeDiv>
				<RecipeGenInfo>
					<RecipeImg src={userRecipes.pictureurl} />
					<RecipeTitle> {userRecipes.title} </RecipeTitle>
					{
						userRecipes.categories &&
						<CatDiv>
							<h4> Source: {userRecipes.source} </h4>
							<h4> Course: {userRecipes.categories.course} </h4>
							<h4> Cuisine: {userRecipes.categories.cuisine} </h4>
							<h4> Diet: {userRecipes.categories.dietaryconcerns} </h4>
							<h4> Type: {userRecipes.categories.dishtype} </h4>
							<h4> Technique: {userRecipes.categories.technique} </h4>
						</CatDiv>
					}
					<RecInstruct> {userRecipes.instructions} </RecInstruct>
				</RecipeGenInfo>
				<IngDiv>
					<IngH3>Ingredients:</IngH3>
					{
						userRecipes.ingredients.map(ing => {
							return (<EachIngDiv key={ing.ingredientname}>
								<ul>
									<li>{ing.ingredientname}: {ing.quantity} {ing.measurement}</li>
								</ul>
							</EachIngDiv>);
						})
					}
				</IngDiv>

			</UserRecipeDiv>
		</>
	);

};

const UserRecipeDiv = styled.div`
border: 1px solid white;
margin-bottom: 1%;
`;

const RecipeGenInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 1%;
`;

const RecipeTitle = styled.h2`
font-size: 2rem;
text-align: center;
Padding: 1%;
`;

const RecipeImg = styled.img`
height: 200px;
width: 200px;
`;

const RecInstruct = styled.p`
text-align: center;
Padding: 2%;

`;



const CatDiv = styled.div`
display: flex;
justify-content: space-evenly;
border: 1px solid white;
width: 100%;
padding: .5%;
`;

const IngDiv = styled.div`
padding: 1%;
`;

const IngH3 = styled.div`
font-size: 1.5rem;
`;

const EachIngDiv = styled.div`
display: flex;
padding: .3%;
padding-left: 4%;
`;



export default ProfilePageRecipes;