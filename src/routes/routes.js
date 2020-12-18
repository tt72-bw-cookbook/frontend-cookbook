import views from "../pages";

const LOGIN_PATH = "/login";
const SIGNUP_PATH = "/signup";

export const PATHS = {
	LOGIN_PATH,
	SIGNUP_PATH
}

export const LOGIN = {
	component: views.Login,
	path: LOGIN_PATH
}

export const SIGNUP = {
	component: views.Signup,
	path: SIGNUP_PATH
}

const ROUTES = [
	LOGIN,
	SIGNUP,
]

export default ROUTES;