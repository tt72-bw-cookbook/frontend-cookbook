import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

// just renamed this file directly in main branch
const HomePageRecipeCard = props => {
	const { recipe } = props
	const id = recipe.recipeid

	return (
		<RecipeContain to={`/recipe/${id}`}>
			<h2>{recipe.title}</h2>
			<RecipeCard>
				<img src={recipe.pictureurl} alt={recipe.title} />
				<div className="category-container">
					<div>
						<h4><span>Course: </span>{recipe.categories.course}</h4>
						<h4><span>Cuisine:  </span>{recipe.categories.cuisine}</h4>
					</div>
					<div>
						<h4><span>Dietary: </span>{recipe.categories.dietaryconcerns}</h4>
						<h4><span>Technique: </span>{recipe.categories.technique}</h4>
					</div>
				</div>
				<hr></hr>
				<p className="description"> {recipe.instructions} </p>
			</RecipeCard>
		</RecipeContain>
	);



};

const RecipeContain = styled(Link)`
	text-decoration: none;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	width: 32.5%;
	border: 2px solid white;
	border-radius: 25px;
	margin: .4%;
	background-color: white;
	h2 {
		font-size: 3rem;
		color: #da3c33;
		padding-bottom: 2%;
		padding-top: 4%;
		text-align: center;
		font-weight: bold;
		font-family: 'Alegreya', serif;
	}
`;

const RecipeCard = styled.div`
	background-color: white;
	border: 2px solid white;
	border-radius: 0 0 25px 25px;
	border-top: 3px solid #F3F6FA;
	padding: 3%;
	flex: 1;
	h4 {
		color: black;
		span {
			font-weight: bold;
		}
	}
	img {
		width: auto;
		max-width: 100%;
		min-height: 50%;
		max-height: 50%;
		font-weight: bold;
		margin: 0 auto;
		display: block;
	}
	div.category-container {
		display: flex;
		justify-content: space-between;
		padding: 1% 10% 4% 10%;
		font-size: 1.3rem;
	}
	p.description {
		font-size: 1.8rem;
		color: black;
		padding-bottom: 1%;
		font-family: 'Alegreya', serif;
	}
`;

export default HomePageRecipeCard;