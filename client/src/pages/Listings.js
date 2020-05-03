import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import ListingCard from "../components/ListingCard";
import { SearchConsumer } from '../SearchProvider'
import "./style.css";


const Listings = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col size="md-12">
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
                        <h4 className="webinars-headline">Sorry, there are no listings for that search.</h4>
                      </div>
                    )}
                </React.Fragment>
              )}
            </SearchConsumer>
          </Col>
        </Row>
      </Container>
      <div className="push"></div>
    </div>
  );
}

export default Listings;
