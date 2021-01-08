import styled from "styled-components"
import { Button } from "../../../common/components/"

const AddIngredientFragment = ({ formValue, index, addField, remField, ingredientChange, ...rest }) => {
	const onChange = (evt) => {
		const { name, value } = evt.target;
		ingredientChange(name, value, index);
	}

	return (
		<StyledIngredientFragment>
			<div className="ingredient-container">
				<div>
					<label htmlFor="ingredientname">Ingredient Name</label>
					<StyledIngInput
						onChange={onChange}
						type="text"
						className="form-control"
						// placeholder="Ingredient Name"
						placeholder="Sugar (White)"
						id="ingredientname"
						name="ingredientname"
						value={formValue.ingredientname}
					/>
				</div>
				<div>
					<label htmlFor="measurement">Measurement Unit</label>
					<StyledIngInput
						onChange={onChange}
						type="text"
						className="form-control"
						placeholder="cups"
						id="measurement"
						name="measurement"
						value={formValue.measurement}
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
						placeholder="1"
						value={formValue.quantity}
					/>
				</div>
			</div>
			<div className="button-container">
				<Button
					className="btn btn-link"
					type="button"
					onClick={() => remField(index)}
				>-</Button>
				<Button
					className="btn btn-link"
					type="button"
					onClick={() => addField()}
				>+</Button>
			</div>
		</StyledIngredientFragment>
	)
}

const StyledIngredientFragment = styled.div`
	height: 100%;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	.ingredient-container {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-evenly;
	}
	.button-container {
		display: flex;
		flex-flow: row nowrap;
		Button {
		border-radius: 50%;
			height: 4rem;
			width: 4rem;
			margin: 0.5rem;
		}
	}
	@media (max-width: 700px) {
		width: 100%;
		/* flex-flow: column nowrap; */
			align-items: center;
		.ingredient-container {
			width: 80%;
			flex-flow: column nowrap;
			div {
				width: 100%;
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-between;
				align-items: center;
				white-space: nowrap;
			}
		}
		.button-container {
			flex-flow: column nowrap;
		}
	}
`;

const StyledIngInput = styled.input`
text-align: center;
margin: 1%;
border-radius: 20px;
border: 0px solid black;
padding: 1%;
&:hover {
		background: #edebe9;
}
`;

export default AddIngredientFragment;