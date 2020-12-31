import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "../../common/components/";
import axios from 'axios';
import HomePageRecipes from './homePageRecipes';
import HomePageFilter from './HomePageFilterForm';

const recipesURL = 'https://tt72-cookbook.herokuapp.com/recipes';

const initialFormValues = {
	popular: '',
	course: '',
	cuisine: '',
	diet: '',
	ingredient: '',
	occasion: '',
	technique: '',
  }

const HomePageContainer = props => {

	const [recipes, setRecipes] = useState([]);
	const [formValues, setFormValues] = useState(initialFormValues);

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
				<HomeH1> Find a Family Recipe </HomeH1>
				<Search>
					<SearchInput 
						key='random1'
						value={''}
						placeholder={'Type in recipes, ingredients, or types of food'}
						onChange={(e) => e.target.value}
					/>
				</Search>
				<FilterDiv>
					<h2> Advanced Filtering </h2>
					<HomePageFilter formValues={formValues}/>
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
`;

const HomeH1 = styled.h1`
	font-size: 5rem;
	padding-top: 1%;
	font-family: 'Italianno', cursive;
`;

const SearchInput = styled.input`
	width: 100%;
	height: 40px;
`;

const Search = styled.div`
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
	justify-content: space-evenly;
	width: 90%;
	padding-top: 1%;
`;

export default HomePageContainer;