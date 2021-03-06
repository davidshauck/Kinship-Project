import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useAuth0 } from "../react-auth0-spa";
import { Redirect } from "react-router-dom"
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import { Row } from "../components/Grid";
import Tags from "../components/Tags"
import "./style.css";

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


const hours = ["Closed", "12:00AM", "12:30AM", "1:00AM", "1:30AM", "2:00AM", "2:30AM", "3:00AM", "3:30AM", "4:00AM", "4:30AM", "5:00AM", "5:30AM", "6:00AM", "6:30AM", "7:00AM", "7:30AM", "8:00AM", "8:30AM", "8:00AM", "9:30AM", "10:00AM", "10:30AM", "11:00AM", "11:30AM",
              "12:00PM", "12:30PM", "1:00PM", "1:30PM", "2:00PM", "2:30PM", "3:00PM", "3:30PM", "4:00PM", "4:30PM", "5:00PM", "5:30PM", "6:00PM", "6:30PM", "7:00PM", "7:30PM", "8:00PM", "8:30PM", "8:00PM", "9:30PM", "10:00PM", "10:30PM", "11:00PM", "11:30PM", "12:00PM",]

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// THIS IS THE FUNCTION TO ITERATE OVER THE DAYS OF WEEK, GOT IT WORKING WITH A CONSOLE LOG BUT NOT WITH THE FORM
// const times = n => f => {
//   let iter = i => {
//     if (i === n) return
//     f (i)
//     iter (i + 1)
//   }
//   return iter (0)
// }

export const ListingForm = (props) => {
  const { user } = useAuth0();
  const [redirect, setRedirect] = useState(false)
  const options = ["Dining", "Essentials", "Take-Out", "Delivery", "Retail", "Services"]
  return (
    <Row>
      <div className="col-2"></div>
      <div className="col-8 profile-box">
      <div className="profile-head">Create your business profile</div>
      <Formik
        initialValues={props.chosen ? props.chosen : {
          user: user.name,
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
          categories: [],
          MondayOpen: "",
          TuesdayOpen: "",
          WednesdayOpen: "",
          ThursdayOpen: "",
          FridayOpen: "",
          SaturdayOpen: "",
          SundayOpen: "",
          MondayClose: "",
          TuesdayClose: "",
          WednesdayClose: "",
          ThursdayClose: "",
          FridayClose: "",
          SaturdayClose: "",
          SundayClose: ""
        }}
        validationSchema={ListingSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Good to go")
          props.handleFormSubmit(values)
        }}
      >
        {({
          errors,
          handleChange,
          handleSubmit,
        }) => (
            <Form onSubmit={handleSubmit}>
              <Field
                name="name"
                type="text"
                placeholder="Business Name*"
                className="col-12 signup-boxes"
              />
              <Field
                name="address1"
                type="text"
                className="col-12 signup-boxes"
                placeholder="Address*"
              />
              {errors.address1 ? <p>{errors.address1}</p> : null}
              <Field
                name="address2"
                type="text"
                className="col-12 signup-boxes"
                placeholder="Address"
              />
              <Field
                name="city"
                type="text"
                className="col-4 signup-boxes"
                placeholder="City*"
              />
              <Field as="select" name="us_state" className="signup-boxes col-2">
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="D.C.">D.C.</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennesee">Tennesee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconson">Wisconson</option>
                <option value="Wyoming">Wyoming</option>
              </Field>
              <Field
                name="zip_code"
                type="text"
                className="col-2 signup-boxes"
                placeholder="Zip*"
              />
              {errors.zip_code ? <p>{errors.zip_code}</p> : null}
              <Field
                name="telephone"
                type="text"
                className="col-3 signup-boxes"
                placeholder="Telephone*"
                onChange={handleChange}
              />
              <div className="days-container">
                {daysOfWeek.map(day => (
                  <div className="days">{day}</div>
                ))}
              </div>

              {/* TRIED TO ITERATE OVER DAYS OF WEEK, WORKED WITH THE CONSOLE LOG BUT NOT WITH THE FORM */}
              {/* {times (daysOfWeek.length) (i => 

                // console.log(daysOfWeek[i])
                <Field as="select" name="hours" className="hours-boxes">
                {hours.map(hour => (
                  <option key={daysOfWeek[i]+"Open"+{hour}}>{hour}</option>
                ))}       
                </Field>                      
              )} */}

              <Field as="select" name="MondayOpen" className="hours-boxes">
                {hours.map(hour => (
                  <option value={hour} key={"MondayOpen" + { hour }}>{hour}</option>
                ))}
              </Field>
              <Field as="select" name="TuesdayOpen" className="hours-boxes">
                {hours.map(hour => (
                  <option value={hour} key={"TuesdayOpen" + { hour }}>{hour}</option>
                ))}
              </Field>
              <Field as="select" name="WednesdayOpen" className="hours-boxes">
                {hours.map(hour => (
                  <option value={hour} key={"WednesdayOpen" + { hour }}>{hour}</option>
                ))}
              </Field>
              <Field as="select" name="ThursdayOpen" className="hours-boxes">
                {hours.map(hour => (
                  <option value={hour} key={"ThursdayOpen" + { hour }}>{hour}</option>
                ))}
              </Field>
              <Field as="select" name="FridayOpen" className="hours-boxes">
                {hours.map(hour => (
                  <option value={hour} key={"FridayOpen" + { hour }}>{hour}</option>
                ))}
              </Field>
              <Field as="select" name="SaturdayOpen" className="hours-boxes">
                {hours.map(hour => (
                  <option value={hour} key={"SaturdayOpen" + { hour }}>{hour}</option>
                ))}
              </Field>
              <Field as="select" name="SundayOpen" className="hours-boxes">
                {hours.map(hour => (
                  <option value={hour} key={"SundayOpen" + { hour }}>{hour}</option>
                ))}
              </Field>
              <div className="days-container">
                <div className="days">To</div>
                <div className="days">To</div>
                <div className="days">To</div>
                <div className="days">To</div>
                <div className="days">To</div>
                <div className="days">To</div>
                <div className="days">To</div>
              </div>
              <Field as="select" disabled={false} name="MondayClose" className="hours-boxes">
                {hours.map(hour => (
                  <option value={hour} key={"MondayClose" + { hour }}>{hour}</option>
                ))}
              </Field>
              <Field as="select" name="TuesdayClose" className="hours-boxes">
                {hours.map(hour => (
                  <option value={hour} key={"TuesdayClose" + { hour }}>{hour}</option>
                ))}
              </Field>
              <Field as="select" name="WednesdayClose" className="hours-boxes">
                {hours.map(hour => (
                  <option value={hour} key={"WednesdayClose" + { hour }}>{hour}</option>
                ))}
              </Field>
              <Field as="select" name="ThursdayClose" className="hours-boxes">
                {hours.map(hour => (
                  <option value={hour} key={"ThursdayClose" + { hour }}>{hour}</option>
                ))}
              </Field>
              <Field as="select" name="FridayClose" className="hours-boxes">
                {hours.map(hour => (
                  <option value={hour} key={"FridayClose" + { hour }}>{hour}</option>
                ))}
              </Field>
              <Field as="select" name="SaturdayClose" className="hours-boxes">
                {hours.map(hour => (
                  <option value={hour} key={"SaturdayClose" + { hour }}>{hour}</option>
                ))}
              </Field>
              <Field as="select" name="SundayClose" className="hours-boxes">
                {hours.map(hour => (
                  <option value={hour} key={"SundayClose" + { hour }}>{hour}</option>
                ))}
              </Field>
              <Field
                name="image"
                type="text"
                className="image-box"
                placeholder="Logo or image (paste in url)"
              />
              <Field
                name="website"
                type="text"
                className="website-box"
                placeholder="Website"
              />
              <Field
                name="twitter"
                type="text"
                className="social-boxes"
                placeholder="http://twitter.com/your-twitter"
              />
              <Field
                name="facebook"
                type="text"
                className="social-boxes"
                placeholder="http://facebook.com/your-facebook"
              />
              <Field
                name="instagram"
                type="text"
                className="social-boxes"
                placeholder="http://instagram.com/your-instagram"
              />
              <div className="col-12">
                <h4>Categories (check all that apply)</h4>
                {options.map((item, index) => (
                  <>
                    <label key={index} className="form-check-label checkbox">
                      <Field
                        type="checkbox" name="categories" value={item} />
                      {item}
                    </label>
                  </>
                ))}
              </div>
              <h4 style={{ color: "black" }}>Additional details</h4>
              {errors ? <p>{JSON.stringify(errors.zip_code)}</p> : null}
              <textarea className="form-control" rows="10" name="description" onChange={handleChange} placeholder="Message to your customers, store hours, etc." />
              <Tags />
              
              <button className="btn btn-secondary save-button">
                {props.button_text ? props.button_text : "Save"}
              </button>              
            </Form>
          )}
      </Formik>
    </div>
    <div className="col-2"></div>
    </Row>
    
  )
}

const ListingSignup = props => {
  const { isAuthenticated } = useAuth0();
  const [creating, setCreating] = useState({ is_submitted: false })

  const handleNewListing = (listing) => {
    API.saveListing(listing).then(() => {
      setCreating({ is_submitted: true })
    })
  }

  if (!isAuthenticated) {
    return <Redirect to="login" />
  }

  if (!creating.is_submitted) {
    return <ListingForm button_text="Save" handleFormSubmit={handleNewListing} />
  } else {
    return <Redirect to="listings" />
  }

}

export default ListingSignup;