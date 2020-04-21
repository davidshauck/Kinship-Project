import React, { useState, useEffect } from "react";
import Checkbox from "../components/Checkbox";
import { Input } from "../components/Form"
import API from "../utils/API";
import { useAuth0 } from "../react-auth0-spa";
import { Redirect } from "react-router-dom"
import { Formik } from "formik";

const ListingForm = (props) => {
  const form = {
    user: props.user,
    email: props.email, name: "", address1: "",
    address2: "",
    city: "",
    us_state: "",
    zip: "",
    image: "",
    telephone: "",
    website: "",
    description: "",
    categories: "",
    twitter: "",
    facebook: "",
    instagram: "",
    options: ["Dining", "Essentials", "Take-Out", "Delivery", "Retail", "Services"],
    chosen: []
  }

  const toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  const createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={form.chosen[option]}
      onCheckboxChange={toggleCheckbox}
      key={option}
    />
  );

  return (
    <div>
      <h4 style={{ color: "black" }}>Create your business profile</h4>
      <Formik
        initialValues={form}
        validate={values => {
          const errors = {};
          if (/^\d+$/.test(values.email) === false) {
            errors.zip = "That is not a valid Zip code"
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          Object.keys(values.options)
            .filter(checkbox => values.checkboxes[checkbox])
            .forEach(checkbox => {
              values.categories.push(checkbox);
            });
          API.saveListing({
          }).then(res => {
            alert("Good to go!")
          })
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
        }) => (
            <form onSubmit={handleSubmit}>
              <Input
                name="name"
                type="text"
                placeholder="Business Name (required)"
                value={values.name}
                className="col-11 signup-boxes"
                onChange={handleChange}
              />
              <Input
                name="address1"
                type="text"
                value={values.address1}
                className="col-11 signup-boxes"
                placeholder="Address (required)"
                onChange={handleChange}
              />
              <Input
                name="address2"
                type="text"
                value={values.address2}
                className="col-11 signup-boxes"
                placeholder="Address"
                onChange={handleChange}
              />
              <Input
                name="city"
                type="text"
                value={values.city}
                className="col-5 signup-boxes"
                placeholder="City"
                onChange={handleChange}
              />
              <Input
                name="us_state"
                type="text"
                value={values.us_state}
                className="col-2 signup-boxes"
                placeholder="State"
                onChange={handleChange}
              />
              <Input
                name="zip"
                type="text"
                value={values.zip}
                className="col-4 signup-boxes"
                placeholder="Zip*"
                onChange={handleChange}
              />
              <p>{errors.zip && touched.zip && errors.zip}</p>
              <Input
                name="telephone"
                type="text"
                value={values.telephone}
                className="col-11 signup-boxes"
                placeholder="Telephone*"
                onChange={handleChange}
              />
              <Input
                name="image"
                type="text"
                className="col-11 signup-boxes"
                value={values.user ? values.user.user.picture : ""}
                placeholder="Photo (paste in url)"
                onChange={handleChange}
              />
              <Input
                name="website"
                type="text"
                value={values.website}
                className="col-11 signup-boxes"
                placeholder="Website"
                onChange={handleChange}
              />
              <Input
                name="twitter"
                type="text"
                value={values.twitter}
                className="col-4 signup-boxes"
                placeholder="Twitter (full URL)"
                onChange={handleChange}
              />
              <Input
                name="facebook"
                type="text"
                value={values.facebook}
                className="col-3 signup-boxes"
                placeholder="Facebook (full URL)"
                onChange={handleChange}
              />
              <Input
                name="instagram"
                type="text"
                value={values.instagram}
                className="col-4 signup-boxes"
                placeholder="Instagram (full URL)"
                onChange={handleChange}
              />
              <h4 style={{ color: "black" }}>Categories (check all that apply)</h4>
              {/* {values.options.map(listing => <p>{listing}</p>)} */}
              {createCheckbox(values.options)}
              <div className="col-12">
                <h4 style={{ color: "black" }}>Additional details</h4>
                <textarea className="form-control" rows="10" name="description" onChange={handleChange} placeholder="Message to your customers, store hours, etc." />
                <button type="submit" className="btn btn-secondary save-button">
                  Save
                </button>
              </div>
            </form>
          )}
      </Formik>
    </div>
  );
}

const ListingSignup = props => {
  const { isAuthenticated, user } = useAuth0();

  if (!isAuthenticated) {
    return <Redirect to="login" />
  } else {
    return <ListingForm {...user} />
  }
}

export default ListingSignup;