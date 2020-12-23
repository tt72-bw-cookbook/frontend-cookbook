import React, { useState } from "react";
import styled from "styled-components";
import components from "../../common/components/";
import axiosAuth, { axiosSecret } from "../../utils/axiosAuth";

const { Header } = components;

const HomePageContainer = props => {
	const [v, setV] = useState({
		username: "",
		password: "",
		primaryemail: "",
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setV({ ...v, [name]: value });
	}

	/** 
	 * here's an example of a call to axiosSecret.
	 * realistically, it'll look more like so:
	 * axiosSecret()
	 * 	.post("login", "grant_type=password&username=${submittedUsername}&password=${submittedPassword}")
	 * .then(res => console.log(res.data.access_token))
	 * .catch(err => console.log("it's not my fault"));
	 * 
	 * 
	 * res.data.access_token will hold the ACTUAL ACCESS TOKEN NECESSARY FOR ANY AUTHORIZED ENDPOINTS
	 * 
	 */
	const handleSubmit = e => {
		e.preventDefault();
		axiosSecret().post("login", "grant_type=password&username=chaz&password=password")
			.then(res => {
				console.log(res, res.data, res.data.auth_token)
				console.log(res.data.access_token)
			})
			.catch(err => console.log(err));
	}

	return (
		<div>
			<Header />
			<WelcomeHeading> HOME PAGE </WelcomeHeading>
			<div>
				<form onSubmit={handleSubmit}>
					<input type="text" name="username" value={v.username} onChange={handleChange} />
					<input type="text" name="password" value={v.password} onChange={handleChange} />
					<input type="text" name="primaryemail" value={v.primaryemail} onChange={handleChange} />
					<button>submit</button>
				</form>
			</div>
		</div>
	);
}

const WelcomeHeading = styled.h1`
	font-size: 3rem;
	text-align: center;
`;

export default HomePageContainer;