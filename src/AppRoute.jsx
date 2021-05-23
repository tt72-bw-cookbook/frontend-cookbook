import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

const AppRoute = ({ component: Component, path, isPrivate = false, ...rest }) => {
	const isLoggedIn = useSelector(state => state.user.isLoggedIn)
	return (
		<Route path={path}
			render={(props) => isPrivate && !isLoggedIn
				? <Redirect to="/" />
				: <Component {...props} />
			}
			{...rest}
		/>
	);
}

export default AppRoute;
