const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const Schema = mongoose.Schema;

const listingSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  address1: {
    type: String,
    required: true
  },
  address2: {
    type: String
  },
  city: {
    type: String,
    required: true
  },
  us_state: {
    type: String,
    required: true
  },
  zip_code: {
    type: Number,
    required: true
  },
  telephone: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  categories: {
    type: Array,
    required: true
  },
  website: {
    type: String
  },
  facebook: {
    type: String
  },
  twitter: {
    type: String
  },
  instagram: {
    type: String
  },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;