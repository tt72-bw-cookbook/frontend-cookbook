import { Route, Redirect } from "react-router-dom";
const userIsLoggedIn = window.localStorage.getItem("token") ? true : false;

const AppRoute = ({ component: Component, path, isPrivate = false, ...rest }) => {
	return (
		<Route path={path}
			render={() => isPrivate && !userIsLoggedIn ?
				<Redirect to="/" />
				: <Component {...rest} />
			}
			{...rest}
		/>
	);
}

export default AppRoute;