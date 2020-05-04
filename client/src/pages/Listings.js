import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import ListingCard from "../components/ListingCard";
import { SearchConsumer } from '../SearchProvider';
import SearchBar from "../components/SearchBar";
import "./style.css";


const Listings = () => {
  return (
    <div>
      <Container fluid>
        <Row>
        <Col size="2"></Col>
        <Col size="8">

      <SearchBar/>
      </Col>
      <Col size="2"></Col>

      </Row>

        <Row>
        <Col size="1"></Col>
          <Col size="10">
            <SearchConsumer className="content-inside">
              {context => (
                <React.Fragment>
                  {context.state.listings.length ? (
                    <List>
                      {context.state.listings.map(listing => (
                        <ListItem key={listing._id}>
                          <ListingCard
                            name={listing.name}
                            address1={listing.address1}
                            address2={listing.address2}
                            city={listing.city}
                            us_state={listing.us_state}
                            zip_code={listing.zip_code}
                            telephone={listing.telephone}
                            email={listing.email}
                            website={listing.website}
                            image={listing.image}
                            categories={listing.categories}
                            description={listing.description}
                            facebook={listing.facebook}
                            twitter={listing.twitter}
                            instagram={listing.instagram}
                          />
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                      <div className="box">
                        <h4 className="no-results">Sorry, there are no listings for that search.</h4>
                      </div>
                    )}
                </React.Fragment>
              )}
            </SearchConsumer>
          </Col>
          <Col size="1"></Col>
        </Row>
      </Container>
      <div className="push"></div>
    </div>
  );
}

export default Listings;
