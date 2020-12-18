import { useState } from "react";

export const useLocalTheme = () => {
	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
	const defaultMode = prefersDark ? "dark" : "light";
	const [storedMode, setStoredMode] = useState(() => {
		try {
			const mode = window.localStorage.getItem("mode");
			return mode ? JSON.parse(mode) : defaultMode;
		} catch (err) {
			console.log(err);
			return defaultMode;
		}
	});
	const setMode = value => {
		try {
			const valueToStore = value instanceof Function ? value(storedMode) : value;
			setStoredMode(valueToStore);
			window.localStorage.setItem("mode", JSON.stringify(valueToStore));
		} catch (err) {
			console.log(err);
		}
	};
	return [storedMode, setMode];
}