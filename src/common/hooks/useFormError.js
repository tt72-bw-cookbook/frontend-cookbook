import { useEffect, useState } from "react"
import * as yup from "yup"

export const useFormError = (initInput, schema) => {
	const [input, setInput] = useState(initInput);
	const [errors, setErrors] = useState(initInput);
	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		schema.isValid(input)
			.then(valid => {
				setDisabled(!valid);
			});
	}, [input, schema])

	const handleChanges = evt => {
		evt.preventDefault();
		const { name, value } = evt.target;
		yup.reach(schema, name)
			.validate(value)
			.then(() => {
				setErrors({ ...errors, [name]: "" });
			})
			.catch((err) => {
				setErrors({ ...errors, [name]: err.errors[0] });
			});

		setInput({ ...input, [name]: value });
	};

	const clearForm = () => {
		setInput(initInput);
		setErrors(initInput);
	};

	return [input, errors, disabled, handleChanges, clearForm,];
}

export default useFormError;