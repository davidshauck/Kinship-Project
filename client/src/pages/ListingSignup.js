import React, { useState, useEffect } from "react";
import Checkbox from "../components/Checkbox";
import { Input } from "../components/Form"
import API from "../utils/API";
import { FormBtn } from "../components/Form";

const OPTIONS = [ "Dining","Essentials", "Take-Out", "Delivery", "Retail", "Services" ]


const  ListingSignup = props => {

  const [listings, setListings] = useState({
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    ),  
        options_hooks: OPTIONS,
        email: "",
        password: "",
        name: "",
        address1: "",
        address2: "",
        city: "",
        usState: "",
        zip: "",
        telephone: "",
        categories: ["On"],
        photo: "",
        website: "",
        description: "",
        facebook: "",
        twitter: "",
        instagram: "",
        disabledStatus: true     
    });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setListings({
      [name]: value
    });
  };

 const  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    setListings(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  const handleLogin = event => {
    event.preventDefault();
    this.Auth.login(listings.email, listings.password)
      .then(res => {
        // once user is logged in
        // take them to their profile page
        this.props.history.replace(`/listing`);
      })
      .then(() => window.location.reload(false))
      .catch(err => {
        console.log(err.response.data.message);
      });
  };

  const handleFormSubmit = formSubmitEvent => {
      console.log(listings)
    formSubmitEvent.preventDefault();


    Object.keys(listings.checkboxes)
      .filter(checkbox => listings.checkboxes[checkbox])
      .forEach(checkbox => {
        listings.categories.push(checkbox);
      });
      API.saveListing({
        email: listings.email,
        password: listings.password,
        name: listings.name,
        address1: listings.address1,
        address2: listings.address2,
        city: listings.city,
        state: listings.usState,
        zip: listings.zip,
        image: listings.image,
        telephone: listings.telephone,
        website: listings.website,
        description: listings.description,
        categories: listings.categories,
        twitter: listings.twitter,
        facebook: listings.facebook,
        instagram: listings.instagram
      }).then(res => {
        if (res.data._id) {
          let disabledStatus = false;
          setListings({ ...listings, disabledStatus: disabledStatus })
        }
      })
      
  };

  const createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={listings.checkboxes[option]}
      onCheckboxChange={handleCheckboxChange}
      key={option}
    />
  );

  //Obj.keys, then loop over that and push the 'true' to an array

  // const createCheckboxes = () => OPTIONS.map(listings.checkboxes);
    const {options_hooks} = listings
    return (

      <div className="list-overflow-container register-box">
      <h4 style={{color: "black"}}>Create your business profile</h4>
      <form onSubmit={handleFormSubmit}>
        <Input 
            name="email" 
            type="email" 
            className="col-6 signup-boxes"
            placeholder="Email (required)" 
            onChange={e => handleInputChange(e)}
        />
        <Input 
            name="password" 
            type="password" 
            className="col-5 signup-boxes"
            placeholder="Password (required)" 
            onChange={e => handleInputChange(e)}
        />
        <Input 
            name="name" 
            type="text"
            placeholder="Business Name (required)" 
            className="col-11 signup-boxes"
            onChange={e => handleInputChange(e)}
        />
        <Input 
            name="address1" 
            type="text"
            className="col-11 signup-boxes"
            placeholder="Address (required)" 
            onChange={e => handleInputChange(e)}
        />
        <Input 
            name="address2" 
            type="text"
            className="col-11 signup-boxes"
            placeholder="Address" 
            onChange={e => handleInputChange(e)}
        />
        <Input 
            name="city" 
            type="text"
            className="col-5 signup-boxes"
            placeholder="City" 
            onChange={e => handleInputChange(e)}
        />
        <Input 
            name="usState" 
            type="text"
            className="col-2 signup-boxes"
            placeholder="State" 
            onChange={e => handleInputChange(e)}
        />
        <Input 
            name="zip" 
            type="text"
            className="col-4 signup-boxes"
            placeholder="Zip*" 
            onChange={e => handleInputChange(e)}
        />
        <Input 
            name="telephone" 
            type="text"
            className="col-11 signup-boxes"
            placeholder="Telephone*" 
            onChange={e => handleInputChange(e)}
        />
        <Input 
            name="image" 
            type="text" 
            className="col-11 signup-boxes"
            placeholder="Photo (paste in url)" 
            onChange={e => handleInputChange(e)}
        />
        <Input 
            name="website" 
            type="text" 
            className="col-11 signup-boxes"
            placeholder="Website" 
            onChange={e => handleInputChange(e)}
        />
        <Input 
            name="twitter" 
            type="text"
            className="col-4 signup-boxes"
            placeholder="Twitter (full URL)" 
            onChange={e => handleInputChange(e)}
        />
        <Input 
            name="facebook" 
            type="text"
            className="col-3 signup-boxes"
            placeholder="Facebook (full URL)" 
            onChange={e => handleInputChange(e)}
        />
        <Input 
            name="instagram" 
            type="text"
            className="col-4 signup-boxes"
            placeholder="Instagram (full URL)" 
            onChange={e => handleInputChange(e)}
        />


        <h4 style={{color: "black"}}>Categories (check all that apply)</h4>
              {/* {listings.options_hooks.map(listing =>{
                createCheckbox(listing)
              })} */}

              <div className="col-12">
              <h4 style={{color: "black"}}>Additional details</h4>

            <textarea className="form-control" rows="10" name="description" onChange={e => handleInputChange(e)} placeholder="Message to your customers, store hours, etc." />
            <form className="div-test">

              {/* <Link push to="/login"> */}
                <button type="submit" className="btn btn-secondary save-button">
                    Save
                </button>
                {/* <button type="submit" href="/login" className="btn btn-success login-button" disabled={listings.disabledStatus} onClick={() => props.history.push("/login")} >
                    Login
                </button> */}
                { !listings.disabledStatus ? (
              <div>
              <input 
                name="email" 
                type="email" 
                id="email"
                placeholder="Email address" 
                className={"form-control login-signup-email-field"}

                onChange={handleInputChange}
              />
              {/* </div>
              <div className="form-group"> */}

              <input 
                name="password" 
                type="password" 
                id="pwd"
                placeholder="Password" 
                className={"form-control login-signup-password-field"}
                onChange={handleInputChange}
              />
              <FormBtn 
                button={"Submit"}
                onClick={handleLogin}
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

export default ListingSignup;