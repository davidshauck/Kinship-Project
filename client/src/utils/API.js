import axios from "axios";

export default {
  saveListing: function (listingData) {
    return axios.post("/api/listings", listingData);
  },
  updateListing: (listing) =>{
    return axios.post("/api/listings/update", listing)
  },
  getListings: function (query) {
    return axios.post("/api/listings/search", {
      data: query
    });
  },
  getListingByUser: (user) => {
    return axios.post("/api/user/listings", {
      email: user.email
    })
  },
  getListing: function (id) {
    return axios.get("/api/listings/" + id);
  },
  getRandom: function () {
    return axios.post("/api/listings/random")
  }
};