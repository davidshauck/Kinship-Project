import React from "react";
import Facebook from "../../images/facebook-logo.png";
import Twitter from "../../images/twitter-logo.png";
import Instagram from "../../images/instagram-logo.png";
import "./listingcard.css"
import { Map } from "../Map/index";
// import useScript from '../useScript';

function ListingCard(props) {
  console.log("CARD ", props);
  return (
    <div>
      <div className="results-box">
        <div className="col-2 image text">
          <img src={props.image} alt="..." className="img-thumbnail"></img>
          <div className="text">{props.address1}</div>
          {props.address2 ? (<div className="address">{props.address2}</div>) : (<div></div>)}
          <div className="text">{props.city}, {props.us_state} {props.zip_code} </div>
          <p>{props.telephone}</p>
          <div className="text"><a href={props.website} target="_blank" rel="noopener noreferrer">{props.website}</a></div>
        </div>
        <div className="col-6 text">
          <div className="listing-title">{props.name}</div>
          <div className="description">{props.description}</div>
          {props.twitter ? (<div className="twitter" style={{ display: "inline-block" }}><a href={props.twitter} target="_blank" rel="noopener noreferrer"><img alt="twitter" src={Twitter} style={{ width: "30px", margin: "5px" }} /></a></div>) : (<div></div>)}
          {props.facebook ? (<div className="facebook" style={{ display: "inline-block" }} ><a href={props.facebook} target="_blank" rel="noopener noreferrer"><img alt="facebook" src={Facebook} style={{ width: "30px", margin: "5px" }} /></a></div>) : (<div></div>)}
          {props.instagram ? (<div className="instagram" style={{ display: "inline-block" }}><a href={props.instagram} target="_blank" rel="noopener noreferrer"><img alt="instagram" src={Instagram} style={{ width: "30px", margin: "5px" }} /></a></div>) : (<div></div>)}
        </div>
        <div className="col-3 image">
          {console.log("ADDRESS ", props.address1)}
          <Map {...props} />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ListingCard;

