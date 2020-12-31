import styled from "styled-components";
import SignupForm from "./components/SignupForm";
import { DefaultPageContainer } from "../../common/components";

const SignupPageContainer = props => {
	return (
		<DefaultPageContainer>
			<StyledParent>
				<h1>Sign up</h1>
				<SignupForm />
			</StyledParent>
		</DefaultPageContainer>
	)
}

const StyledParent = styled.div`
	margin: 5rem;
	border-radius: 10rem;
	width: 90vw;
	background-color: var(--pDarker);
`;



export default SignupPageContainer;