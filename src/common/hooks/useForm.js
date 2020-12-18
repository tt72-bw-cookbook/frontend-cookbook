import { useState } from "react"

export const useForm = (initInput) => {
	const [input, setInput] = useState(initInput);


	const handleChanges = evt => {
		evt.preventDefault();
		const { name, value } = evt.target;
		setInput({ ...input, [name]: value });
	};

	const clearForm = () => {
		setInput(initInput);
	};

	return [input, handleChanges, clearForm];
}

export default useForm;