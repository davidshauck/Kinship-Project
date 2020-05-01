import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { FeatureCard } from "../components/Decorators";
import { ListingForm } from "../pages/ListingSignup";
import API from "../utils/API";

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

  const toggleEdit = (id) => {
    const chosen = !profile.is_editing ? profile.listings.filter(listing => listing._id === id)[0] : ""
    console.log(chosen)
    setProfile({ ...profile, is_editing: !profile.is_editing, chosen: chosen })
  }

  return (
    <div className="container footer-spacer">
      <h1>Hey there from the dashboard</h1>
      {profile.is_editing ? <ListingForm {...profile} /> :
        profile.listings ? profile.listings.map((listing, index) => {
          return <FeatureCard {...listing} onClick={() => toggleEdit(listing._id)} key={index} />
        }) : <h3>No listings yet!</h3>
      }
    </div>
  );
}
