import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { FeatureCard } from "../components/Decorators";

import API from "../utils/API";

export const AccountDashboard = props => {
  const { user } = useAuth0();
  const [profile, setProfile] = useState({
    user: user
  })

  useEffect(() => {
    API.getListingByUser(user).then(userListings => {
      return setProfile({ user: user, listings: userListings.data.listings })
    })
  }, []);

  return (
    <div className="container footer-spacer">
      <h1>Hey there from the dashboard</h1>
      {profile.listings ? profile.listings.map(listing => {
        return <FeatureCard {...listing} />
      }) : <h3>No listings yet!</h3>}
    </div>
  );
}
