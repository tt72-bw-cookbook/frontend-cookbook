import { Switch, Route } from "react-router-dom";
import HomePageContainer from "./pages/homepage/HomePageContainer";
import AppRoute from "./routes/AppRoute";
// import routes from "./routes/routes";
import NotFound404 from "./pages/notfound/NotFound404";
import views from "./pages"

const App = () => {
	return (
		<div className="App">
			<Switch>
				{views.map(route => {
					return (<AppRoute key={route.path} path={route.path} component={route.component} isPrivate={route.isPrivate} />);
				})}
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
