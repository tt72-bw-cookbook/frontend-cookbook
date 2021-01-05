import styled from "styled-components";
import { Header } from "../../common/components";
import { axiosAuth } from "../../utils";
import React, { useState, useEffect } from "react";
import ProfilePageRecipes from './ProfilePageRecipes';

const userURL = 'https://tt72-cookbook.herokuapp.com/users/current';


const ProfilePageContainer = props => {

	const [user, setUser] = useState({})

	useEffect(() => {
		if (user) {
			axiosAuth()
				.get(userURL)
				.then((res) => {
					console.log(res.data)
					setUser(res.data)
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}, [user])

	const date = user?.createdDate?.split(' ');

	console.log('date', date ? date[0] : "undefined");


	if (!user) {
		return <h1>No user found</h1>
	}

	return (
		<>
			<Header />
			<ProfileBody>
				<ProfileH2>Your Profile</ProfileH2>
				<UserInfo>
					<h1>{user.username}</h1>
					<UserImg src={user ? user.profilepicture : "none"} />
					<h3> Email: {user.email ?? "unknown"} </h3>
					<h3> Since: {date ? date[0] : "unknown"}</h3>
				</UserInfo>
				<NewRecipeButton disabled={!user}> Add New Recipe </NewRecipeButton>
				<ProfileH2>Your Recipes</ProfileH2>
				<UserRecipes>
					{
						user?.recipes && user.recipes.map(userRecipes => {
							return <ProfilePageRecipes key={userRecipes.userRecipeid} userRecipes={userRecipes} />;
						})
					}
				</UserRecipes>
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

const ProfileH2 = styled.h2`
font-size: 2.5rem;
text-align: center;
Padding: 1%;
`;

const UserInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const UserImg = styled.img`
height: 200px;
width: 300px;
`;

const NewRecipeButton = styled.button`
  background-color: skyblue;
  color: white;
  padding: 12px 30px;
  margin: 2%;
  text-align: center;
  font-size: 14px;
`;

const UserRecipes = styled.div`
width: 90%;
`;


export default ProfilePageContainer;