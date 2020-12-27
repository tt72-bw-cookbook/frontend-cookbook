import styled from "styled-components";
import { Header } from "../../common/components";

const ProfilePageContainer = props => {
	return (
		<>
			<Header />
			<ProfileBody>
				<h1>Profile</h1>
			</ProfileBody>
		</>
	)
}

const ProfileBody = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	h1 {
		margin: 2rem;
		font-size: 5rem;
		font-weight: 800;
		text-align: center;
		text-transform: uppercase;
	}
`;


export default ProfilePageContainer;