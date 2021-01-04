import React from "react";
import styled from "styled-components";


const ProfilePageRecipes = props => {

    const { userRecipes } = props

	return (
		<>
    <div>
       <h2> {userRecipes.title} </h2>
       {/* <img src = {userRecipes.pictureurl} /> */}
       <h2> {userRecipes.source} </h2>
       <h2> {userRecipes.instructions} </h2>
       <h2> {userRecipes.categories.course} </h2>
       <h2> {userRecipes.categories.cuisine} </h2>
       <h2> {userRecipes.categories.dietaryconcerns} </h2>
       <h2> {userRecipes.categories.dishtype} </h2>
       <h2> {userRecipes.categories.technique} </h2>
       {
           userRecipes.ingredients.map(ing => {
               return <div>
                   <h2>{ing.ingredientname}</h2>
                   <h2>{ing.quantity}{ing.measurement}</h2>
               </div>;
           })
       }
       

    </div>
		</>
    );
    
};




export default ProfilePageRecipes;