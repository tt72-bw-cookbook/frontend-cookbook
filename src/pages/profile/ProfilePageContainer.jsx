import styled from "styled-components";
import { Header } from "../../common/components";
import { axiosAuth } from "../../utils";
import React, { useState, useEffect } from "react";
import ProfilePageRecipes from './ProfilePageRecipes';

const userURL = 'https://tt72-cookbook.herokuapp.com/users/current';


const ProfilePageContainer = props => {

	const [user, setUser] = useState([])

	useEffect( () => {
		axiosAuth()
		.get(userURL)
		.then ( (res) => {
			console.log(res.data)
			setUser(res.data)
		})
		.catch ( (err) => {
			console.log(err)
		})
	}, [])

	const date = user.createdDate.split(' ');

	console.log('date', date[0]);


	return (
		<>
			<Header />
			<ProfileBody>
				<h2>Your Profile</h2>
				<div>
					<h1>{user.username}</h1>
					<img src = {user.profilepicture} />
					<h3> Email: {user.email} </h3>
					<h3> Since: {date[0]} </h3>
				</div>
				<div>
					<button> Create New Recipe </button>
					{
						user.recipes.map(userRecipes => {
						return <ProfilePageRecipes key={userRecipes.userRecipeid} userRecipes={userRecipes}/>;
						})
					}   
				</div>
				<div>

				</div>
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