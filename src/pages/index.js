// HOMEPAGE IS THE EXCEPTION
import LoginPageContainer from "./login/LoginPageContainer";
import ProfilePageContainer from "./profile/ProfilePageContainer";
import SignupPageContainer from "./signup/SignupPageContainer";
import RecipeViewPageContainer from "./recipe-view/RecipeViewPageContainer";
import RecipeFormPage from "./recipe-form/RecipeFormPage";

const HOMEPAGE_PATH = "/";
const LOGIN_PATH = "/login";
const SIGNUP_PATH = "/signup";
const RECIPE_VIEW_PATH = "/recipe-view";
const RECIPE_VIEW_ID_PATH = "/recipe/:id"
const RECIPE_FORM_PATH = "/form/:id"
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
const RECIPE_VIEW_ID = {
	component: RecipeViewPageContainer,
	path: RECIPE_VIEW_ID_PATH
}
const EDIT_RECIPE_FORM = {
	component: RecipeFormPage,
	path: RECIPE_FORM_PATH,
	isPrivate: true
}
const ADD_RECIPE_FORM = {
	component: RecipeFormPage,
	path: "/add",
	isPrivate: true
}
const views = [
	LOGIN,
	SIGNUP,
	PROFILE,
	RECIPE_VIEW_ID,
	RECIPE_VIEW,
	ADD_RECIPE_FORM,
	EDIT_RECIPE_FORM,
];

export default views;
