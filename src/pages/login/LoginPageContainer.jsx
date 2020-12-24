import LoginForm from "./components/LoginForm";
import { DefaultPageContainer } from "../../common/components";

const LoginContainer = props => {
	return (
		<DefaultPageContainer>
			<h1>Login</h1>
			<LoginForm />
		</DefaultPageContainer>
	)
}

export default LoginContainer;