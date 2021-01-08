import axios from 'axios';

const axiosAuth = () => {
	const token = window.localStorage.getItem("token") ?? JSON.stringify("not-logged-in");

	return axios.create({
		headers: {
			"Authorization": "Bearer " + JSON.parse(token),
			"Content-Type": "application/json"
		},
		baseURL: "https://tt72-cookbook.herokuapp.com/"
	})
}

export default axiosAuth;