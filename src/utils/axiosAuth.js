import axios from 'axios';

const axiosAuth = () => {
	const token = localStorage.getItem('token');

	return axios.create({
		headers: {
			Authorization: "Bearer " + token,
			"Content-Type": "application/json"
		},
		baseURL: 'http://localhost:2019/'
	})
}

/* axiosSecret is for LOGIN ONLY 
* this will not work if you're trying to send an auth token.
* this is only applicable for __previously registered users__ who are 
* simply trying to log in once again. 

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
		baseURL: "http://localhost:2019/"
	})
}

export default axiosAuth;