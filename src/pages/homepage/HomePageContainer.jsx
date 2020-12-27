import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../../common/components/";

const HomePageContainer = props => {


	return (
		<>
			<Header />
			<HomeBody>
				<h1> HOME PAGE </h1>
			</HomeBody>
		</>
	);
}

const HomeBody = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	h1 {
		margin: 20rem;
		font-size: 5rem;
		font-weight: 800;
		text-align: center;
	}
`;

export default HomePageContainer;