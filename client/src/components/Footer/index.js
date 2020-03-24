import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
class Footer extends React.Component {

render() {

return (
  <div> 

  <nav className="footer navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-dark bg-dark">
    

    <div className="navbar-buttons">
    <ul className="navbar-nav navbar-center bg-dark">
    {/* <Link to="/">
    <li className="nav-item">
      <div className="nav-link">Shop Groceries</div>
    </li>
    </Link>
    <Link to="/">
      <li className="nav-item">
        <div className="nav-link">Dine In</div>
      </li>
    </Link>
    <Link to="/">
      <li className="nav-item">
        <div className="nav-link">Shop Retail</div>
      </li>
    </Link>
    <Link to="/">
      <li className="nav-item">
        <div className="nav-link">Essential Services</div>
      </li>
    </Link>
    <Link to="/">
      <li className="nav-item">
        <div className="nav-link">Help For Businesses</div>
      </li>
    </Link> */}
    {/* <Link to="/">
    <li className="nav-item">
      <div className="nav-link">Contact</div>
    </li>
    </Link> */}
    </ul>
    Copyright © 2020 Kinship Farm
  </div>
  </nav >  
    </div>
    )
  }
}
export default Footer;



