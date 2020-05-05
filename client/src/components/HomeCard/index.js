import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm"
import API from "../../utils/API";
import { FeatureCard1, FeatureCard2, FeatureCard3 } from "../Decorators"
import { Col, Row, Container } from "../Grid";
import "./homecard.css";

const HomeCard = () => {

  const [featured1, setFeatured1] = useState({});

  useEffect(() => {
    API.getRandom().then(featured1 => {
      return setFeatured1({ featured1: featured1.data.result })
    })
  }, []);

  const [featured2, setFeatured2] = useState({});

  useEffect(() => {
    API.getRandom().then(featured2 => {
      return setFeatured2({ featured2: featured2.data.result })
    })
  }, []);
  
  const [featured3, setFeatured3] = useState({});

  useEffect(() => {
    API.getRandom().then(featured3 => {
      return setFeatured3({ featured3: featured3.data.result })
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
        <FeatureCard1 {...featured1.featured1} />
        {/* <FeatureCard2 {...featured2.featured2} />
        <FeatureCard3 {...featured3.featured3} /> */}
        </div>
      </Row>
    </div>
  );
}

export default HomeCard;
