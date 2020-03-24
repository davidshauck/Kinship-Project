import React, { Component } from "react";
import { Input } from "../components/Form"
import API from "../utils/API";

class Contact extends Component {

  state = {
    name: "",
    email: "",
    message: "",
    disabledStatus: true
  }

  handleInputChange = event => {
    console.log(event.target.value);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    
  };

  handleFormSubmit = formSubmitEvent => {
      console.log(this.state)
    formSubmitEvent.preventDefault();

      API.saveTutor({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      }).then(res => {
        if (res.data._id) {
          let disabledStatus = false;
          this.setState({ ...this.state, disabledStatus: disabledStatus })
        }
      })
      
  };

  render() {
    return (
      <div className="list-overflow-container register-box">
      <h2>Contact Dave</h2>
      <form onSubmit={this.handleFormSubmit}>
        <Input 
            name="name" 
            type="text"
            placeholder="Full Name" 
            className="col-6 signup-boxes"
            onChange={e => this.handleInputChange(e)}
        />
        <Input 
            name="email" 
            type="email" 
            className="col-6 signup-boxes"
            placeholder="Email (required)" 
            onChange={e => this.handleInputChange(e)}
        />


        <div className="col-12">
        <textarea className="form-control" rows="10" name="message" onChange={e => this.handleInputChange(e)} placeholder="Message here" />
        </div>
          <button type="submit" className="btn save-button">
            Submit
          </button>
          { !this.state.disabledStatus ? (
            <div>Thank you, Dave will get back to you as soon as possible!</div> ) : ( <div></div>)}
        </form>
      </div>
    );
  }
}

export default Contact;