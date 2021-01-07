import { Header } from "../../common/components";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";

const RecipeViewPageContainer = (props) => {


	const recipeId = props?.match?.params?.id || 24;
	const [recipes, setRecipes] = useState("")
	const BASE_URL = 'https://tt72-cookbook.herokuapp.com'
	useEffect(() => {
		axios
			.get(`${BASE_URL}/recipes/id/${recipeId}`)
			.then((res) => {
				setRecipes(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	function getIngredients(item) {
		let ingredient = [item.quantity, item.measurement, item.ingredientname].join(" ");
		return ingredient
	}

	return (
		<>
			<Header />
			<StyledRecipes>
				<div>
					{/* <h1>Recipe View</h1> */}
					<h2>{recipes.title}</h2>
					<p className="recipe-date"> Date created: {recipes.createdDate}</p>
				</div>
				{
					recipes?.categories &&
					<>
						<div className="categories">
							<p>course: {recipes.categories.course} </p>
							<p>dishtype: {recipes.categories.dishtype} </p>
							<p>cuisine: {recipes.categories.cuisine} </p>
							<p>dietary-concerns: {recipes.categories.dietaryconcerns} </p>
							<p>technique: {recipes.categories.technique} </p>
						</div>
					</>
				}
				<img alt="" src={recipes.pictureurl} />
				<div className="ingdir">
					{
						recipes?.ingredients &&
						<>
							<div className="ingredients">
								<h3>Ingredients</h3>
								{recipes.ingredients.map(ingredient => {
									return (<p key={ingredient.ingredientname}>{getIngredients(ingredient)}</p>);
								})}
							</div>
						</>
					}
					<div className="directions">
						<h3>Instructions</h3>
						<p>{recipes.instructions}</p>
					</div>
				</div>
			</StyledRecipes>
		</>
	);
}


export default RecipeViewPageContainer;


const StyledRecipes = styled.div`
	display: flex;
	flex-direction: column;	
	justify-content: center;
	align-items: center;
	margin: 5rem;
	font-size: 2rem;
	font-weight: 600;
	text-align: center;
	margin-top: 50px;
	margin: 50px;
	.red-line{
		border: 2px solid gray;
	}
	h1 {
		margin: 5rem;
		font-size: 4rem;
		font-weight: 500;
		text-align: center;
		margin-top: -10px;
	}
	h2 {
		margin: 5rem;
		font-size: 5rem;
		font-weight: 200;
		text-align: center;
	}
	h3{
		margin: 5rem;
		font-size: 1.5em;
		font-weight: 150;
		text-align: center;
	}
	 ul, ol{
		margin: 5rem;
		font-size: 1.5rem;
		font-weight: 350;
		text-align: center;
	}
	img{
		width: 25%;
		height:15%;
		margin-bottom: 2.5%;
		
	}
	.ingdir{
		border: 1px solid black;
		width: 75%;
		/* padding-left: 150px;
		padding-right: 150px; */
		background-color: #a53636;
		border-radius: 10px;

	}
	.directions {
		border-top: 3px solid gray;
	}
	.categories{
		border: 1px solid red;
		font-size: 1.4rem;
		font-weight: 550;
		display: flex;
		justify-content: space-between;
	}
	.recipe-date{
		font-size: 1.3rem;
		font-weight: 400px;
	}
	`;
