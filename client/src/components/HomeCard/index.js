import React, { Component } from "react";
import SearchForm from "../../components/SearchForm"
import TownHall from "../../images/hamilton-background3.jpg"
import "./homecard.css";

class HomeCard extends Component {

  render() {
    return (
      <div>
        <div className="fill"><img alt="..." src={TownHall}/></div>
        <div className="display-text">
              <h5 className="search-text">Support local businesses</h5>
              <SearchForm />
            </div>
        <div className="below-image">
          <h1 className="lower-title">Virtual Hamilton-Wenham</h1>
          <p className="lower-subhead">Virtual Hamilton-Wenham is a non-profit branch of Kinship Farm dedicated to supporting the ability of local businesses to survive and thrive. This is a centralized portal, not unlike our beautiful downtown, allowing people to browse, shop, and enjoy what Hamilton-Wenham has to offer!</p>
        </div>
      </div>
    );
  }
}

export default HomeCard;
