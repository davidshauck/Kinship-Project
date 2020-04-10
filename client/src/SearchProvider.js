// src/providers/SearchProvider.js
import React, { Component } from 'react'
import API from "./utils/API";
import {withRouter} from "react-router-dom";

// Set Up The Initial Context
const SearchContext = React.createContext()
// Create an exportable consumer that can be injected into components
export const SearchConsumer = SearchContext.Consumer
// Create the provider using a traditional React.Component class

class SearchProvider extends Component {
  constructor (props) {
    super(props)
  }

    state = {
        userName: "",
        search: "",
        categories: ["Dining", "Essentials", "Take-Out", "Delivery", "Retail", "Services"],
        listings: [],
        error: true,
        button: "Submit",
        className: "btn btn-success search-button",
        handleInputChange: (event) => {
        this.setState({ ...this.state, search: event.target.value });
        },

        handleFormSubmit: (event) => {
        event.preventDefault();
        // history.push("/students");
        console.log("SEARCH", this.state.search)
        API.getListings(this.state.search)
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            console.log("RESDATA", res.data)
            this.setState({ ...this.state, listings: res.data, error: false, search: "" }, () =>{
              this.props.history.push("/listings")
            });
          })

            .catch(err => this.setState({ ...this.state, error: err.message }));
        }, 
        loadListings: () => {
          API.getListings()
            .then(res =>{
              console.log("RES22222", res)
              this.setState({ ...this.state, listings: res.data })
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
            console.log("RESDATA", res.data)
            this.setState({ ...this.state, listings: res.data, error: false });      
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