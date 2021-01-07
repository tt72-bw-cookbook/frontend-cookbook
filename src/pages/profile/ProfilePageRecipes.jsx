import React from "react";
import styled from "styled-components";
import { Link, Button } from "../../common/components/";
import { deleteRecipeById } from '../../store/vanillaRedux/actions/index';
import { useDispatch } from 'react-redux';

const ProfilePageRecipes = props => {
	const { userRecipes } = props;
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteRecipeById(userRecipes.recipeid))
		console.log(userRecipes.recipeid)
	}

	return (
		<>
			<UserRecipeDiv>
				<RecipeGenInfo>
					<RecipeImg src={userRecipes.pictureurl} />
					<RecipeTitle> {userRecipes.title} </RecipeTitle>
					{
						userRecipes.categories &&
						<CatDiv>
							<h4> <CSpan> Source: </CSpan>  {userRecipes.source} </h4>
							<h4> <CSpan> Course: </CSpan> {userRecipes.categories.course} </h4>
							<h4> <CSpan> Cuisine:  </CSpan> {userRecipes.categories.cuisine} </h4>
							<h4> <CSpan> Dietary: </CSpan> {userRecipes.categories.dietaryconcerns} </h4>
							<h4> <CSpan> Technique: </CSpan> {userRecipes.categories.technique} </h4>
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
				<Link secondary to={`/form/${userRecipes.recipeid}`}> Edit </Link>
				<Button onClick={handleDelete}> Delete </Button>
			</UserRecipeDiv>
		</>
	);

};

const UserRecipeDiv = styled.div`
border: 1px solid #a53636;
border-radius: 25px;
margin-bottom: 1%;
background-color: #a53636;
`;

const RecipeGenInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 1%;
    h4{
        font-size: 1.4rem;
    }
`;

const CSpan = styled.span`
   font-weight: bold;
`

const RecipeTitle = styled.h2`
font-size: 4rem;
text-align: center;
Padding: 2%;
font-family: 'Alegreya', serif;
font-style: bold;
`;

const RecipeImg = styled.img`
    width: auto;
    max-width: 60%;
    min-height: 40%;
    max-height: 40%;
    margin: 0 auto;
    display: block;
    border: 1px solid #a53636;
    border-radius: 25px;
`;

const RecInstruct = styled.p`
text-align: left;
Padding: 2%;
font-size: 2rem;
font-family: 'Alegreya', serif;

`;



const CatDiv = styled.div`
display: flex;
justify-content: space-evenly;
border: 1px solid black;
border-radius: 25px;
width: 100%;
padding: .5%;
`;

const IngDiv = styled.div`
padding: 1%;
font-size: 2rem;
font-family: 'Alegreya', serif;

`;

const IngH3 = styled.div`
font-size: 3rem;
font-family: 'Alegreya', serif;
`;

const EachIngDiv = styled.div`
display: flex;
padding: .3%;
padding-left: 4%;
`;

export default ProfilePageRecipes;