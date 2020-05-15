import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm"
import {SearchText, SearchResult} from "../../components/SearchForm"
import API from "../../utils/API";

import { FeatureCard } from "../Decorators"
import { Row } from "../Grid";
import "./homecard.css";

const HomeCard = () => {

  const [featured, setFeatured] = useState({
    search: ""
  });

  useEffect(() => {
    API.getListings().then(featured => {
      const {data} = featured
      const featured_business = data[Math.floor(Math.random() * data.length)]
      console.log(data)
      return setFeatured({ featured: featured_business, all: data })
    })
  }, []);

  const handleSearch = (e) =>{
    const {value} = e.target
    setFeatured({...featured, search: value, found: value.length > 0 ? featured.all.filter(biz => biz.name.startsWith(value)) : false });
  }



  return (
    <div>
      <Row>
      <div className="display-text">
        <h3 className="search-text">Support your local businesses</h3>
        <h4>Search By Location</h4>
        <SearchForm/>
        <h4>Find Your Favorite</h4>
        <SearchText onChange={handleSearch} />
        {featured.found ? featured.found.map((biz) => <SearchResult {...biz}/>) : null}
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
