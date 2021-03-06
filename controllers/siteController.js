const db = require("../models");
const mongoose = require("mongoose");

// Defining methods for the siteController
module.exports = {
  findAllListings: function (req, res) {
    let query = req.body.data ? req.body.data
    // {
    //   categories: req.body.data.search,
    //   city: req.body.data.city,
    //   us_state: req.body.data.us_state
    // } 
    : {}
    console.log("HERE'S THE QUERY", query)
    db.Listing
      .find(query)
      .sort({
        date: -1
      })
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)
      }).catch(err => res.status(422).json(err));
  },
  findListingById: function (req, res) {
    console.log("RES ", req.query.reviews);
    db.Listing
      .findById(req.params.id)
      .sort({
        date: -1
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createListing: function (req, res) {
    console.log("HITTING CREATE??", req.body)
    db.Listing
      .create(req.body)
      .then(dbModel => res.json({
        success: true,
        ...dbModel
      }))
      .catch(err => res.json(err));
  },
  updateListing: function (req, res) {
    db.Listing
      .findOneAndUpdate({
        _id: req.body._id
      }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveListingMessage: function (req, res) {
    console.log("HIT TUTOR MESSAGES", req.body)
    db.Listing
      .update({
        _id: mongoose.Types.ObjectId(req.body.id)
      }, {
        $push: {
          messages: req.body
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeListing: function (req, res) {
    db.Listing
      .findById({
        _id: req.params.id
      })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getRandom: async (req, res) => {
    const count = await db.Listing.countDocuments();
    const random = Math.floor(Math.random() * count)
    const random_listing = await db.Listing.find().skip(random);
    res.json({
      result: random_listing[0]
    })
  },
  getCities: async (req, res) => {
    let query = req.body.data ? {
      us_state: req.body.data
    } : {}
    console.log("REQ BODY CITY STATE", req.body.data)
    await db.Listing
      .find(query)
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)
      }).catch(err => res.status(422).json(err));
  },
  getListingsByUser: async (req, res) => {
    const listings = await db.Listing.find({
      email: req.body.email
    }).catch(err => res.json(err))
    res.json({
      listings
    })
  }
};