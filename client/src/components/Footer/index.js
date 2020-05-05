import React from "react";
import "./footer.css";
class Footer extends React.Component {

render() {

return (
  <div> 

  <nav className="footer navbar-light bg-success">
    <div className="navbar-buttons">
      <div>Copyright © 2020 Kinship Farm</div>
      <div>
        <a className="footer-text" href="mailto:admin@kinshipfarm.org?subject=Info">Contact </a>
        |
        <a className="footer-text" href="mailto:info@brixyfy.com?subject=Report a bug"> Report a bug</a>     
      </div>
    </div>
  </nav >  
    </div>
    )
  }
}
export default Footer;



