// HOMEPAGE IS THE EXCEPTION
import LoginPageContainer from "./login/LoginPageContainer";
import ProfilePageContainer from "./profile/ProfilePageContainer";
import SignupPageContainer from "./signup/SignupPageContainer";
import RecipeViewPageContainer from "./recipe-view/RecipeViewPageContainer";

const HOMEPAGE_PATH = "/";
const LOGIN_PATH = "/login";
const SIGNUP_PATH = "/signup";
const RECIPE_VIEW_PATH = "/recipe";
const PROFILE_PATH = "/profile";

export const PATHS = {
	HOMEPAGE_PATH,
	LOGIN_PATH,
	SIGNUP_PATH,
	PROFILE_PATH,
	RECIPE_VIEW_PATH,
}

const LOGIN = {
	component: LoginPageContainer,
	path: LOGIN_PATH
}
const SIGNUP = {
	component: SignupPageContainer,
	path: SIGNUP_PATH
}
const PROFILE = {
	component: ProfilePageContainer,
	path: PROFILE_PATH,
	isPrivate: true
}
const RECIPE_VIEW = {
	component: RecipeViewPageContainer,
	path: RECIPE_VIEW_PATH
}
const views = [
	LOGIN,
	SIGNUP,
	PROFILE,
	RECIPE_VIEW
];

export default views;
