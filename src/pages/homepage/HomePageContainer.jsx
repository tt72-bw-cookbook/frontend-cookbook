import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../../common/components/";
import axios from 'axios';


const HomePageContainer = props => {


	return (
		<>
			<Header />
			<HomeBody>
				<div>
					<h2> Search Container </h2>
				</div>
				<div>
					<h2> Filter Container </h2>
				</div>
				<div>
					<h1>Recipe Rendering</h1>
				</div>
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