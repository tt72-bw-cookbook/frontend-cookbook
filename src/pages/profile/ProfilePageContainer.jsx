import styled from "styled-components";
import { Header } from "../../common/components";
import React, { useEffect } from "react";
import ProfilePageRecipes from './ProfilePageRecipes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserLogout, fetchCurrentUser } from '../../store/vanillaRedux/actions/index';
import { Link, Button } from "../../common/components/";

const ProfilePageContainer = props => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.user.userData);

	useEffect(() => {
		dispatch(fetchCurrentUser());
	}, [dispatch])

	const date = user?.createdDate?.split(' ');

	if (!user) {
		return <h1>No user found</h1>
	}

	const handleLogout = () => {
		dispatch(fetchUserLogout());
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
				<Link secondary to='/add'>Add New Recipe</Link>
				<Button onClick={handleLogout}> Logout </Button>
				<ProfileH2>Your Recipes</ProfileH2>
				<UserRecipes>
					{
						user?.recipes && user.recipes.map(recipe => {
							return <ProfilePageRecipes key={recipe.recipeid} userRecipes={recipe} />;
						})
					}
				</UserRecipes>
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
	padding: 1%;
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

const UserRecipes = styled.div`
	width: 90%;
`;

export default ProfilePageContainer;