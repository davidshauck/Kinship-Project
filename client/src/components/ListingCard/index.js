import React from "react";
import Facebook from "../../images/facebook-logo.png";
import Twitter from "../../images/twitter-logo.png";
import Instagram from "../../images/instagram-logo.png";
import "./listingcard.css"

function ListingCard(props) {
  console.log("CARD ", props);
  return (
    <div>
      <div className="results-box">
          <div className="col-4 image">
          <img src={props.image} alt="..." className="img-thumbnail"></img>
          </div>
          <div className="col-7 text">
              <div className="title">{props.name}</div>
              <div className="address">{props.address1}</div>
              {props.address2 ? (<div className="address">{props.address2}</div>) : (<div></div>)}
              <div className="city">{props.city}, {props.state} {props.zip}</div>
              <div className="telephone">{props.telephone}</div> 
              <div className="website">{props.website}</div> 
              <div className="description">{props.description}</div> 
              {props.twitter ? (<div className="twitter" style={{display: "inline-block"}}><a href={props.twitter} target="_blank" rel="noopener noreferrer" ><img src={Twitter} style={{width: "30px", margin: "5px" }} /></a></div>) : (<div></div>)}
              {props.facebook ? (<div className="facebook" style={{display: "inline-block"}} ><a href={props.facebook} target="_blank" rel="noopener noreferrer" ><img src={Facebook} style={{width: "30px", margin: "5px" }} /></a></div>) : (<div></div>)}
              {props.instagram ? (<div className="instagram" style={{display: "inline-block"}}><a href={props.instagram} target="_blank" rel="noopener noreferrer" ><img src={Instagram} style={{width: "30px", margin: "5px" }} /></a></div>) : (<div></div>)}
              </div>
      </div>
      <hr />
    </div>
  );
}

export default ListingCard;
