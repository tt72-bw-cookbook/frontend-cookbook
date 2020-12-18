import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";



const Input = ({ name, type, placeholder, onChange, className, value, children, label, readOnly, ...props }) => {
	// const readOnly = readonly || false;
	return (
		<>
			<label htmlFor={name}>{label}</label>
			{
				readOnly === true
					? <StyledInput id={name} name={name} type={type} placeholder={placeholder} onChange={onChange} value={value} className={className} readOnly={true} {...props} />
					: <StyledInput id={name} name={name} type={type} placeholder={placeholder} onChange={onChange} value={value} className={className} {...props} />
			}
		</>
	)
};

Input.defaultProps = {
	type: "text",
	className: "",
	readOnly: false,
};
Input.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.oneOf(["text", "number", "password", "email"]),
	placeholder: PropTypes.string,
	className: PropTypes.string,
	value: PropTypes.any,
	readOnly: PropTypes.bool,
	onChange: PropTypes.func,
};

const StyledInput = styled.input`
	display: inline-block;
	background: transparent;
	width: 30rem;
	height: 3.2rem;
	border: 0;
	border: 1px solid var(--pLighter);
	color: var(--pText);
	border-radius: 4px;
	margin: 1rem;
	box-sizing: border-box;
`;


export default Input;