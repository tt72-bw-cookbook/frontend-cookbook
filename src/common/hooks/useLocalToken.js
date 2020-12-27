import { useState } from 'react';

export const useLocalToken = () => {
	const [storedToken, setStoredToken] = useState(() => {
		try {
			const item = window.localStorage.getItem("token");
			return item ? JSON.parse(item) : "";
		} catch (error) {
			console.error(error);
			return "";
		}
	});

	const setToken = value => {
		try {
			const valueToStore =
				value instanceof Function ? value(storedToken) : value;
			setStoredToken(valueToStore);
			window.localStorage.setItem("token", JSON.stringify(valueToStore));
		} catch (error) {
			console.error(error);
		}
	};

	const removeToken = () => {
		window.localStorage.removeItem("token");
	}

	return [storedToken, setToken, removeToken];
}

export default useLocalToken;