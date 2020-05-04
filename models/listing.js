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
    type: String,
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
  MondayOpen: {
    type: String
  },
  TuesdayOpen: {
    type: String
  },
  WednesdayOpen: {
    type: String
  },
  ThursdayOpen: {
    type: String
  },
  FridayOpen: {
    type: String
  },
  SaturdayOpen: {
    type: String
  },
  SundayOpen: {
    type: String
  },
  MondayClose: {
    type: String
  },
  TuesdayClose: {
    type: String
  },
  WednesdayClose: {
    type: String
  },
  ThursdayClose: {
    type: String
  },
  FridayClose: {
    type: String
  },
  SaturdayClose: {
    type: String
  },
  SundayClose: {
    type: String
  },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;