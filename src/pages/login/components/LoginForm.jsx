import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useForm, useFormError, useLocalToken } from "../../../common/hooks/";
import { Input, Button, StyledForm } from "../../../common/components/";
import { axiosLogin, axiosAuth } from "../../../utils";
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
		<>
			<StyledForm onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">Username</label>
					<Input type="text" id="username" name="username" value={input.username} onChange={handleChanges} />
				</div>
				<StError>{errors.username}</StError>

				<div>
					<label htmlFor="password">Password</label>
					<Input type="password" name="password" value={input.password} onChange={handleChanges} />
				</div>
				<StError>{errors.password}</StError>

				<Button disabled={disabled}>Submit</Button>
			</StyledForm>

		</>
	)
}

const StError = styled.p`
	font-size: 1.4rem;
	background-color: rgba(255,255,255,0.5);
	color: red;
	/* padding: 0.5rem; */
`;

export default LoginForm;