import styled from "styled-components";
import LoginForm from "./components/LoginForm";
import { DefaultPageContainer } from "../../common/components";

const LoginContainer = props => {
	return (
		<DefaultPageContainer>
			<StyledParent>
				<h1>Log in</h1>
				<LoginForm />
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

export default LoginContainer;