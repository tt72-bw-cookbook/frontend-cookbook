import { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser, postUserRecipe } from "../../store/vanillaRedux/actions/index"
import axios from "axios"
import AddRecipeForm from './components/AddRecipeForm';
import { Header } from "../../common/components"


// const userURL = 'https://tt72-cookbook.herokuapp.com/users/current';

const initialFormValues = {
	// gen Info
	title: '',
	pictureurl: '',
	source: '',
	// private check
	private: true,
	// categories
	categories: {
		course: '',
		cuisine: '',
		dietaryconcerns: '',
		dishtype: '',
		technique: '',
	},
	// ingredients
	ingredients: [{
		ingredientname: '',
		measurement: '',
		quantity: 0,
	}],
	// instructions
	instructions: '',
}

const RecipeFormPage = props => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.user.userData);

	const recipeId = props.match.params.id;
	// const [recipe, setRecipe] = useState({})
	const BASE_URL = 'https://tt72-cookbook.herokuapp.com'
	// const [recipes, setRecipes] = useState(initialRecipes)
	const [formValues, setFormValues] = useState(initialFormValues)

	useEffect(() => {
		if (recipeId) {
			axios
				.get(`${BASE_URL}/recipes/id/${recipeId}`)
				.then((res) => {
					console.log(res.data)
					// setRecipe(res.data);
					// setRecipes(res.data);
					setFormValues(res.data);
				})
				.catch((err) => {
					console.error(err);
				});
		}
	}, []);

	// useEffect(() => {
	// 	dispatch(fetchCurrentUser());
	// }, [dispatch])



	const postNewRecipe = newRecipe => {
		dispatch(postUserRecipe(newRecipe));
		// setRecipes([newRecipe, ...recipes]);
		setFormValues(initialFormValues);
	};

	const inputChange = (name, value, event) => {
		setFormValues({
			...formValues,
			[name]: value,
		})

	};

	const ingredientChange = (name, value, index) => {
		const values = { ...formValues }
		values.ingredients[index][name] = value;
		setFormValues(values);
	}

	const catChange = (name, value) => {
		const values = { ...formValues }
		values.categories[name] = value;
		setFormValues(values);
	}

	const handleAddFields = () => {
		// const values = [...formValues];
		const values = { ...formValues };
		values.ingredients.push({ ingredientname: '', measurement: '' });
		setFormValues(values);
	};

	const handleRemoveFields = index => {
		// const values = [...formValues];
		const values = { ...formValues };
		values.ingredients.splice(index, 1);
		setFormValues(values);
	};

	const formSubmit = () => {
		const newRecipe = {
			title: formValues.title.trim(),
			image: formValues.pictureurl.trim(),
			source: formValues.source.trim(),
			ingredients: formValues.ingredients,
			categories: formValues.categories,
			instructions: formValues.instructions.trim(),
		}

		console.log(newRecipe);

		postNewRecipe(newRecipe);
	}


	if (!user) {
		return <h1>No user found</h1>
	}


	return (
		<>
			<Header />
			<ProfileBody>
				<AddRecipeForm
					formValues={formValues}
					change={inputChange}

					submit={formSubmit}
					ingredientChange={ingredientChange}
					catChange={catChange}
					addField={handleAddFields}
					remField={handleRemoveFields}
				/>
				{/* <Link to='/profile/add'>Add New Recipe</Link> */}
				{/* <AddRecDiv>
					<Switch>
						<Route path='/profile/add'>

						</Route>
					</Switch>
				</AddRecDiv> */}
				{/* <StyledBtn onClick={handleLogout}> Logout </StyledBtn> */}
				{/* <ProfileH2>Your Recipes</ProfileH2> */}
				{/* <UserRecipes>
					{
						user?.recipes && user.recipes.map(recipe => {
							return <ProfilePageRecipes key={recipe.recipeid} userRecipes={recipe} />;
						})
					}
				</UserRecipes> */}
				<div>

				</div>
			</ProfileBody>
		</>
	)
}

const ProfileBody = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	h1 {
		margin: 2rem;
		font-size: 5rem;
		font-weight: 800;
		text-align: center;
		text-transform: uppercase;
	}
`;

const ProfileH2 = styled.h2`
font-size: 2.5rem;
text-align: center;
Padding: 1%;
`;

const UserInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const UserImg = styled.img`
height: 200px;
width: 300px;
`;

// const NewRecipeButton = styled.button`
//   background-color: skyblue;
//   color: white;
//   padding: 12px 30px;
//   margin: 2%;
//   text-align: center;
//   font-size: 14px;
// `;

const AddRecDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2%;
	width: 100%;
`;

const UserRecipes = styled.div`
width: 90%;
`;

const StyledBtn = styled.button`
font-size: 1.5rem;
margin-top: -4%;
padding: 1%;
background-color: #605e5c;
width: 8%;
border-radius: 10px;
border: 0px solid black;
color: white;
&:hover {
    background-color: #323130;
}
`


export default RecipeFormPage;