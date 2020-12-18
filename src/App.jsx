import { Switch, Route } from "react-router-dom";
import HomePageContainer from "./pages/homepage/HomePageContainer";
import AppRoute from "./routes/AppRoute";
// import routes from "./routes/routes";
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
			</Switch>
		</div>
	);
}

export default App;
