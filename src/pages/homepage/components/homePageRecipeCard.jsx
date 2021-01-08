import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

const HomePageRecipeCard = props => {
	const { recipe } = props
	const id = recipe.recipeid

	return (
		<>

			<RecipeH2>{recipe.title} </RecipeH2>
			<RecipeCard>
				<Link to={`/recipe/${id}`}>
					<Recipeimg src={recipe.pictureurl} />
					{/* <RecipeH2>{recipes.title} </RecipeH2> */}
					<CategDiv>
						<div>
							<h4> <CSpan> Course: </CSpan> {recipe.categories.course}</h4>
							<h4> <CSpan> Cuisine:  </CSpan> {recipe.categories.cuisine}</h4>
						</div>
						<div>
							<h4> <CSpan> Dietary: </CSpan> {recipe.categories.dietaryconcerns}</h4>
							<h4> <CSpan> Technique: </CSpan> {recipe.categories.technique}</h4>
						</div>
					</CategDiv>
					<hr></hr>
					<RecipeDes> {recipe.instructions} </RecipeDes>
				</Link>
			</RecipeCard>
		</>
	);



};

const RecipeCard = styled.div`
   background-color: white;
   border: 2px solid white;
   border-radius: 0 0 25px 25px;
   border-top: 3px solid #F3F6FA;
   padding: 3%;
   flex: 1;
   h4 {
       color: black;
   }
`
const CategDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1% 10% 4% 10%;
  font-size: 1.3rem;
  
`


const CSpan = styled.span`
   font-weight: bold;
`

const RecipeH2 = styled.h2`
    font-size: 3rem;
    color: #da3c33;
    padding-bottom: 2%;
    padding-top: 4%;
    text-align: center;
    font-weight: bold;
    font-family: 'Alegreya', serif;
`

const RecipeDes = styled.h2`
    font-size: 1.8rem;
    color: black;
    padding-bottom: 1%;
    font-family: 'Alegreya', serif;
`

const Recipeimg = styled.img`
    width: auto;
    max-width: 100%;
    min-height: 50%;
    max-height: 50%;
    font-weight: bold;
    margin: 0 auto;
    display: block;
    
`

export default HomePageRecipeCard;