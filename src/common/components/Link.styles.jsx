import styled, { css } from 'styled-components';
import { Link as RouteLink } from "react-router-dom";

export const baseStyles = css`
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	background-color: var(--tBase);
	color: var(--white);
	display: inline-flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	height: 5rem;
	width: 15rem;
	margin: 1rem;
	white-space: nowrap;
	line-height: normal;
	text-decoration: none;
	font-size: 1.6rem;
	outline: none;
	border: none;
	border-radius: 10px;
`;
export const disabledClicker = css`
	${baseStyles};
	background-color: var(--pBase);
`;

export const clickerStyles = css`
	${baseStyles};
	cursor: pointer;
	&:hover {
		transition-duration: 0;
		cursor: pointer;
		background-color: var(--tDark);
	}
	&:active {
		transition-duration: 0;
		background-color: var(--tDarker);
	}
`;
export const secondaryClickerStyles = css`
	background-color: var(--pLight);
	color: var(--pText);
	&:hover {
		transition-duration: 0;
		cursor: pointer;
		background-color: var(--pBase);
	}
	&:active {
		transition-duration: 0;
		background-color: var(--pDark);
	}
`;
const StyledLink = styled(RouteLink)`
	${baseStyles};
	${props => {
		if (props.disabled) {
			return disabledClicker;
		} else if (props.secondary) {
			return secondaryClickerStyles;
		} else {
			return clickerStyles;
		}
	}};
`;

export default StyledLink;