import styled from "styled-components";
import { Header } from "../../common/components";
import { axiosAuth } from "../../utils";
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import ProfilePageRecipes from './ProfilePageRecipes';
import AddRecipeForm from './components/AddRecipeForm';

const userURL = 'https://tt72-cookbook.herokuapp.com/users/current';

const initialFormValues = {
	// gen Info
	title: '',
	source: '',
	// private check
	private: true,
	// categories
	categories: [{
		course: '',
		cuisine: '',
		dietaryconcerns: '',
		dishtype: '',
		technique: '',
	}],
	// ingredients
	ingredients: [{
		ingredientname: '',
		measurement: '',
		quantity: 0,
	}],
	// instructions
	instructions: '',
}

const initialFormErrors = {
	title: '',
	source: '',
	ingredientname: '',
	measurement: '',
	instructions: '',
}

const initialRecipes = [];



const ProfilePageContainer = props => {

	const [user, setUser] = useState(null)
	const [recipes, setRecipes] = useState(initialRecipes)
	const [formValues, setFormValues] = useState(initialFormValues)
	const [formErrors, setFormErrors] = useState(initialFormErrors)

	useEffect(() => {
		if (!user) {
			axiosAuth()
				.get(userURL)
				.then((res) => {
					console.log(res.data)
					setUser(res.data)
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}, [user])


	const postNewRecipe = newRecipe => {
		axios
			.post('https://tt72-cookbook.herokuapp.com/recipes', newRecipe)
			.then((res) => {
				setRecipes([res.data, ...recipes]);
				setFormValues(initialFormValues);
			})
			.catch((err) => {
				debugger;
			})
	};

	const inputChange = (name, value) => {

		// Yup
		//   .reach(schema, name) //get to this part of the schema
		//   .validate(value) //validate this value
		//   .then(() => {
		// 	setFormErrors({
		// 	  ...formErrors,
		// 	  [name]: '',
		// 	})
		//   })
		//   .catch((err) => {
		// 	setFormErrors({
		// 	  ...formErrors,
		// 	  [name]: err.errors[0],
		// 	})
		//   })


		// const values = [...formValues];
		// if (event.target.name === 'ingredientname') {
		// 	values[index].ingredientname = event.target.value;
		// }
		// else if (event.target.name === 'measurement') {
		// 	values[index].measurement = event.target.value;
		// }
		// values
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
			source: formValues.size.trim(),
			course: formValues.course.trim(),
			cuisine: formValues.cuisine.trim(),
			dietaryconcerns: formValues.dietaryconcerns.trim(),
			dishtype: formValues.dishtype.trim(),
			technique: formValues.technique.trim(),
			ingredientname: formValues.ingredientname.trim(),
			measurement: formValues.measurement.trim(),
			instructions: formValues.instructions.trim(),
			specialInstructions: formValues.specialInstructions.trim(),
		}
		postNewRecipe(newRecipe);
	}





	const date = user?.createdDate?.split(' ');

	console.log('date', date ? date[0] : "undefined");


	if (!user) {
		return <h1>No user found</h1>
	}

	//need a <router> on this page? 
	//need ./pizza/add  or /add

	return (
		<>
			<Header />
			<ProfileBody>
				<ProfileH2>Your Profile</ProfileH2>
				<UserInfo>
					<h1>{user.username}</h1>
					<UserImg src={user ? user.profilepicture : "none"} />
					<h3> Email: {user.email ?? "unknown"} </h3>
					<h3> Since: {date ? date[0] : "unknown"}</h3>
				</UserInfo>
				<NewRecipeButton disabled={!user}>
					<Link to='./profile/add'>Add New Recipe</Link>
				</NewRecipeButton>
				<div>
					<Switch>
						<Route path='/profile/add'>
							<AddRecipeForm
								formValues={formValues}
								change={inputChange}
								errors={formErrors}
								submit={formSubmit}
								ingredientChange={ingredientChange}
								addField={handleAddFields}
								remField={handleRemoveFields}
							/>
						</Route>
					</Switch>
				</div>
				<ProfileH2>Your Recipes</ProfileH2>
				<UserRecipes>
					{
						user?.recipes && user.recipes.map(userRecipes => {
							return <ProfilePageRecipes key={userRecipes.userRecipeid} userRecipes={userRecipes} />;
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

const NewRecipeButton = styled.button`
  background-color: skyblue;
  color: white;
  padding: 12px 30px;
  margin: 2%;
  text-align: center;
  font-size: 14px;
`;

const UserRecipes = styled.div`
width: 90%;
`;


export default ProfilePageContainer;