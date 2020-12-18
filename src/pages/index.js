import BrowsePageContainer from "./browse/BrowsePageContainer";
// HOMEPAGE IS THE EXCEPTION
import LoginPageContainer from "./login/LoginPageContainer";
import ProfilePageContainer from "./profile/ProfilePageContainer";
import SignupPageContainer from "./signup/SignupPageContainer";


//HOMEPAGE PATH "/"
const HOMEPAGE_PATH = "/";
const LOGIN_PATH = "/login";
const SIGNUP_PATH = "/signup";

const BROWSE_PATH = "/browse";
const PROFILE_PATH = "/profile";

export const PATHS = {
	HOMEPAGE_PATH,
	LOGIN_PATH,
	SIGNUP_PATH,
	BROWSE_PATH,
	PROFILE_PATH
}

const LOGIN = {
	component: LoginPageContainer,
	path: LOGIN_PATH
}
const SIGNUP = {
	component: SignupPageContainer,
	path: SIGNUP_PATH
}
const BROWSE = {
	component: BrowsePageContainer,
	path: BROWSE_PATH,
	isPrivate: true
}
const PROFILE = {
	component: ProfilePageContainer,
	path: PROFILE_PATH,
	isPrivate: true
}
const views = [
	LOGIN,
	SIGNUP,
	BROWSE,
	PROFILE,
];

export default views;
