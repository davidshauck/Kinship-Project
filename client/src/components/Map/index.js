import React from "react";
import Iframe from 'react-iframe'

export const Map = (props) => (
    <Iframe url={"https://www.google.com/maps/embed/v1/place?key=AIzaSyAL4yfd8ajam3YQXWrvocecV0PmURldsxs&zoom=11&q=" + props.address1.replace(/ /g, "+") + "%20" + props.city.replace(/ /g, "+") + "%2C%20" + props.us_state.replace(/ /g, "+") + "%20" + props.zip_code}
        width="300px"
        height="200px"
        id="myId"
        className="map"
        display="initial"
        position="relative" />
)