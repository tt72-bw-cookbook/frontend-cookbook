import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";

const AddIngredientFrag = ({ formValue, index, addField, remField, ingredientChange }) => {
	// const  = props;

	const [ingValues, setIngValues] = useState({ name: "", measurement: "", quantity: -1 })

	useEffect(() => {
		console.log(formValue)
	}, [])


	const onChange = (evt) => {
		const { name, value } = evt.target;
		ingredientChange(name, value, index)
		// setIngValues({ ...ingValues, [name]: value });
	}

	return (
		<>
			<div>
				<label htmlFor="ingredientname">Ingredient Name</label>
				<input
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
				<input
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
				<input
					onChange={onChange}
					type="number"
					className="form-control"
					id="quantity"
					name="quantity"
					value={formValue.quantity}
				// value={ingValues.quantity}
				/>
			</div>
			<div>
				<button
					className="btn btn-link"
					type="button"
					onClick={() => remField(index)}
				>
					-
							</button>
				<button
					className="btn btn-link"
					type="button"
					onClick={() => addField()}
				>
					+
							</button>

			</div>
		</>
	)
}

const AddRecipeForm = props => {

	// values, change, disabled, errors, submit
	const {
		formValues,
		change,
		errors,
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
					<div>
						<label>Recipe Name:
				{/* handleCategoryChange */}
							<input
								onChange={onChange}
								value={formValues.title}
								name='title'
								type='text'
							/>
						</label>
						<label>Recipe Source:
						<input
								onChange={onChange}
								value={formValues.source}
								name='source'
								type='text'
							/>
						</label>
						<label>Private?
                    <input type='checkbox' name='private' checked={formValues.private} onChange={onChange} />
						</label>
					</div>
					<CatDiv>
						<select id="course" name="course" onChange={IngChange}>
							<option selected value="null">--pick a course--</option>
							<option value="appetizer">Appetizer</option>
							<option value="breakfast">Breakfast</option>
							<option value="brunch">Brunch</option>
							<option value="lunch">Lunch</option>
							<option value="dinner">Dinner</option>
							<option value="beverage">Beverage</option>
							<option value="snack">Snack</option>
							<option value="dessert">Dessert</option>
							<option value="side">Side</option>
						</select>
						<select id="cuisine" name="cuisine" onChange={IngChange}>
							<option selected value="null">--pick a cuisine--</option>
							<option value="italian">Italian</option>
							<option value="mexican">Mexican</option>
							<option value="moroccan">Moroccan</option>
							<option value="french">French</option>
							<option value="asian">Asian</option>
							<option value="indian">Indian</option>
							<option value="thai">Thai</option>
							<option value="vietnamese">Vietnamese</option>
							<option value="american">American</option>
						</select>
						<select id="dietaryconcerns" name="dietaryconcerns" onChange={IngChange}>
							<option selected value="null">--Any dietary concern--</option>
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

						</select>
						<select id="technique" name="technique" onChange={IngChange}>
							<option selected value="null">--cooking technique--</option>
							<option value="bbq">BBQ</option>
							<option value="bake">Bake</option>
							<option value="roast">Roast</option>
							<option value="braise">Braise</option>
							<option value="saute">Snack</option>
							<option value="nocook">No Cook</option>
							<option value="stirfry">Stir-fry</option>
							<option value="panfry">Pan-fry</option>
						</select>
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
							// <Fragment key={`${formValue}~${index}`}>
							// 	<div>
							// 		<label htmlFor="ingredientname">Ingredient Name</label>
							// 		<input
							// 			onChange={onChange}
							// 			type="text"
							// 			className="form-control"
							// 			id="ingredientname"
							// 			name="ingredientname"
							// 			value={formValue.ingredientname}
							// 		/>
							// 	</div>
							// 	<div>
							// 		<label htmlFor="measurement">Measurement</label>
							// 		<input
							// 			onChange={onChange}
							// 			type="text"
							// 			className="form-control"
							// 			id="measurement"
							// 			name="measurement"
							// 			value={formValue.measurement}
							// 		/>
							// 	</div>
							// 	<div>
							// 		<button
							// 			className="btn btn-link"
							// 			type="button"
							// 			onClick={() => remField(index)}
							// 		>
							// 			-
							// </button>
							// 		<button
							// 			className="btn btn-link"
							// 			type="button"
							// 			onClick={() => addField()}
							// 		>
							// 			+
							// </button>
							// 	</div>
							// </Fragment>
						))}
					</IngDiv>
					<div>
						<label> Instructions:
						<input
								onChange={onChange}
								value={formValues.instructions}
								name='instructions'
								type='text'
							/>
						</label>
					</div>
					<button className='submitButton'>Submit New Recipe</button>
				</form>
			</CreateRecDiv>
		</>
	);
};

const CreateRecDiv = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	border: 10px solid white;
	border-radius: 20px;
	padding: 2%;
	width: 60%;
`;

const CatDiv = styled.div`
	display: flex;
	justify-content: cs;
	align-items: center;
	padding: 2%;
`;

const IngDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	padding: 2%;
	width: 100%;
`;


export default AddRecipeForm;