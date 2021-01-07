import React, { useState } from "react";
import styled from "styled-components";
import { PATHS } from "../../pages/";
import ThemeToggler from "./ThemeToggler";
import MenuBurger from "./MenuBurger";
import Heading from "./Heading";
import Link from "./Link";

const Header = props => {
	const [navOpen, setNavOpen] = useState(false);

	const toggleNav = () => {
		setNavOpen(!navOpen);
	}

	return (
		<>
			<StyledHeader>
				<div className="container">
					<div>
						<Heading h1 noMargin>Recipe Cookbook</Heading>
					</div>
					<div>
						<MenuBurger onClick={toggleNav} />
						<ThemeToggler />
					</div>
				</div>
			</StyledHeader>

			<NavContainer show={navOpen}>
				<nav>
					<Link to={PATHS.HOMEPAGE_PATH}>Home</Link>
					<Link to={PATHS.LOGIN_PATH}>Login</Link>
					<Link to={PATHS.SIGNUP_PATH}>Signup</Link>
					{/* <Link to={PATHS.BROWSE_PATH}>Browse</Link> */}
					<Link to={PATHS.PROFILE_PATH}>Profile</Link>
					<Link to={PATHS.RECIPE_VIEW_PATH}>View Recipe</Link>
				</nav>
			</NavContainer>
		</>
	);
}


const StyledHeader = styled.header`
	width: 100vw;
	background-color: var(--pDark);
	color: var(--pText);
	padding: 0 2rem;
	div.container {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
	}
	div {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
	}
	font-family: 'Alegreya', serif;
`;



const NavContainer = styled.nav`
	display: ${pr => pr.show ? "flex" : "none"};
	width: 100vw;
	background-color: var(--pDarker);
	flex-flow: row nowrap;
	justify-content: center;
	nav {
		display: flex;
		width: 100%;
		flex-flow: row nowrap;
		justify-content: center;
	}
`;


export default Header;