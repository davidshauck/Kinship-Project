import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
class Footer extends React.Component {

render() {

return (
  <div> 

  <nav className="footer navbar-dark bg-dark">
    <div className="navbar-buttons">
      <div>Copyright © 2020 Kinship Farm</div>
      <div><a className="footer-text" href="mailto:info@brixyfy.com?subject=Report a bug">Report a bug</a></div>
    </div>
  </nav >  
    </div>
    )
  }
}
export default Footer;



