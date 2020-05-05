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
          <div>{props.telephone}</div>
          <div><a className="text" href={"mailto:"+props.email+"?subject=Info"}>{props.email}</a></div>
          <div className="text"><a href={props.website} target="_blank" rel="noopener noreferrer">{props.website}</a></div>
        </div>
        <div className="col-6 text">
          <div className="listing-title">{props.name}</div>
          {props.TuesdayOpen ? ( <div><div className="text">Hours</div> 
          <div>Mon: {props.MondayOpen==="Closed" || !props.MondayOpen.length ? (<div style={{display: "inline-block"}}>Closed</div>) : (<div style={{display: "inline-block"}}>{props.MondayOpen} to {props.MondayClose}</div>)}</div>
          <div>Tue: {props.TuesdayOpen==="Closed" || !props.TuesdayOpen.length ? (<div style={{display: "inline-block"}}>Closed</div>) : (<div style={{display: "inline-block"}}>{props.TuesdayOpen} to {props.TuesdayClose}</div>)}</div>
          <div>Wed: {props.WednesdayOpen==="Closed" || !props.WednesdayOpen.length ? (<div style={{display: "inline-block"}}>Closed</div>) : (<div style={{display: "inline-block"}}>{props.WednesdayOpen} to {props.WednesdayClose}</div>)}</div>
          <div>Thu: {props.ThursdayOpen==="Closed" || !props.ThursdayOpen.length ? (<div style={{display: "inline-block"}}>Closed</div>) : (<div style={{display: "inline-block"}}>{props.ThursdayOpen} to {props.ThursdayClose}</div>)}</div>
          <div>Fri: {props.FridayOpen==="Closed" || !props.FridayOpen.length ? (<div style={{display: "inline-block"}}>Closed</div>) : (<div style={{display: "inline-block"}}>{props.FridayOpen} to {props.FridayClose}</div>)}</div>
          <div>Sat: {props.SaturdayOpen==="Closed" || !props.SaturdayOpen.length ? (<div style={{display: "inline-block"}}>Closed</div>) : (<div style={{display: "inline-block"}}>{props.SaturdayOpen} to {props.SaturdayClose}</div>)}</div>
          <div>Sun: {props.SundayOpen==="Closed" || !props.SundayOpen.length ? (<div style={{display: "inline-block"}}>Closed</div>) : (<div style={{display: "inline-block"}}>{props.SundayOpen} to {props.SundayClose}</div>)}</div>
          </div>
          ) 
          : (<div></div>)}
          <div className="description">{props.description}</div>
          {props.twitter ? (<div className="twitter" style={{ display: "inline-block" }}><a href={props.twitter} target="_blank" rel="noopener noreferrer"><img alt="twitter" src={Twitter} style={{ width: "30px", margin: "5px" }} /></a></div>) : (<div></div>)}
          {props.facebook ? (<div className="facebook" style={{ display: "inline-block" }} ><a href={props.facebook} target="_blank" rel="noopener noreferrer"><img alt="facebook" src={Facebook} style={{ width: "30px", margin: "5px" }} /></a></div>) : (<div></div>)}
          {props.instagram ? (<div className="instagram" style={{ display: "inline-block" }}><a href={props.instagram} target="_blank" rel="noopener noreferrer"><img alt="instagram" src={Instagram} style={{ width: "30px", margin: "5px" }} /></a></div>) : (<div></div>)}
        </div>
        <div className="col-3 image">
          <Map {...props} />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ListingCard;

