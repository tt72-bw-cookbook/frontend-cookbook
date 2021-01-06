import { Header } from "../../common/components";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

import axios from "axios";
import * as yup from "yup";

const RecipeViewPageContainer = (props) => {
	const { recipeId } = props
	const [recipes, setRecipes] = useState(null)
	const BASE_URL = 'https://tt72-cookbook.herokuapp.com'
	// const number = Math.floor

	useEffect(() => {
		axios
			.get(`${BASE_URL}/recipes/id/${recipeId}`)
			.then((res) => {
				setRecipes(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [recipeId]);

	return (
		<>
			<Header />
			<StyledRecipes>
				<div className="red-line">
					<h1>Recipe View</h1>
				</div>

				{
					<>
						{/* recipe && */}
						<h2>{recipes.title}</h2>

						{/* comment this bottom line when ready */}
						<img alt="cookie" src="https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg" />


						<div className="idc">
							<div className="ingredients">
								<h3>Ingredients</h3>
								<ul>
									<li>List</li>
								</ul>
							</div>

							<div className="directions">
								<h3>Directions</h3>

								<ol>
									<li>List</li>
								</ol>
							</div>

							<div className="categories">
								<p>course</p>
								<p>dishtype</p>
								<p>cuisine</p>
								<p>dietaryconcerns</p>
								<p>technique</p>
							</div>
						</div>
					</>
				}


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
	margin-top: 10px;
	margin: 50px;

	/* border-left: 1px  solid red;
	border-right: 1px  solid red; */

	.red-line{
		border: 2px solid red;
	}
	h1 {
		margin: 5rem;
		font-size: 4rem;
		font-weight: 500;
		text-align: center;
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
		width: 40%;
		height:20%;
		
	}

	.idc{
		border: 1px solid black;
		padding-left: 150px;
		padding-right: 150px;

	}

	.directions {
		border-top: 3px solid gray;
	}



`;
