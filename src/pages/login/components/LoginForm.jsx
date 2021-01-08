import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useFormError } from "../../../common/hooks/";
import { Button, StyledForm } from "../../../common/components/";
import Input from "../../../common/components/Input";
import schema from "../schema";
import { postUserLogin } from '../../../store/vanillaRedux/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const LoginForm = props => {
	const dispatch = useDispatch();
	const [input, errors, disabled, handleChanges, clearForm] = useFormError({ username: "", password: "", }, schema);
	const { push } = useHistory();
	const isLoggedIn = useSelector(state => state.user.isLoggedIn)

	useEffect(() => {
		if (isLoggedIn) {
			push('/profile')
		}
	}, [isLoggedIn, push])

	const handleSubmit = (evt) => {
		evt.preventDefault();
		dispatch(postUserLogin(input.username, input.password))
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
	border: 1px solid ${props => (props.error !== "") ? "red" : "var(--pLighter)"};
	color: ${props => (props.error !== "") ? "red" : "var(--pText)"};
`;

const Prompt = styled.div`
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