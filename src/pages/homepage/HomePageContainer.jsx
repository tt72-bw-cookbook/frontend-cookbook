import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "../../common/components/";
import axios from 'axios';
import HomePageRecipes from './homePageRecipes';

const recipesURL = 'https://tt72-cookbook.herokuapp.com/recipes';

const HomePageContainer = props => {

	const [recipes, setRecipes] = useState([]);

	useEffect( () => {
		axios
		.get(recipesURL)
		.then ( (res) => {
			console.log(res.data.elements)
			setRecipes(res.data.elements)
		})
		.catch ( (err) => {
			console.log(err)
		})
	}, [])


	return (
		<>
			<Header />
			<HomeBody>
				<h1> What are you cooking tonight? </h1>
				<Search>
					<h2> Search Container </h2>
				</Search>
				<FilterDiv>
					<h2> Filter Container </h2>
				</FilterDiv>
				<RecipesContainer>
					{
						recipes.map(recipes => {
						return <HomePageRecipes key={recipes.recipeid} recipes={recipes}/>;
						})
					}   
				</RecipesContainer>
			</HomeBody>
		</>
	);
}

const HomeBody = styled.div`
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	border: 1px solid white;
`;

const Search = styled.div`
	border: 2px solid white;
	width: 60%;
	text-align: center;
	padding: 1%;
`;

const FilterDiv = styled.div`
	border: 2px solid white;
	width: 100%;
	text-align: center;
	padding: 1%;
`;

const RecipesContainer = styled.div`
	display: flex;
	flex-flow: wrap;
	border: 1px solid teal;
	width: 98%;
`;

export default HomePageContainer;