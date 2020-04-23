import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

// import { Input, TextArea, FormBtn, Checkboxes } from "../components/Form";
// import Nav from "../components/Nav";
import ListingCard from "../components/ListingCard";
import SearchForm from "../components/SearchForm";
import { SearchConsumer } from '../SearchProvider'


import "./style.css";

class Listings extends Component {

  render() {
    return (
      <div className="wrapper">
        {/* <Nav /> */}
        <Container fluid>
          <Row>
            <Col size="md-2">
              {/* <div class="box">
              </div> */}
            </Col>
            <Col size="md-8">
              <div className="box" style={{ backgroundColor: "#cccccc" }}>
                <h5 style={{ color: "White" }}>Search</h5>
                <SearchForm />
              </div>
              <SearchConsumer className="content-inside">
                {context => (
                  <React.Fragment>
                    {context.state.listings.length ? (
                      <List>
                        <h2>AVAILABLE TUTORS</h2>
                        {context.state.listings.map(listing => (
                          <ListItem key={listing._id}>
                            {/* <Link to={"/listings/" + listing._id}> */}
                            <ListingCard
                              name={listing.name}
                              address1={listing.address1}
                              address2={listing.address2}
                              city={listing.city}
                              state={listing.state}
                              zip={listing.zip}
                              telephone={listing.telephone}
                              website={listing.website}
                              image={listing.image}
                              categories={listing.categories}
                              description={listing.description}
                              facebook={listing.facebook}
                              twitter={listing.twitter}
                              instagram={listing.instagram}
                            />
                            {/* </Link> */}
                          </ListItem>
                        ))}
                      </List>
                    ) : (
                        <div className="box">
                          <h4 className="webinars-headline">Sorry, there are no listings for that search.</h4>
                        </div>
                      )}
                  </React.Fragment>
                )}
              </SearchConsumer>
            </Col>
            <Col size="md-2">
            </Col>
          </Row>
        </Container>
        <div className="push"></div>
      </div>
    );
  }
}

export default Listings;
