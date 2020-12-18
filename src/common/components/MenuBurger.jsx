import styled from "styled-components";

const MenuBurger = props => {
	return (
		<SMenuBurger {...props}>
			<svg viewBox="0 0 100 80" width="35" height="35">
				<rect width="100" height="20" rx="8"></rect>
				<rect y="30" width="100" height="20" rx="8"></rect>
				<rect y="60" width="100" height="20" rx="8"></rect>
			</svg>
		</SMenuBurger>
	);
};

const SMenuBurger = styled.div`
	cursor: pointer;
	fill: var(--pText);
`;

export default MenuBurger;