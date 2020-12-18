import React from "react";
import useForm from "../hooks/useForm";
import Input from "./Input";
import styled from "styled-components";
import Button from "./Button";

const Form = ({ fields, handleSubmit }) => {
	let initState = {};
	fields.forEach(field => initState[field.name] = field.initVal ? field.initVal : "");
	const [values, handleChanges, clearForm] = useForm(initState);

	const handleSubmitLocal = (evt) => {
		evt.preventDefault();
		handleSubmit(values);
		clearForm();
	}

	return (
		<StyledForm onSubmit={handleSubmitLocal}>
			{
				fields.map(field => {
					const { name, type, placeholder, className } = field;
					return (
						<InputPair>
							<label htmlFor={name}>{name}</label>
							<Input
								key={`${name}_${type}_${placeholder}`}
								name={name}
								id={name}
								type={type ? type : "text"}
								placeholder={placeholder ? placeholder : name}
								className={className ? className : ""}
								value={values[name]}
								onChange={handleChanges} />
						</InputPair>
					);
				})
			}
			<Button secondary>Submit</Button>
		</StyledForm>
	);
};

const StyledForm = styled.form`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
`;

const InputPair = styled.div`
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: space-between;
		width: 30rem;
		input {
			width: 20rem;
		}
`;

export default Form;