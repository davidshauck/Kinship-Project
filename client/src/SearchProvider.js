// src/providers/SearchProvider.js
import React, { Component } from 'react'
import API from "./utils/API";
import {withRouter} from "react-router-dom";
import "./style.css";

// Set Up The Initial Context
const SearchContext = React.createContext()
// Create an exportable consumer that can be injected into components
export const SearchConsumer = SearchContext.Consumer
// Create the provider using a traditional React.Component class

class SearchProvider extends Component {

    state = {
        userName: "",
        search: "",
        categories: ["Dining", "Essentials", "Take-Out", "Delivery", "Retail", "Services"],
        listings: [],
        statesDropdown: [],
        selectedState: "",
        citiesDropdown: [],
        selectedCity: "",
        cityDisabled: true,
        error: true,
        button: "Go",
        handleInputChange: (event) => {
          this.setState({ ...this.state, search: event.target.value });
        },
        handleUSStateChange: (event) => {
          console.log("US STATE CHANGE ", event.target.value)
          this.setState({ ...this.state, selectedState: event.target.value, cityDisabled: false })
          API.getCities(event.target.value)
          .then(res =>{
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            console.log("CITIES", res.data)
            const citiesDropdown = [...new Set(res.data.map(y => y.city))];
            this.setState({ ...this.state, citiesDropdown: citiesDropdown })
            console.log("CITIES DROPDOWN ", this.state.citiesDropdown)
          })
          .catch(err => console.log(err));
        },
        handleCityChange: (event) => {
          console.log("CITY CHANGE", event.target.value)
          this.setState({ ...this.state, selectedCity: event.target.value })
        },
        handleSearch: (event) => {
        event.preventDefault();
        // history.push("/students");
        console.log("SEARCH", this.state.search)
        // THIS COULD PROBABLY BE REWRITTEN AS A SWITCH-CASE
        let searchCriteria;
        if ((!this.state.search.length) && (!this.state.selectedCity.length) && (!this.state.selectedState.length)) {
          searchCriteria = "";
        }
        else if ((this.state.search.length) && (!this.state.selectedCity.length) && (!this.state.selectedState.length)) {
          searchCriteria = {
            categories: this.state.search
          }
        }
        else if ((!this.state.search.length) && (this.state.selectedCity.length) && (!this.state.selectedState.length)) {
          searchCriteria = {
            city: this.state.selectedCity
          }
        }
        else if ((!this.state.search.length) && (!this.state.selectedCity.length) && (this.state.selectedState.length)) {
          searchCriteria = {
            us_state: this.state.selectedState
          }
        }
        else if ((this.state.search.length) && (this.state.selectedCity.length) && (!this.state.selectedState.length)) {
          searchCriteria = {
            categories: this.state.search,
            city: this.state.selectedCity
          }
        }
        else if ((!this.state.search.length) && (this.state.selectedCity.length) && (this.state.selectedState.length)) {
          searchCriteria = {
            city: this.state.selectedCity,
            us_state: this.state.selectedState
          }
        }
        else if ((this.state.search.length) && (!this.state.selectedCity.length) && (this.state.selectedState.length)) {
          searchCriteria = {
            categories: this.state.search,
            us_state: this.state.selectedState
          }
        }
        else
          {
          searchCriteria = {
            categories: this.state.search,
            city: this.state.selectedCity,
            us_state: this.state.selectedState
          }
          console.log("SEARCH CRITERIA ", searchCriteria)
        }
        API.getListings(searchCriteria)
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            console.log("RESDATAUP", res.data)
            this.setState({ ...this.state, listings: res.data, error: false, search: "" }, () =>{
              this.props.history.push("/listings")
            });
          })

            .catch(err => this.setState({ ...this.state, error: err.message }));
        }, 
        loadListings: () => {
          API.getListings()
            .then(res =>{
              console.log("RES22222", res.data)
              this.setState({ ...this.state, listings: res.data })
            })
            .catch(err => console.log(err));
        },
        loadCities: (data) => {
          console.log("CLICK ", data)
          API.getCities(data)
            .then(res =>{
              if (res.data.status === "error") {
                throw new Error(res.data.message);
              }
              console.log("CITIES", res.data)
              const citiesDropdown = [...new Set(res.data.map(y => y.city))];
              this.setState({ ...this.state, citiesDropdown: citiesDropdown })
              console.log("CITIES DROPDOWN ", this.state.citiesDropdown)
            })
            .catch(err => console.log(err));
        },
        handleLogin: event => {
          event.preventDefault();
      
          this.Auth.login(this.state.email, this.state.password)
            .then(res => {
              // once user is logged in
              // take them to their profile page
              this.props.history.replace(`/`);
            })
            .then(() => window.location.reload(false))
            .catch(err => {
              console.log(err.response.data.message);
            });
        }
      };

      componentDidMount() {
        API.getListings(this.state.search)
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            console.log("RESDATA", res.data);
            const statesDropdown = [...new Set(res.data.map(x => x.us_state))];
            console.log("STATES DROPDOWN", statesDropdown)
            this.setState({ ...this.state, statesDropdown: statesDropdown, citiesDropdown: [], listings: res.data, error: false });      
            })
          .catch(err => this.setState({ ...this.state, error: err.message }));
      };

  render () {
    return (
      // value prop is where we define what values 
      // that are accessible to consumer components
       <SearchContext.Provider value={{state: this.state}}>
        {this.props.children}
      </SearchContext.Provider>
    )
  }
}

export default withRouter(SearchProvider);