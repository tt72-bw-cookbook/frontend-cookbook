import { useState } from "react";

const Checkbox = ({ name, handleCheck }) => {
	const [checked, setChecked] = useState(false);

	const handleClick = (evt) => {
		evt.stopPropagation();
		setChecked(!checked);
	}

	return (
		<div>
			<label htmlFor={name}>{name}</label>
			<input id={name} name={name} type="checkbox" value={checked} onChange={handleCheck} />
		</div>
	);
}

export default Checkbox;