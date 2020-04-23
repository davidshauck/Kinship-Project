import axios from "axios";

export default {
  saveListing: function (listingData) {
    return axios.post("/api/listings", listingData);
  },
  getListings: function (query) {
    return axios.post("/api/listings/search", {
      data: query
    });
  },
  getListing: function (id) {
    return axios.get("/api/listings/" + id);
  }
};