import { useForm, useLocalToken } from "../../../common/hooks/";
import { Input, Button, StyledForm } from "../../../common/components/";
import { axiosLogin, axiosAuth } from "../../../utils";

const LoginForm = props => {
	const [token, setToken, removeToken] = useLocalToken();
	const [input, handleChanges, clearForm] = useForm({
		username: "",
		password: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosLogin(input.username, input.password)
			.then(res => {
				setToken(res.data.access_token);
			})
			.catch(err => console.error(err));
		clearForm();
	}

	const handleLogout = (e) => {
		e.preventDefault();
		axiosAuth().get("logout");
		removeToken();
	}

	return (
		<>
			<StyledForm onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">Username</label>
					<Input type="text" id="username" name="username" value={input.username} onChange={handleChanges} />
				</div>
				<div>
					<label htmlFor="password">PASSWORD</label>
					<Input type="password" name="password" value={input.password} onChange={handleChanges} />
				</div>
				<Button>Submit</Button>
			</StyledForm>
			<Button onClick={handleLogout}>Logout</Button>
		</>
	)
}

export default LoginForm;