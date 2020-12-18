import styled from "styled-components";

const HomePageContainer = props => {
	return (
		<div>
			<WelcomeHeading> HOME PAGE </WelcomeHeading>
		</div>
	);
}

const WelcomeHeading = styled.h1`
	font-size: 3rem;
	text-align: center;
`;

export default HomePageContainer;