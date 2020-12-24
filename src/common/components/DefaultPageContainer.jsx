import { Header, StyledPageContainer } from "./";

const DefaultPageContainer = props => {
	return (
		<>
			<Header />
			<StyledPageContainer>
				{props.children}
			</StyledPageContainer>
		</>
	)
}

export default DefaultPageContainer;