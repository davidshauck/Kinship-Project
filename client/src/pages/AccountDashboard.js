import React, { useState, useEffect } from "react";
import Checkbox from "../components/Checkbox";
import { Input } from "../components/Form"
import API from "../utils/API";
import { FormBtn } from "../components/Form";
import { useAuth0 } from "../react-auth0-spa";

const OPTIONS = ["Dining", "Essentials", "Take-Out", "Delivery", "Retail", "Services"]

export const AccountDashboard = props => {

  const [profile, setProfile] = useState({
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    ),
    listing: {},
    email: "",
    password: "",
    name: "",
    address1: "",
    address2: "",
    city: "",
    usState: "",
    zip: "",
    telephone: "",
    categories: [],
    photo: "",
    website: "",
    description: "",
    facebook: "",
    twitter: "",
    instagram: "",
    disabledStatus: true,
    loggedInUser: "user"
  });

  // componentDidMount() {
  //     API.getListing(loggedInUser.id)
  //     .then(res => this.setState({ 
  //       listing: res.data, 
  //     })).then(console.log(this.state))
  //     .catch(err => console.log(err));
  //     console.log("LOGGED IN USER***", this.state.listing)
  // }

  const handleInputChange = event => {
    console.log(event.target.value);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  };

  const handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  const handleLogin = event => {
    event.preventDefault();

    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        // once user is logged in
        // take them to their profile page
        this.props.history.replace(`/listings`);
      })
      .then(() => window.location.reload(false))
      .catch(err => {
        console.log(err.response.data.message);
      });
  };

  const handleFormSubmit = formSubmitEvent => {
    console.log(this.state)
    formSubmitEvent.preventDefault();


    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        this.state.categories.push(checkbox);
      });
    API.saveListing({
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      address1: this.state.address1,
      address2: this.state.address2,
      city: this.state.city,
      state: this.state.usState,
      zip: this.state.zip,
      image: this.state.image,
      telephone: this.state.telephone,
      website: this.state.website,
      description: this.state.description,
      categories: this.state.categories,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      instagram: this.state.instagram
    }).then(res => {
      if (res.data._id) {
        let disabledStatus = false;
        this.setState({ ...this.state, disabledStatus: disabledStatus })
      }
    })

  };

  const createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  //Obj.keys, then loop over that and push the 'true' to an array

  const createCheckboxes = () => OPTIONS.map(this.createCheckbox);
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="list-overflow-container register-box">
      <h4 style={{ color: "black" }}>Update your business profile</h4>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <form onSubmit={this.handleFormSubmit}>
        <Input
          name="email"
          type="email"
          className="col-6 signup-boxes"
          value={this.state.listing.email}
          onChange={e => handleInputChange(e)}
        />
        <Input
          name="password"
          type="password"
          className="col-5 signup-boxes"
          placeholder="Enter password (required)"
          onChange={e => handleInputChange(e)}
        />
        <Input
          name="name"
          type="text"
          value={this.state.listing.name}
          className="col-11 signup-boxes"
          onChange={e => handleInputChange(e)}
        />
        <Input
          name="address1"
          type="text"
          className="col-11 signup-boxes"
          value={this.state.listing.address1}
          onChange={e => handleInputChange(e)}
        />
        <Input
          name="address2"
          type="text"
          className="col-11 signup-boxes"
          value={this.state.listing.address2}
          onChange={e => handleInputChange(e)}
        />
        <Input
          name="city"
          type="text"
          className="col-5 signup-boxes"
          value={this.state.listing.city}
          onChange={e => handleInputChange(e)}
        />
        <Input
          name="usState"
          type="text"
          className="col-2 signup-boxes"
          value={this.state.listing.state}
          onChange={e => this.handleInputChange(e)}
        />
        <Input
          name="zip"
          type="text"
          className="col-4 signup-boxes"
          value={this.state.listing.zip}
          onChange={e => handleInputChange(e)}
        />
        <Input
          name="telephone"
          type="text"
          className="col-11 signup-boxes"
          value={this.state.listing.telephone}
          onChange={e => handleInputChange(e)}
        />
        <Input
          name="image"
          type="text"
          className="col-11 signup-boxes"
          value={this.state.listing.image}
          onChange={e => handleInputChange(e)}
        />
        <Input
          name="website"
          type="text"
          className="col-11 signup-boxes"
          value={this.state.listing.website}
          onChange={e => handleInputChange(e)}
        />
        <Input
          name="twitter"
          type="text"
          className="col-4 signup-boxes"
          value={this.state.listing.twitter}
          onChange={e => handleInputChange(e)}
        />
        <Input
          name="facebook"
          type="text"
          className="col-3 signup-boxes"
          value={this.state.listing.facebook}
          onChange={e => handleInputChange(e)}
        />
        <Input
          name="instagram"
          type="text"
          className="col-4 signup-boxes"
          value={this.state.listing.instagram}
          onChange={e => handleInputChange(e)}
        />

        <h4 style={{ color: "black" }}>Categories (check all that apply)</h4>
        {this.createCheckboxes()}

        <div className="col-12">
          <h4 style={{ color: "black" }}>Additional details</h4>

          <textarea className="form-control" rows="10" name="description" onChange={e => this.handleInputChange(e)} value={this.state.listing.description} />
          <form className="div-test">

            {/* <Link push to="/login"> */}
            <button type="submit" className="btn btn-secondary save-button">
              Save
                </button>
            {/* <button type="submit" href="/login" className="btn btn-success login-button" disabled={this.state.disabledStatus} onClick={() => this.props.history.push("/login")} >
                    Login
                </button> */}
            {!this.state.disabledStatus ? (
              <div>
                <input
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Email address"
                  className={"form-control login-signup-email-field"}

                  onChange={this.handleChange}
                />
                {/* </div>
              <div className="form-group"> */}

                <input
                  name="password"
                  type="password"
                  id="pwd"
                  placeholder="Password"
                  className={"form-control login-signup-password-field"}
                  onChange={this.handleChange}
                />
                <FormBtn
                  button={"Submit"}
                  onClick={this.handleLogin}
                  className={"btn btn-success login-submit-button"}
                />
              </div>
            ) : (<div></div>)}
          </form>

          {/* </Link> */}
        </div>
      </form>


    </div>
  );
}

export default AccountDashboard;