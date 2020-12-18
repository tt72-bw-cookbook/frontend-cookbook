import styled from "styled-components";
import components from "../../common/components/";
const { Header } = components;

const HomePageContainer = props => {
	return (
		<div>
			<Header />
			<WelcomeHeading> HOME PAGE </WelcomeHeading>
		</div>
	);
}

const WelcomeHeading = styled.h1`
	font-size: 3rem;
	text-align: center;
`;

export default HomePageContainer;