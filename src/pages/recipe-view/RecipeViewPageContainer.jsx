import { Header } from "../../common/components";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

import axios from "axios";
import * as yup from "yup";
import userEvent from "@testing-library/user-event";

const RecipeViewPageContainer = (props) => {
	// const { recipeId } = props
	const recipeId = 1
	const [recipes, setRecipes] = useState("")


	const BASE_URL = 'https://tt72-cookbook.herokuapp.com'
	// const number = Math.floor

	useEffect(() => {
		console.log(recipeId)
		axios
			.get(`${BASE_URL}/recipes/id/${recipeId}`)
			.then((res) => {
				setRecipes(res.data);
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	function getIngredients(item) {
		let ingredient = [item.quantity, item.measurement, item.ingredientname].join(" ");
		return ingredient
	};



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
							<p>course: {recipes.categories.course}</p>
							<p>dishtype {recipes.categories.dishtype}</p>
							<p>cuisine: {recipes.categories.cuisine}</p>
							<p>dietary-concerns: {recipes.categories.dietaryconcerns}</p>
							<p>technique: {recipes.categories.technique}</p>
						</div>
					</>

				}
				{/* comment this bottom line when ready */}

				<img alt="recipeImage" src="https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg" />


				{ }
				<div className="ingdir">

					{
						recipes?.ingredients &&
						<>
							<div className="ingredients">
								<h3>Ingredients</h3>

								{/* <p>{recipes.map(getIngredients)}</p> */}

							</div>
						</>
					}





					<div className="directions">
						<h3>Instructions</h3>

						{/* <ol>
							<li>List</li>
						</ol> */}
						<p>{recipes.instructions}</p>
					</div>


				</div>



			</StyledRecipes>
		</>

	);
}


export default RecipeViewPageContainer;


const StyledRecipes = styled.div`
	*{
		border: 1px solid black;
	}

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

	/* border-left: 1px  solid red;
	border-right: 1px  solid red; */

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
		width: 45%;
		height:20%;
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
