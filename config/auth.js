const db = require('../models');
const jwt = require('jsonwebtoken');
require("dotenv").config();

/*
Eww: https://mongoosejs.com/docs/promises.html#should-you-use-exec-with-await?
Nice promise wrapper although I hate how thats how we have to do it.
*/
module.exports = {
  logUserIn: function (email, password) {
    return new Promise((resolve, reject) => {
      db.Listing.findOne({
        email: email
      }).then(listing => {
        listing.verifyPassword(password, (err, isMatch) => {
          if (isMatch && !err) {
            let token = jwt.sign({
              id: listing._id,
              email: listing.email
            }, process.env.SERVER_SECRET, {
              expiresIn: 600
            }); // 129600 Sigining the token
            resolve({
              success: true,
              message: "Token Issued!",
              token: token,
              listing: listing
            });
          } else {
            reject({
              success: false,
              message: "Authentication failed. Wrong password."
            });
          }
        });
      }).catch(err => reject({
        success: false,
        message: "User not found",
        error: err
      }));
    })
  },
  getUser: function (user) {
    return new Promise((resolve, reject) => {
      db.User.findOneAndUpdate({
        email: user.email
      }).then(user_object => {
        resolve({
          user: user_object
        })
      }).catch(err => {
        reject({
          error: err,
          message: "An error occurred"
        })
      })
    })

  }
}