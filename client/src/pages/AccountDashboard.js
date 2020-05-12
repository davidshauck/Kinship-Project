import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { FeatureCard } from "../components/Decorators";
import { ListingForm } from "../pages/ListingSignup";
import API from "../utils/API";
import { Redirect } from "react-router-dom";

export const AccountDashboard = props => {
  const { user } = useAuth0();
  const [profile, setProfile] = useState({
    user: user,
    is_editing: false
  })

  useEffect(() => {
    API.getListingByUser(user).then(userListings => {
      return setProfile({ user: user, listings: userListings.data.listings })
    })
  }, []);


  const handleUpdate = async (listing) =>{
    console.log("Good to go with listing!")
    const updated_listing = await API.updateListing(listing)
    const new_user_data =  await  API.getListingByUser(user)
    setProfile({ ...user, ...profile, listings:new_user_data.data.listings, is_editing: !profile.is_editing})
  }

  const toggleEdit = (id) => {
    console.log("Hello")
    const chosen = !profile.is_editing ? profile.listings.filter(listing => listing._id === id)[0] : ""
    console.log(chosen)
    setProfile({ ...profile, is_editing: !profile.is_editing, chosen: !profile.is_editing ? chosen : "" })
  }

  return (
    <div className="container spacer">
      <h1>{profile.is_editing ? `Editing ${profile.chosen.name}`: `${user.name}'s Dashboard`}</h1>
      {profile.is_editing ? <ListingForm {...profile} button_text="Update" handleFormSubmit={handleUpdate}/> :
        profile.listings ? profile.listings.map((listing, index) => {
          return <FeatureCard {...listing} onClick={() => toggleEdit(listing._id)} key={index} />
        }) : <h3>No listings yet!</h3>
      }
    </div>
  );
}
