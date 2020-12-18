import React, { createContext, useContext } from "react";
import styled, { ThemeProvider, css } from "styled-components";
import theme from "styled-theming";
import { useLocalTheme } from "../hooks/useLocalTheme";
import { rootVars } from "./theme";

const ThemeToggleContext = createContext();
export const useTheme = () => useContext(ThemeToggleContext);

const wrapTheme = theme("mode", {
	dark: css`
		background-color: var(--pBase);
		color: var(--pText);
	`,
	light: css`
		background-color: var(--pBase);
		color: var(--pText);
	`,
});

const Wrapper = styled.div`
	${rootVars};
	${wrapTheme};
	max-width: 100vw;
	min-height: 100vh;
`;

export const ThemeContextProvider = ({ children }) => {
	const [themeState, setThemeState] = useLocalTheme();
	const toggle = () => {
		const mode = (themeState === "light" ? "dark" : "light");
		setThemeState(mode);
	};

	return (
		<ThemeToggleContext.Provider value={{ toggle: toggle, mode: themeState }}>
			<ThemeProvider theme={{ mode: themeState }}>
				<Wrapper>
					{children}
				</Wrapper>
			</ThemeProvider>
		</ThemeToggleContext.Provider>
	);
}

export default ThemeProvider;
