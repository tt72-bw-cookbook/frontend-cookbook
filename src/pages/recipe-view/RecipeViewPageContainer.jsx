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

					{
						recipes?.user &&
						<>
							<img className="user-img" alt="" src={recipes.user.profilepicture} />

							<p>{recipes.user.username}</p>
						</>
					}

					<p className="recipe-date"> Date created: {recipes.createdDate}</p>
				</div>

				{
					recipes?.categories &&
					<>
						<div className="categories">
							<p className="each-cat">course: {recipes.categories.course} </p>
							<p className="each-cat">dishtype: {recipes.categories.dishtype} </p>
							<p className="each-cat">cuisine: {recipes.categories.cuisine} </p>
							<p className="each-cat">dietary-concerns: {recipes.categories.dietaryconcerns} </p>
							<p className="each-cat">technique: {recipes.categories.technique} </p>
						</div>
					</>
				}

				<img alt="" src={recipes.pictureurl} />

				<div className="ingins">
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
					<div className="instructions">
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
	align-items: center;
	font-size: 2.1rem;
	font-weight: 300;
	text-align: center;
	
	h1 {
		margin: 5rem;
		font-size: 4rem;
		font-weight: 500;
		text-align: center;
		margin-top: -10px;
	}
	.user-img{
		max-width: 15%;
		max-height: 15%
	}

	.recipe-date{
		font-size: 1.3rem;
		font-weight: 400px;
		word-spacing: 2px;
	}

	.categories{
		border: 1px solid red;
		font-size: 1.4rem;
		font-weight: 550;
		display: flex;
		flex-direction: row-row-reverse;
		justify-content: space-around;
		/* word-spacing: 10px; */
	}
	 .each-cat{
		text-indent: 5%;
	}
	/* .each-cat{
		justify-content: space-around;
	} */

	
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
		margin: 1.5%;
		
		
	}
	
	

	.ingins{
		/* border: 1px solid black; */
		padding-left: 12%;
		padding-right: 12%;
		width: 50%;
		background-color: #a53636;
		border-radius: 10px;
		margin-bottom: 3%;

	}
	.instructions {
		border-top: 3.5px solid gray;
		margin-bottom: 8%;
	}
	
	
	
	
	`;