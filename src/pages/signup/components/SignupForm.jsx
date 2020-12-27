import { useForm } from "../../../common/hooks/useForm";
import { useLocalToken } from "../../../common/hooks/useLocalToken";
import { Input, Button, StyledForm } from "../../../common/components"
import axios from "axios";

const SignupForm = props => {
	const [input, handleChanges, clearForm] = useForm({
		username: "",
		password: "",
		email: ""
	});
	const [token, setToken, removeToken] = useLocalToken();

	const handleSubmit = (evt) => {
		evt.preventDefault();

		axios.post("https://tt72-cookbook.herokuapp.com/createnewuser", input)
			.then(res => {
				setToken(res.data.access_token);
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
					<label htmlFor="username">username</label>
					<Input id="username" type="text" name="username" value={input.username} onChange={handleChanges} />
				</div>
				<div>
					<label htmlFor="password">password</label>
					<Input id="password" type="password" name="password" value={input.password} onChange={handleChanges} />
				</div>
				<div>
					<label htmlFor="email">email</label>
					<Input id="email" type="email" name="email" value={input.email} onChange={handleChanges} />
				</div>
				<Button>Submit</Button>
			</StyledForm>
		</div>
	)
}

export default SignupForm;