import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";
import { Loading } from "../Decorators/loading";
import "./navbar.css";

export const FeatureCard = (props) => (
  <div className="card">
    <div className="card-body" onClick={props.onClick}>
      <div className="ad">Advertisement</div>
      <img src={props.image} alt="..." className="img-thumbnail" />
      <div className="card-text">{props.name}</div>
      <div className="card-text">{props.address1} {props.city}, {props.us_state}</div>
      <div className="card-text">{props.phone}</div>
      <div>{props.telephone}</div>
      {props.categories ? props.categories.map(cateogry => <span>{cateogry} </span>) : ""}
    </div>
  </div>
)

export const Links = props => {
  const { isAuthenticated, loginWithRedirect, logout, user, loading } = useAuth0();
  if (loading) {
    return <Loading />
  }
  if (isAuthenticated && user) {
    return (
      <div className="navbar-buttons">
        <div className="lifeline-text">
          <Link to="/" style={{ textDecoration: 'none' }}>
            Local Lifeline | <span className="small-text">Your community resource</span>
          </Link>
        </div>
        <ul className="navbar-nav navbar-center">
          <Link push to="/">
            <li className="nav-item">
              <div className="nav-link">What is Local Lifeline?</div>
            </li>
          </Link>
          <Link push to="/new-listing">
            <li className="nav-item">
              <div className="nav-link">Add a listing</div>
            </li>
          </Link>
          <Link to="/dashboard">
            <li className="nav-item">
              <div className="nav-link">My listings</div>
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
            Local Lifeline | <span className="small-text">Your community resource</span>
          </Link>
        </div>
        <ul className="navbar-nav navbar-center">
          <Link push to="/">
            <li className="nav-item">
              <div className="nav-link">What is Local Lifeline?</div>
            </li>
          </Link>
          <Link push to="/new-listing">
            <li className="nav-item">
              <div className="nav-link">Add your listing</div>
            </li>
          </Link>
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







