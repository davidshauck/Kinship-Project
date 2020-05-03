import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm"
import TownHall from "../../images/hamilton-background3.jpg"
import API from "../../utils/API";
import { FeatureCard } from "../Decorators"
import "./homecard.css";

const HomeCard = () => {

  const [featured, setFeatured] = useState({});

  useEffect(() => {
    API.getRandom().then(featured => {
      return setFeatured({ featured: featured.data.result })
    })
  }, []);

  return (
    <div>
      <div className="fill"><img alt="..." src={TownHall} /></div>
      <div className="display-text">
        <h5 className="search-text">Support your local businesses</h5>
        <SearchForm/>
        <div className="search-text">Own a business? <a href="/new-listing/">Add your listing</a></div>
      </div>
      <div className="below-image">
        <h1 className="lower-title">Virtual Hamilton-Wenham</h1>
        <p className="lower-subhead">Virtual Hamilton-Wenham is a non-profit branch of Kinship Farm dedicated to supporting the ability of local businesses to survive and thrive. This is a centralized portal, not unlike our beautiful downtown, allowing people to browse, shop, and enjoy what Hamilton-Wenham has to offer!</p>
        <h1>Featured Business:</h1>
        <FeatureCard {...featured.featured} />
      </div>
    </div>
  );
}

export default HomeCard;
