import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useLocalToken, useFormError } from "../../../common/hooks";
import { Button, StyledForm } from "../../../common/components"
import Input from "../../../common/components/Input";
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
		<StyledWrap>
			<StyledForm onSubmit={handleSubmit}>

				<StInput
					id="username"
					type="text"
					name="username"
					placeholder="USERNAME"
					value={input.username}
					onChange={handleChanges}
					error={errors.username}
				/>

				<StInput
					id="password"
					type="password"
					name="password"
					placeholder="PASSWORD"
					value={input.password}
					onChange={handleChanges}
					error={errors.password}
				/>

				{/* <StInput
					id="passwordConfirm"
					type="password"
					name="passwordConfirm"
					placeholder="CONFIRM PASSWORD"
					value={input.passwordConfirm}
					onChange={handleChanges}
					error={errors.passwordConfirm}
				/> */}

				<StInput
					id="email"
					type="email"
					name="email"
					value={input.email}
					onChange={handleChanges}
					placeholder="EMAIL"
					error={errors.email}
				/>

				<StError>{errors.username}</StError>
				<StError>{errors.password}</StError>
				<StError>{errors.email}</StError>

				<Button disabled={disabled}>Submit</Button>


			</StyledForm>
			<Prompt>
				<p>Already signed up? </p><Link to="login">Log In</Link>
			</Prompt>
		</StyledWrap>
	)
}

const StyledWrap = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
`;


const StInput = styled(Input)`
	font-size: 2rem;
	text-align: center;
	/* text-transform: uppercase; */
	border: 1px solid ${props => (props.error !== "") ? "red" : "var(--pLighter)"};
	color: ${props => (props.error !== "") ? "red" : "var(--pText)"};
`;


const StError = styled.p`
font-size: 1.5rem;
font-weight: 500;
background-color: rgba(255, 255, 255, 0.5);
color: red;
line-height: 1.4;
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

export default SignupForm;