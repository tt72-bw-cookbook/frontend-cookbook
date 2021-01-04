import { Header } from "../../common/components";
import styled from "styled-components";

const RecipeViewPageContainer = props => {
	return (
		<>
			<Header />
			<StyledRecipes>
				<div className="">
					<h1>Recipe View</h1>
				</div>
				<h2> Ingredients </h2>
				<ul>
					<li>stuff</li>
				</ul>
			</StyledRecipes>
		</>

	);
}


export default RecipeViewPageContainer;


const StyledRecipes = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	h1 {
		margin: 5rem;
		font-size: 5rem;
		font-weight: 800;
		text-align: center;
	}
margin-top: 10px;
`;
