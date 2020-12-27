import SignupForm from "./components/SignupForm";
import { DefaultPageContainer } from "../../common/components";

const SignupPageContainer = props => {
	return (
		<DefaultPageContainer>
			<h1>Signup</h1>
			<SignupForm />
		</DefaultPageContainer>
	)
}

export default SignupPageContainer;