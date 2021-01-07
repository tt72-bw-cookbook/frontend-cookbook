import styled from "styled-components";
import { Header } from "../../common/components";
import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import ProfilePageRecipes from './ProfilePageRecipes';
import AddRecipeForm from './components/AddRecipeForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserLogout, fetchCurrentUser, postUserRecipe } from '../../store/vanillaRedux/actions/index';
import { Link } from "../../common/components/";


// const userURL = 'https://tt72-cookbook.herokuapp.com/users/current';

const initialFormValues = {
	// gen Info
	title: '',
	image: '',
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

// const initialFormErrors = {
// 	title: '',
// 	source: '',
// 	ingredientname: '',
// 	measurement: '',
// 	instructions: '',
// }

const initialRecipes = [];



const ProfilePageContainer = props => {

	const dispatch = useDispatch();

	const user = useSelector(state => state.user.userData);
	// const { userData, isLoading } = userState
	// const user = userData


	useEffect(() => {
		dispatch(fetchCurrentUser());
	}, [dispatch])

	// const [user, setUser] = useState(null)
	const [recipes, setRecipes] = useState(initialRecipes)
	const [formValues, setFormValues] = useState(initialFormValues)

	const postNewRecipe = newRecipe => {
		dispatch(postUserRecipe(newRecipe));
		setRecipes([newRecipe, ...recipes]);
		setFormValues(initialFormValues);
	};

	// const postNewRecipe = newRecipe => {
	// 	axiosAuth()
	// 		.post('https://tt72-cookbook.herokuapp.com/recipes/', newRecipe)
	// 		.then((res) => {
	// 			// console.log('post data', res.data);
	// 			setRecipes([res.data, ...recipes]);
	// 			setFormValues(initialFormValues);
	// 			console.log(res);
	// 		})
	// 		.catch((err) => {
	// 			// debugger;
	// 			console.error(err);
	// 		})
	// };

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
			image: formValues.image.trim(),
			source: formValues.source.trim(),
			ingredients: formValues.ingredients,
			categories: formValues.categories,
			instructions: formValues.instructions.trim(),
		}

		console.log(newRecipe);

		postNewRecipe(newRecipe);
	}





	const date = user?.createdDate?.split(' ');



	if (!user) {
		return <h1>No user found</h1>
	}

	//need a <router> on this page? 
	//need ./pizza/add  or /add
	const handleLogout = () => {
		dispatch(fetchUserLogout());
	}

	return (
		<>
			<Header />
			<ProfileBody>
				<Info>
					<ProfileH2>Your Profile</ProfileH2>
					<UserInfo>
						<h1>{user.username}</h1>
						<UserImg src={user ? user.profilepicture : "none"} />
						<div>
							<h3> Email: {user.email ?? "unknown"} </h3>
							<h3> Since: {date ? date[0] : "unknown"}</h3>
						</div>
					</UserInfo>
					{/* <NewRecipeButton disabled={!user}>
					</NewRecipeButton> */}
					<BTTN>
					<Link
						// disabled={!user}
						to='/profile/add'>Add New Recipe</Link>
					{/* <NewRecipeButton disabled={!user}> Add New Recipe </NewRecipeButton> */}
					<AddRecDiv>
						<Switch>
							<Route path='/profile/add'>
								<AddRecipeForm
									formValues={formValues}
									change={inputChange}

									submit={formSubmit}
									ingredientChange={ingredientChange}
									catChange={catChange}
									addField={handleAddFields}
									remField={handleRemoveFields}
								/>
							</Route>
						</Switch>
					</AddRecDiv>
					<StyledBtn onClick={handleLogout}> Logout </StyledBtn>
					</BTTN>
				</Info>
				<ProfileH2>Your Recipes</ProfileH2>
				<UserRecipes>
					{
						user?.recipes && user.recipes.map(recipe => {
							return <ProfilePageRecipes key={recipe.recipeid} userRecipes={recipe} />;
						})
					}
				</UserRecipes>
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
const Info = styled.div`
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	width: 100vw;
	display: flex:
	flex-direction: column:
	align-items: center;
`;

const ProfileH2 = styled.h2`
font-size: 3rem;
text-align: center;
Padding: 1%;
font-family: 'Alegreya', serif;
`;

const UserInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
h1{
	font-family: 'Alegreya', serif;
	font-size: 5rem;
}
h3{
	font-size: 2rem;
	font-family: 'Alegreya', serif;
}
div{
	display: flex;
	flex-direction: column;
	justify-content: space-between:
}
`;

const UserImg = styled.img`
min-height: 100%;
max-height: 100%;
width: auto;
max-width: 100%;
margin: 0 auto;
display: block;
border: 1px solid #a53636;
border-radius: 25px;
`;

// const NewRecipeButton = styled.button`
//   background-color: skyblue;
//   color: white;
//   padding: 12px 30px;
//   margin: 2%;
//   text-align: center;
//   font-size: 14px;
// `;

const BTTN = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: baseline;
	padding: 2%;
	width: 100%;
`;

const AddRecDiv = styled.div`
	
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


export default ProfilePageContainer;