import SignupPageContainer from "./signup/SignupPageContainer";
import LoginPageContainer from "./login/LoginPageContainer";
import BrowseContainer from "./browse/BrowseContainer";

const LOGIN_PATH = "/login";
const SIGNUP_PATH = "/signup";
const BROWSE_PATH = "/browse";

export const PATHS = {
	LOGIN_PATH,
	SIGNUP_PATH,
	BROWSE_PATH
}

export const LOGIN = {
	component: LoginPageContainer,
	path: LOGIN_PATH
}

export const SIGNUP = {
	component: SignupPageContainer,
	path: SIGNUP_PATH
}

export const BROWSE = {
	component: BrowseContainer,
	path: BROWSE_PATH,
	isPrivate: true
}

const views = [
	LOGIN,
	SIGNUP,
	BROWSE
];

export default views;
