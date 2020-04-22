import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useAuth0 } from "../react-auth0-spa";
import { Redirect } from "react-router-dom"
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';


const toggleCheckbox = label => {
  if (this.selectedCheckboxes.has(label)) {
    this.selectedCheckboxes.delete(label);
  } else {
    this.selectedCheckboxes.add(label);
  }
}

const ListingSchema = Yup.object().shape({
  zip_code: Yup.string().matches(/(^\d{5}$)|(^\d{5}-\d{4}$)/, { message: "That is not a valid zip code" })
    .required('Required'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  address1: Yup.string().matches(/^\s*\S+(?:\s+\S+){2}/, { message: "That does not look like a valid address" }),
  facebook: Yup.string().matches(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
    , { message: "That is not a valid URL" }),
  twitter: Yup.string().matches(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
    , { message: "That is not a valid URL" }),
  instagram: Yup.string().matches(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
    , { message: "That is not a valid URL" })
});

const ListingForm = (props) => {
  const { user } = useAuth0();
  return (
    <div className="container">
      <h4 style={{ color: "black" }}>Create your business profile</h4>
      <Formik
        initialValues={{
          user: user,
          email: user.email,
          name: "",
          address1: "",
          address2: "",
          city: "",
          us_state: "",
          zip_code: "",
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
        }}
        validationSchema={ListingSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
        }}
      >
        {({
          errors,
          touched,
          values,
          handleChange,
          handleSubmit,
        }) => (
            <Form onSubmit={handleSubmit}>
              <Field
                name="name"
                type="text"
                placeholder="Business Name (required)"
                className="col-11 signup-boxes"
              />
              <Field
                name="address1"
                type="text"
                className="col-11 signup-boxes"
                placeholder="Address (required)"
              />
              {errors.address1 ? <p>{errors.address1}</p> : null}
              <Field
                name="address2"
                type="text"
                className="col-11 signup-boxes"
                placeholder="Address"
              />
              <Field
                name="city"
                type="text"
                className="col-5 signup-boxes"
                placeholder="City"
              />
              <Field
                name="us_state"
                type="text"
                className="col-2 signup-boxes"
                placeholder="State"
              />
              <Field
                name="zip_code"
                type="text"
                className="col-4 signup-boxes"
                placeholder="Zip"
              />
              {errors.zip_code ? <p>{errors.zip_code}</p> : null}
              <Field
                name="telephone"
                type="text"
                className="col-11 signup-boxes"
                placeholder="Telephone*"
                onChange={handleChange}
              />
              <Field
                name="image"
                type="text"
                className="col-11 signup-boxes"
                placeholder="Photo (paste in url)"
              />
              <Field
                name="website"
                type="text"
                className="col-11 signup-boxes"
                placeholder="Website"
              />
              <Field
                name="twitter"
                type="text"
                className="col-4 signup-boxes"
                placeholder="Twitter (full URL)"
              />
              <Field
                name="facebook"
                type="text"
                className="col-3 signup-boxes"
                placeholder="Facebook (full URL)"
              />
              <Field
                name="instagram"
                type="text"
                className="col-4 signup-boxes"
                placeholder="Instagram (full URL)"
              />
              <h4 style={{ color: "black" }}>Categories (check all that apply)</h4>
              {values.options.map((item, index) => (
                <>
                  <label className="form-check-label">
                    <Field type="checkbox" name="chosen" value={item} />
                    {item}
                  </label>
                </>
              ))}
              <div className="col-12">
                <h4 style={{ color: "black" }}>Additional details</h4>
                <textarea className="form-control" rows="10" name="description" onChange={handleChange} placeholder="Message to your customers, store hours, etc." />
                <button type="submit" className="btn btn-secondary save-button">
                  Save
                </button>
              </div>
            </Form>
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
<<<<<<< HEAD
    return <ListingForm />
=======
    return (
      <div className="list-overflow-container register-box">
        <h4 style={{ color: "black" }}>Create your business profile</h4>
        <form onSubmit={handleFormSubmit}>
          <Input
            name="name"
            type="text"
            value={listings.name}
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
            value={user.picture ? user.picture : ""}
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


          <h4 style={{ color: "black" }}>Categories (check all that apply)</h4>
          {listings.options.map((item, index) => (
            <Checkbox
              name={item.name}
              label={item.name}
              checked={listings.options[item.name]}
              isSelected={listings.options[item.name]}
              onChange={handleCheckboxChange}
            />
          ))}

          <div className="col-12">
            <h4 style={{ color: "black" }}>Additional details</h4>

            <textarea className="form-control" rows="10" name="description" onChange={e => handleInputChange(e)} placeholder="Message to your customers, store hours, etc." />
            <form className="div-test">

              {/* <Link push to="/login"> */}
              <button type="submit" className="btn btn-secondary save-button">
                Save
                </button>
              {/* <button type="submit" href="/login" className="btn btn-success login-button" disabled={listings.disabledStatus} onClick={() => props.history.push("/login")} >
                    Login
                </button> */}
              {!listings.disabledStatus ? (
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
                </div>
              ) : (<div></div>)}
            </form>
          </div>
        </form>
      </div>
    );
>>>>>>> ae43c85a002a423283c30de6fb75cbc5be430629
  }
}

export default ListingSignup;