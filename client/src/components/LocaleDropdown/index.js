import React from "react";
// import { FormBtn } from "../Form";
import { SearchConsumer } from '../../SearchProvider'
// import {withRouter} from 'react-router';
import "./localeDropdown.css";

function LocaleDropdown() { 
  
  return (
    <form className="search">
      <div className="form-group input-field">
        <SearchConsumer>
          {context => (
          <React.Fragment>
          <select
            value={context.state.listings.us_state}
            onChange={context.state.handleUSStateChange}
            name="us_state"
            list="us_states"
            type="text"
            className={"dropdown"}
            placeholder="Your state"
            id="us_state"
          >
            <option disabled selected>Your state</option>
            {context.state.listings.length} ? 
            {context.state.statesDropdown.map(us_statelisting => (
              <option key={us_statelisting}>{us_statelisting}</option>
            ))}) : );
          </select>
          <select 
            value={context.state.listings.city}
            onChange={context.state.handleCityChange}
            name="city"
            list="cities"
            type="text"
            className={"dropdown city-dropdown"}
            placeholder="Your town"
            id="city"
            disabled={context.state.cityDisabled}
          >
            {console.log("STATES-LOWER ", context.state.listings)}
            <option disabled selected>Your town</option>
            {context.state.listings.length} ?
            {context.state.citiesDropdown.map(city_listing => (
              <option key={city_listing}>{city_listing}</option>
            ))}) : );
            </select>
          </React.Fragment>
          )}
        </SearchConsumer>
      </div>
    </form>
  );
}

export default LocaleDropdown;
