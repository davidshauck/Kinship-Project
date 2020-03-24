const db = require('../models');
const jwt = require('jsonwebtoken');
require("dotenv").config();

module.exports = {
  logUserIn: function (email, password) {
    return new Promise((resolve, reject) => {
      db.Listing.findOne({
        email: email
      }).then(listing => {
        listing.verifyPassword(password, (err, isMatch) => {
          if (isMatch && !err) {
            let token = jwt.sign({ id: listing._id, email: listing.email }, process.env.SERVER_SECRET, { expiresIn: 600 }); // 129600 Sigining the token
            resolve({ success: true, message: "Token Issued!", token: token, listing: listing });
          } else {
            reject({ success: false, message: "Authentication failed. Wrong password." });
          }
        });
      }).catch(err => reject({ success: false, message: "User not found", error: err }));
    })
  }
}