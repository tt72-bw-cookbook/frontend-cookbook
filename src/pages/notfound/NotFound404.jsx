import styled from "styled-components";
import components from "../../common/components";
const { Link } = components;

const NotFound404 = () => (
	<>
		<Styled404>
			<div>
				<h1>PAGE NOT FOUND</h1>
				<Link to="/">Back Home?</Link>
			</div>
		</Styled404>
	</>
);

const Styled404 = styled.div`
	background-color: var(--pDarker);
	padding: 2rem;
	div {
		margin: 2rem;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		font-size: 4rem;
	}
`;

export default NotFound404;