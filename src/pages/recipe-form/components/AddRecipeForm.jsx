import styled from "styled-components";
import Button from '../../../common/components/Button';

const AddIngredientFrag = ({ formValue, index, addField, remField, ingredientChange, ...rest }) => {


	const onChange = (evt) => {
		const { name, value } = evt.target;
		ingredientChange(name, value, index)
	}

	return (
		<>
		{/* <IngDiv> */}
			<div>
				<label htmlFor="ingredientname">Ingredient Name</label>
				<StyledIngInput
					onChange={onChange}
					type="text"
					className="form-control"
					id="ingredientname"
					name="ingredientname"
					value={formValue.ingredientname}
				// value={ingValues.name}
				/>
			</div>
			<div>
				<label htmlFor="measurement">Measurement</label>
				<StyledIngInput
					onChange={onChange}
					type="text"
					className="form-control"
					id="measurement"
					name="measurement"
					value={formValue.measurement}
				// value={ingValues.measurement}
				/>
			</div>
			<div>
				<label htmlFor="quantity">Quantity</label>
				<StyledIngInput
					onChange={onChange}
					type="number"
					className="form-control"
					id="quantity"
					name="quantity"
					value={formValue.quantity}
				// value={ingValues.quantity}
				/>
			</div>
			<IngButtonDiv>
				<StyledButton
					className="btn btn-link"
					type="button"
					onClick={() => remField(index)}
				>
					-
							</StyledButton>
				<StyledButton
					className="btn btn-link"
					type="button"
					onClick={() => addField()}
				>
					+
							</StyledButton>

			</IngButtonDiv>
			{/* </IngDiv> */}
		</>
	)
}

const AddRecipeForm = props => {

	// values, change, disabled, errors, submit
	const {
		formValues,
		change,
		submit,
		addField,
		remField,
		ingredientChange,
		catChange
	} = props

	const onChange = evt => {
		const { name, value, type, checked } = evt.target
		const valueToUse = type === 'checkbox' ? checked : value;
		change(name, valueToUse);
	}

	const onSubmit = (evt) => {
		evt.preventDefault()
		submit()
	}



	const IngChange = (evt) => {
		const { name, value } = evt.target;
		catChange(name, value)
	}


	return (
		<>
			<CreateRecDiv>
				<h1>Add Your Recipe</h1>
				<form onSubmit={onSubmit}>
					<GenInfoDiv>
						<label>Recipe Name:
							<StyledInput
								onChange={onChange}
								value={formValues.title}
								name='title'
								type='text'
							/>
						</label>
						<label>Recipe Image URL:
						<StyledInput
								onChange={onChange}
								value={formValues.pictureurl}
								name='pictureurl'
								type='text'
							/>
						</label>
						<label>Recipe Source:
						<StyledInput
								onChange={onChange}
								value={formValues.source}
								name='source'
								type='text'
							/>
						</label>
						<label>Private?
                    <input type='checkbox' name='private' checked={formValues.private} onChange={onChange} />
						</label>
					</GenInfoDiv>
					<CatDiv>
						<StyledSelect id="course" name="course" onChange={IngChange}>
							<option defaultValue value="null">--pick a course--</option>
							<option value="appetizer">Appetizer</option>
							<option value="breakfast">Breakfast</option>
							<option value="brunch">Brunch</option>
							<option value="lunch">Lunch</option>
							<option value="dinner">Dinner</option>
							<option value="beverage">Beverage</option>
							<option value="snack">Snack</option>
							<option value="dessert">Dessert</option>
							<option value="side">Side</option>
						</StyledSelect>
						<StyledSelect id="cuisine" name="cuisine" onChange={IngChange}>
							<option defaultValue value="null">--pick a cuisine--</option>
							<option value="italian">Italian</option>
							<option value="mexican">Mexican</option>
							<option value="moroccan">Moroccan</option>
							<option value="french">French</option>
							<option value="asian">Asian</option>
							<option value="indian">Indian</option>
							<option value="thai">Thai</option>
							<option value="vietnamese">Vietnamese</option>
							<option value="american">American</option>
						</StyledSelect>
						<StyledSelect id="dietaryconcerns" name="dietaryconcerns" onChange={IngChange}>
							<option defaultValue value="null">--Any dietary concern--</option>
							<option value="healthy">Healthy</option>
							<option value="highfiber">Highfiber</option>
							<option value="kidfriendly">Fid Friendly</option>
							<option value="kosher">Kosher</option>
							<option value="lowfat">Low Fat</option>
							<option value="lowsugar">Low/no Sugar</option>
							<option value="lowsodium">Low Sodium</option>
							<option value="organic">Organic</option>
							<option value="quickeasy">Quick n Easy</option>
							<option value="raw">Raw</option>
							<option value="vegan">Vegan</option>
							<option value="vegetarian">Vegetarian</option>
							<option value="glutenfree">Gluten Free</option>

						</StyledSelect>
						<StyledSelect id="technique" name="technique" onChange={IngChange}>
							<option defaultValue value="null">--cooking technique--</option>
							<option value="bbq">BBQ</option>
							<option value="bake">Bake</option>
							<option value="roast">Roast</option>
							<option value="braise">Braise</option>
							<option value="saute">Snack</option>
							<option value="nocook">No Cook</option>
							<option value="stirfry">Stir-fry</option>
							<option value="panfry">Pan-fry</option>
						</StyledSelect>
					</CatDiv>

					<IngDiv className="form-row">
						{formValues.ingredients.map((formValue, index) => (
							<AddIngredientFrag
								ingredientChange={ingredientChange}
								key={`${formValue}~${index}`}
								formValue={formValue}
								index={index}
								remField={remField}
								addField={addField}
							/>
						))}
					</IngDiv>
					<div>
						<label> Instructions:
						<InstructionsInput
								onChange={onChange}
								value={formValues.instructions}
								name='instructions'
								type='text'
							/>
						</label>
					</div>
					<Button className='submitButton'>Submit New Recipe</Button>
				</form>
			</CreateRecDiv>
		</>
	);
};

const CreateRecDiv = styled.div`
	text-align: center;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	border: 10px solid white;
	border-radius: 20px;
	padding: 2%;
	width: 60%;
	margin: 3%;
`;

const GenInfoDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2%;
	margin: 1%;
`;

const CatDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2%;
	margin: 1%;
	width: 100%;
`;

const IngDiv = styled.div`
	display: flex;
	flex-flow: column-wrap;
	justify-content: space-evenly;
	align-items: center;
	padding: 2%;
	width: 100%;
	margin: 1%;
	// border: 1px solid white;
`;

const IngButtonDiv = styled.div`
	display: flex;
	flex-flow: row-wrap;
	align-items: center;
	justify-content: center;
`;

const InstructionsInput = styled.input`
	text-align: top;
	width: 94%;
	height: 5vh;
	margin: 1%;
	border-radius: 20px;
	border: 0px solid black;
	padding: 1%;
	&:hover {
		background: #edebe9;
}
`;

const StyledIngInput = styled.input`
margin: 1%;
border-radius: 20px;
border: 0px solid black;
padding: 1%;
&:hover {
		background: #edebe9;
}
`;

const StyledInput = styled.input`
margin: 4%;
border-radius: 20px;
border: 0px solid black;
padding: 2%;
&:hover {
		background: #edebe9;
}
`;

const StyledSelect = styled.select`
// border-radius: 20px;
margin: 0.5%;
border: 0px solid black;
padding: 1%;
&:hover {
	background: #edebe9;
}
`;

const StyledButton = styled(Button)`
// margin: 10%;
// border: 0px solid black;
// display: flex;
// flex-flow: row-wrap;
// padding: 50%;
// height: 2vh;
	transform: scale(0.5);
	font-size: 3rem;
`;


export default AddRecipeForm;