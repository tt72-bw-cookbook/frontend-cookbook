import { Route, Redirect } from "react-router-dom";
const userIsLoggedIn = true;

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