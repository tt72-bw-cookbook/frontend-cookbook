import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useFormError, useLocalToken } from "../../../common/hooks/";
import { Button, StyledForm } from "../../../common/components/";
import Input from "../../../common/components/Input";
import { axiosLogin } from "../../../utils";
import schema from "../schema";

const LoginForm = props => {
	const [input, errors, disabled, handleChanges, clearForm] = useFormError({ username: "", password: "", }, schema);
	const { setToken } = useLocalToken();
	const { push } = useHistory();

	const handleSubmit = (evt) => {
		evt.preventDefault();

		axiosLogin(input.username, input.password)
			.then(res => {
				setToken(res.data.access_token);
				push("/profile");
			})
			.catch(err => console.error(err));
		clearForm();
	}

	return (
		<StyledWrap>
			<StyledForm onSubmit={handleSubmit}>
				<StInput
					type="text"
					id="username"
					name="username"
					value={input.username}
					onChange={handleChanges}
					error={errors.username}
					placeholder="USERNAME"
				/>
				<StInput
					type="password"
					name="password"
					value={input.password}
					onChange={handleChanges}
					error={errors.password}
					placeholder="PASSWORD"
				/>
				<Button disabled={disabled}>Submit</Button>
			</StyledForm>
			<Prompt>
				<p>Don't have an account?</p><Link to="signup">Sign up!</Link>
			</Prompt>
		</StyledWrap>
	)
}

const StInput = styled(Input)`
	font-size: 2rem;
	text-align: center;
	/* text-transform: uppercase; */
	border: 1px solid ${props => (props.error !== "") ? "red" : "var(--pLighter)"};
	color: ${props => (props.error !== "") ? "red" : "var(--pText)"};
`;

const StError = styled.p`
	font-size: 1.4rem;
	background-color: rgba(255,255,255,0.5);
	color: red;
	/* padding: 0.5rem; */
`;

const Prompt = styled.div`
/* text-align: center; */
/* background-color: var(--pDarker); */
width: 25rem;
display: flex;
flex-flow: row nowrap;
justify-content: space-between;
align-items: center;
padding: 2rem;
p {
	font-size: 1.3rem;
}
a, Link {
	font-size: 1.3rem;
	color: var(--pText);
}
`;

const StyledWrap = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
`;

export default LoginForm;