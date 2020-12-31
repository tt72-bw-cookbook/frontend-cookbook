import styled from "styled-components";



const StyledForm = styled.form`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	div {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: space-between;
		width: 30rem;
		input {
			width: 20rem;
		}
		label {
			font-size: 1.4rem;
		}
	}
`;

export default StyledForm;