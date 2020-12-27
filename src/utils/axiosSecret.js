import axios from "axios";

/**
 * axiosSecret is for LOGIN ONLY. 
 * this will not work if you're trying to send an auth token.
 * this is only applicable for __previously registered users__ who are 
 * simply trying to log in once again. 
 * 
 * only for use of REGISTERED USERS who need to gain an AUTH TOKEN again
 */
export const axiosSecret = () => {
	const clientID = "AndIKnewExactlyWhatToDo";
	const clientSecret = "ButInAMuchMoreRealSenseIHadNoIdeaWhatToDo";

	const auth = window.btoa(clientID + ":" + clientSecret);

	return axios.create({
		headers: {
			Authorization: 'Basic ' + auth,
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		baseURL: "https://tt72-cookbook.herokuapp.com/",
	})
}

export const axiosLogin = async (username, password) => {
	const res = await axiosSecret()
		.post(`login?grant_type=password&username=${username}&password=${password}`);
	return res;
}

export default axiosSecret;