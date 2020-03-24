const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const Schema = mongoose.Schema;

const listingSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  address1: {type: String, required: true },
  address2: {type: String },
  city: {type: String, required: true },
  state: {type: String, required: true },
  zip: { type: Number, required: true },
  telephone: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  categories: { type: Array, required: true },
  website: { type: String },
  facebook: { type: String },
  twitter: { type: String },
  instagram: { type: String },
});

// Execute before each listing.save() call
listingSchema.pre("save", function(callback) {
  let listing = this;

  // Break out if the password hasn't changed
  if (!listing.isModified("password")) return callback();

  // Password changed so we need to hash it
  bcrypt.genSalt(5, function(err, salt) {
    if (err) return callback(err);

    bcrypt.hash(listing.password, salt, null, function(err, hash) {
      if (err) return callback(err);
      listing.password = hash;
      callback();
    });
  });
});

listingSchema.methods.verifyPassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;