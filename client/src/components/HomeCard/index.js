import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm"
import API from "../../utils/API";
import { FeatureCard } from "../Decorators"
import { Row } from "../Grid";
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
      <Row>
      <div className="display-text">
        <h5 className="search-text">Support your local businesses</h5>
        <SearchForm/>
      </div>
      </Row>
      <Row>
        <div className="featured-container">
        <FeatureCard {...featured.featured} />
        </div>
      </Row>
    </div>
  );
}

export default HomeCard;
