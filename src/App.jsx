import { Switch, Route } from "react-router-dom";
import HomePageContainer from "./pages/homepage/HomePageContainer";
import AppRoute from "./AppRoute";
// import routes from "./routes/routes";
import NotFound404 from "./pages/notfound/NotFound404";
import views from "./pages"
import { useEffect } from 'react';
import axiosAuth from './utils/axiosAuth'
import { useDispatch } from 'react-redux';
import { confirmUserLoggedIn, rejectUserLoggedIn } from './store/vanillaRedux/actions';

const App = () => {

	const dispatch = useDispatch();
	useEffect(() => {
		axiosAuth().get("users/current")
			.then(res => {
				dispatch(confirmUserLoggedIn())
			}).catch(err => {
				dispatch(rejectUserLoggedIn())
			})
	}, [dispatch])

	return (
		<div className="App">
			<Switch>
				{views.map(route => {
					return (<AppRoute key={route.path} path={route.path} component={route.component} isPrivate={route.isPrivate} />);
				})}
				{/* <Route exact path="/recipe">
					<RecipeViewPageContainer />
				</Route> */}

				<Route exact path="/">
					<HomePageContainer />
				</Route>

				<Route path="*">
					<NotFound404 />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
