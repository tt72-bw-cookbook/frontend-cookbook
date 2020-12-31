import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useLocalToken, useFormError } from "../../../common/hooks";
import { Input, Button, StyledForm } from "../../../common/components"
import schema from "../schema";

const SignupForm = props => {
	const { push } = useHistory();

	const { setToken } = useLocalToken();

	const [input, errors, disabled, handleChanges, clearForm] = useFormError({
		username: "",
		password: "",
		email: ""
	}, schema);

	const handleSubmit = (evt) => {
		evt.preventDefault();

		axios.post("https://tt72-cookbook.herokuapp.com/createnewuser", input)
			.then(res => {
				setToken(res.data.access_token);
				push("/profile");
			})
			.catch(err => {
				console.error(err);
			});

		clearForm();
	}

	return (
		<div>
			<StyledForm onSubmit={handleSubmit}>

				<div>
					<label htmlFor="username">Username</label>
					<Input id="username" type="text" name="username" value={input.username} onChange={handleChanges} />
				</div>
				<StError>{errors.username}</StError>

				<div>
					<label htmlFor="password">Password</label>
					<Input id="password" type="password" name="password" value={input.password} onChange={handleChanges} />
				</div>
				<StError>{errors.password}</StError>

				<div>
					<label htmlFor="email">Email</label>
					<Input id="email" type="email" name="email" value={input.email} onChange={handleChanges} />
				</div>
				<StError>{errors.email}</StError>

				<Button disabled={disabled}>Submit</Button>

			</StyledForm>
		</div>
	)
}

const StError = styled.p`
	font-size: 1.5rem;
	font-weight: 500;
	background-color: rgba(255,255,255,0.5);
	color: red;
	line-height: 1.4;
`;

export default SignupForm;