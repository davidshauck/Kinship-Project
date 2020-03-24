import React, { Component } from "react";
import AboutMe from "../components/AboutMe"
import { Col, Row, Container } from "../components/Grid";
import "./style.css";
class About extends Component {

  render() {
    return (
      <div>
      {/* <Nav /> */}
        <Container fluid>
          <Row>
            <Col size="md-12">
              <AboutMe />           
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
