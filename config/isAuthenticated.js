const exjwt = require("express-jwt");
require("dotenv").config();
// Init the express-jwt middleware
const isAuthenticated = exjwt({
  secret: "meow"
});

module.exports = isAuthenticated;
