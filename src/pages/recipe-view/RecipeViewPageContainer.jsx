import { Header } from "../../common/components";
import styled from "styled-components";

import axios from "axios";
import * as yup from "yup";

const RecipeViewPageContainer = ({ details }) => {
	// const getIngredients = () => {
	// 	axios
	// 		.get()
	// 		.then()
	// 		.catch((err) => {
	// 			console.log(err);
	// 			debugger;
	// 		});
	// };

	return (
		<>
			<Header />
			<StyledRecipes>
				<div className="red-line">
					<h1>Recipe View</h1>
				</div>


				<img alt="cookie" src="https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg" />



				<div className="ingredients">
					<h2>Ingredients</h2>
					<ul>
						<li>List</li>
					</ul>
				</div>


				<h2>Directions</h2>
				<ol>
					<li>List</li>
				</ol>




			</StyledRecipes>
		</>

	);
}


export default RecipeViewPageContainer;


const StyledRecipes = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	margin: 5rem;
	font-size: 2rem;
	font-weight: 600;
	text-align: center;
	margin-top: 10px;

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
		font-weight: 100;
		text-align: center;
	}
	 ul, ol{
		margin: 5rem;
		font-size: 2rem;
		font-weight: 800;
		text-align: center;
	}
	img{
		width: 40%;
		height:20%;
		
	}

`;
