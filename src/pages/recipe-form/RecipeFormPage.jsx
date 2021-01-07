import { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { postUserRecipe } from "../../store/vanillaRedux/actions/index"
import axios from "axios"
import AddRecipeForm from './components/AddRecipeForm';
import { Header } from "../../common/components"

const initialFormValues = {
	title: '',
	pictureurl: '',
	source: '',
	private: true,
	categories: {
		course: '',
		cuisine: '',
		dietaryconcerns: '',
		dishtype: '',
		technique: '',
	},
	ingredients: [{
		ingredientname: '',
		measurement: '',
		quantity: 0,
	}],
	instructions: '',
}

const RecipeFormPage = props => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.user.userData);

	const recipeId = props.match.params.id;
	const BASE_URL = 'https://tt72-cookbook.herokuapp.com'
	const [formValues, setFormValues] = useState(initialFormValues)

	useEffect(() => {
		if (recipeId) {
			axios
				.get(`${BASE_URL}/recipes/id/${recipeId}`)
				.then((res) => {
					setFormValues(res.data);
				})
				.catch((err) => {
					console.error(err);
				});
		}
	}, [recipeId]);

	const postNewRecipe = newRecipe => {
		dispatch(postUserRecipe(newRecipe));
		setFormValues(initialFormValues);
	};

	const inputChange = (name, value) => {
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
		const values = { ...formValues };
		values.ingredients.push({ ingredientname: '', measurement: '' });
		setFormValues(values);
	};

	const handleRemoveFields = index => {
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

export default RecipeFormPage;