import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import store from './store/store';
import { ThemeContextProvider } from "./common/theme/ThemeContext";
import * as serviceWorker from './serviceWorker';

// import { reducer } from './store/vanillaRedux/reducers/index';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeContextProvider>
				<Router>
					<App />
				</Router>
			</ThemeContextProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
