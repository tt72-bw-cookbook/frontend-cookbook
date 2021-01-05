import React from "react";

const HomePageFilter = props => {

	const { formValues } = props

	return (
		<>
			<form>
				<div>
					<div>
						<label>
							<select
								value={formValues.popular}
								name='popular'
							>
								<option value=''>- Popular -</option>
								<option value='healthy'>Healthy</option>
								<option value='easy'>Quick an Easy</option>
								<option value='chicken'>Chicken</option>
								<option value='summer'>Summer</option>
								<option value='lunch'>Lunch</option>
								<option value='dinner'>Dinner</option>
							</select>
						</label>
						<label>
							<select
								value={formValues.course}
								name='course'
							>
								<option value=''>- Course -</option>
								<option value='breakfast'>Breakfast</option>
								<option value='lunch'>Lunch</option>
								<option value='dinner'>Dinner</option>
								<option value='dessert'>Dessert</option>
								<option value='appetizer'>Appetizer</option>
								<option value='snack'>Snack</option>
							</select>
						</label>
						<label>
							<select
								value={formValues.cuisine}
								name='cuisine'
							>
								<option value=''>- Cuisine -</option>
								<option value='american'>American</option>
								<option value='italian'>Italian</option>
								<option value='mexican'>Mexican</option>
								<option value='asian'>Asian</option>
								<option value='french'>French</option>
								<option value='greek'>Greek</option>
								<option value='indian'>Indian</option>
								<option value='eastern'>Middle Eastern</option>
							</select>
						</label>
						<label>
							<select
								value={formValues.diet}
								name='diet'
							>
								<option value=''>- Diet -</option>
								<option value='vegetarian'>Vegatarian</option>
								<option value='vegan'>Vegan</option>
								<option value='gluten'>Gluten-Free</option>
								<option value='lowfat'>Low Fat</option>
							</select>
						</label>
						<label>
							<select
								value={formValues.ingredient}
								name='ingredient'
							>
								<option value=''>- Ingredient -</option>
								<option value='chicken'>Chicken</option>
								<option value='beef'>Beef</option>
								<option value='pork'>Pork</option>
								<option value='tofu'>Tofu</option>
								<option value='fish'>Fish</option>
								<option value='onion'>Onion</option>
								<option value='beans'>Beans</option>
								<option value='fruit'>Fruit</option>
							</select>
						</label>
						<label>
							<select
								value={formValues.occasion}
								name='occasion'
							>
								<option value=''>- Occasion -</option>
								<option value='christmas'>Christmas</option>
								<option value='thanksgiving'>Thanksgiving</option>
								<option value='bbq'>BBQ</option>
								<option value='picnic'>Picnic</option>
								<option value='potluck'>Potluck</option>
							</select>
						</label>
						<label>
							<select
								value={formValues.technique}
								name='technique'
							>
								<option value=''>- Technique -</option>
								<option value='bake'>Bake</option>
								<option value='fry'>Fry</option>
								<option value='saute'>Saute</option>
								<option value='grill'>Grill</option>
							</select>
						</label>

					</div>
				</div>
			</form>
		</>
	);

};


export default HomePageFilter;