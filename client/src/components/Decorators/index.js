import React from "react";
import { Link } from "react-router-dom";
import HamiltonSeal from "../../images/hamilton-seal.png"
import WenhamSeal from "../../images/wenham-seal.png"
import { useAuth0 } from "../../react-auth0-spa";
import SearchForm from "../SearchForm"
import "./navbar.css";

export const FeatureCard = (props) => (
  <div className="card">
    <div className="card-body">
      <img src={props.image} alt="..." className="img-thumbnail" />
      <h5 className="card-title">{props.name}</h5>
      <div className="card-text">{props.address1} {props.city}, {props.us_state}</div>
      <div className="card-text">{props.phone}</div>
      <div>{props.telephone}</div>
      {props.categories ? props.categories.map(cateogry => <span>{cateogry} </span>) : ""}
    </div>
  </div>
)

export const Links = props => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  if (isAuthenticated && user) {
    return (
      <div className="navbar-buttons">
        <Link to="/" style={{ textDecoration: 'none', color: "white" }}>
          Local Lifeline
        </Link>
        <ul className="navbar-nav navbar-center">
          <Link push to="/new-listing">
            <li className="nav-item">
              <div className="nav-link">Add your listing</div>
            </li>
          </Link>
          <li className="nav-item">
            <a className="nav-link" href="mailto:admin@kinshipfarm.org?subject=Inquiry">Contact</a>
          </li>
          <li>
            <a className="footer-text" href="mailto:info@brixyfy.com?subject=Report a bug">Report a bug</a>
          </li>
          <Link to="/dashboard">
            <li className="nav-item">
              <div className="nav-link">My listing</div>
            </li>
          </Link>
          <Link push to="/">
            <li className="nav-item">
              <div className="nav-link" href="/" onClick={() => logout()}>Logout</div>
            </li>
          </Link>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="navbar-buttons">
        <div className="lifeline-text">
          <Link to="/" style={{ textDecoration: 'none' }}>
            Local Lifeline
          </Link>
        </div>
        <ul className="navbar-nav navbar-center">
          <Link push to="/new-listing">
            <li className="nav-item">
              <div className="nav-link">Add your listing</div>
            </li>
          </Link>
          <li className="nav-item">
            <a className="nav-link" href="mailto:admin@kinshipfarm.org?subject=Inquiry">Contact</a>
          </li>
          <li>
            <a className="nav-link" href="mailto:info@brixyfy.com?subject=Report a bug">Report a bug</a>
          </li>
          <Link to="/login">
            <li className="nav-item">
              <div className="nav-link" onClick={() => loginWithRedirect({})}>Login</div>
            </li>
          </Link>
        </ul>
      </div>
    )
  }
}

export const NavJumbo = props => (
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm bg-none">
      <Links />
    </nav>
)







