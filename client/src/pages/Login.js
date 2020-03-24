import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { FormBtn } from "../components/Form";
import AuthService from "../components/AuthService";
import "./style.css";


class Login extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  componentWillMount() {
    if (this.Auth.loggedIn()) {
      this.props.history.replace("/");
    }
  }

  // handleInputChange = event => {
  //   console.log(event.target.value);
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // }; 

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        // once user is logged in
        // take them to their profile page
        this.props.history.replace(`/`);
      })
      .then(() => window.location.reload(false))
      .catch(err => {
        console.log(err.response.data.message);
      });
  };

  render() {
    return (
      <div>
      {/* <Nav /> */}
        <Container fluid>
          <Row>
            <Col size="md-12">
            <div className="box">
                <h2>Login</h2>
                <form className="search">
              <div className="form-group">
              <input 
                name="email" 
                type="email" 
                id="email"
                placeholder="Email address" 
                className={"form-control login-email-field"}

                onChange={this.handleChange}
              />
              </div>
              <div className="form-group">

              <input 
                name="password" 
                type="password" 
                id="pwd"
                placeholder="Password" 
                className={"form-control login-password-field"}
                onChange={this.handleChange}
              />
              <FormBtn 
                button={"Submit"}
                onClick={this.handleFormSubmit}
                className={"btn btn-success login-submit-button"}
              />
              </div>
            </form>
            
            </div>         
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
