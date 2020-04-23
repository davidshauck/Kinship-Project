import React from "react";
import { Link } from "react-router-dom";
import HamiltonSeal from "../../images/hamilton-seal.png"
import WenhamSeal from "../../images/wenham-seal.png"
import { useAuth0 } from "../../react-auth0-spa";
import "./navbar.css";

export const FeatureCard = (props) => (
  <div>
    <h1>{props.name}</h1>
    <h3>{props.address1}</h3>
  </div>
)

export const Links = props => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  if (isAuthenticated && user) {
    return (
      <div className="navbar-buttons">
        <ul className="navbar-nav navbar-center">
          <Link push to="/new-listing">
            <li className="nav-item">
              <div className="nav-link">Add your listing</div>
            </li>
          </Link>
          <li className="nav-item">
            <div className="nav-link" href="mailto:admin@kinshipfarm.org?subject=Inquiry">Contact</div>
          </li>
          <Link to="/account">
            <li className="nav-item">
              <div className="nav-link">My account</div>
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
        <ul className="navbar-nav navbar-center">
          <Link to="/">
            <li className="nav-item">
              <div className="nav-link">Help For Businesses</div>
            </li>
          </Link>
          <Link push to="/new-listing">
            <li className="nav-item">
              <div className="nav-link">Add your listing</div>
            </li>
          </Link>
          <li className="nav-item">
            <a className="nav-link" href="mailto:admin@kinshipfarm.org?subject=Inquiry">Contact</a>
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
  <div className="jumbotron jumbotron-fluid header">
    <div className="container">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img className="hamilton-seal" alt="Hamilton Seal" href="/" src={HamiltonSeal} />
        <img className="wenham-seal" alt="Wenham Seal" href="/" src={WenhamSeal} />
        <h1 className="title">Virtual Hamilton-Wenham</h1>
        <p className="subhead">Serving Community – Providing Peace-of-Mind</p>
      </Link>
    </div>
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm bg-dark">
      <Links />
    </nav>
  </div>
)







