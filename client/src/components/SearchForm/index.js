import React from "react";
import { FormBtn } from "../Form";
import { SearchConsumer } from '../../SearchProvider'
import {withRouter} from 'react-router';
import "./searchForm.css";

function SearchForm() { 
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
            <select
            value={context.state.search}
            onChange={context.state.handleInputChange}
            name="category"
            list="categories"
            type="text"
            className={"dropdown"}
            placeholder="Find businesses"
            id="category"
          >
            <option selected>Find businesses</option>
            {context.state.categories.map(category => (
              <option key={category}>{category}</option>
            ))}) : );
          </select>
          <FormBtn 
            button={context.state.button}
            className="btn btn-success search-button"
            value={context.state.search}
            onClick={context.state.handleSearch}
          />
          </React.Fragment>
          )}
        </SearchConsumer>
      </div>
    </form>
  );
}

export const SearchText = (props) => { 
  return <input className={"dropdown"} type="text" value={props.value} onChange={props.onChange}/>
}

export const SearchResult = (props) => {
  return <li className="result">{props.name} | {props.city}, {props.us_state}</li>
}

export default withRouter(SearchForm);
