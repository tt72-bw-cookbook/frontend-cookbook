import React, { useState, useEffect, Fragment } from "react";

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
		ingredientChange
	} = props

	const onChange = evt => {
		const { name, value, type, checked } = evt.target
		const valueToUse = type === 'checkbox' ? checked : value;
		change(name, valueToUse);
	}

	// const onSubmit = (evt) => {
	// 	evt.preventDefault()
	// 	submit()
	// }


	return (
		<>
			<div>
				<h1>Add Recipe Form</h1>
				<form>
					<div>
						<label>Recipe Name:
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
					<div>
						{/* <label>Course:
						<input
								onChange={onChange}
								value={formValues.course}
								name='course'
								type='text'
							/>
						</label> */}
						<select id="course" name="course" onChange={onChange}>
							<option selected value="null">--pick a course--</option>
							<option value="breakfast">Breakfast</option>
							<option value="lunch">lunch</option>
							<option value="dinner">dinner</option>
							<option value="drink">drink</option>
							<option value="snack">snack</option>
						</select>

						{/* <optgroup>
						</optgroup> */}
						<label>Cuisine:
						<input
								onChange={onChange}
								value={formValues.cuisine}
								name='cuisine'
								type='text'
							/>
						</label>
						<label>Dietary Concerns:
						<input
								onChange={onChange}
								value={formValues.dietaryconcerns}
								name='dietaryconcerns'
								type='text'
							/>
						</label>
						<label>Type of Dish:
						<input
								onChange={onChange}
								value={formValues.dishtype}
								name='dishtype'
								type='text'
							/>
						</label>
						<label>Technique:
						<input
								onChange={onChange}
								value={formValues.technique}
								name='technique'
								type='text'
							/>
						</label>
					</div>
					{/* <div>
					<label> Ingredient Name:
						<input
							onChange={onChange}
							value={formValues.ingredientname}
							name='ingredientname'
							type='text'
						/>
					</label> 
					<label> Measurement:
						<input
							onChange={onChange}
							value={formValues.measurement}
							name='measurement'
							type='text'
						/>
					</label>
				</div> */}
					<div className="form-row">
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
					</div>
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
					<button className='submitButton'>Submit Recipe</button>
				</form>
			</div>
		</>
	);
};

export default AddRecipeForm;