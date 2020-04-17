import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { NavJumbo } from "./components/Decorators";
import { PrivateRoute } from "./components/AuthService";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Listings from "./pages/Listings"
import ListingSignup from "./pages/ListingSignup";
import Login from "./pages/Login";
import AccountDashboard from "./pages/AccountDashboard";
import SearchProvider from "./SearchProvider"
import "./style.css"

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <SearchProvider>
        <div>
          <NavJumbo />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/listings" component={Listings} />
            <PrivateRoute path="/new-listing" component={ListingSignup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/contact" component={Contact} />
            <PrivateRoute exact path="/dashboard" component={AccountDashboard} />
          </Switch>
          <Footer />
        </div>
      </SearchProvider>
    </Router>
  );
}

export default App;
