import axios from 'axios';

const axiosAuth = () => {
	const token = window.localStorage.getItem("token");

	return axios.create({
		headers: {
			"Authorization": "Bearer " + JSON.parse(token),
			"Content-Type": "application/json"
		},
		baseURL: "https://tt72-cookbook.herokuapp.com/"
	})
}

export default axiosAuth;