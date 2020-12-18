// import React from "react";
import styled from "styled-components";
import { useTheme } from "../theme/ThemeContext";

const ThemeToggler = props => {
	const { toggle } = useTheme();

	return (
		<Toggler onClick={toggle}>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
				<g fill="none" fillRule="evenodd">
					<circle cx="12" cy="12" r="11.5" stroke="currentColor"></circle>
					<path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12z"></path>
				</g>
			</svg>
		</Toggler>
	);
}

const Toggler = styled.div`
		background-color: var(--pBase);
		color: var(--pText);
		cursor: pointer;
		border-radius: 50%;
		margin: 10px;
		width: 40px; 
		height: 40px;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center; align-items: center;
`;


export default ThemeToggler;