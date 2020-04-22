const db = require("../models");
const mongoose = require("mongoose");

// Defining methods for the siteController
module.exports = {
  findAllListings: function (req, res) {
    let query = req.body.data ? {
      categories: req.body.data
    } : {}
    console.log("HERE'S THE QUERY", req.body.data)
    db.Listing
      .find(query)
      // .find(req.body)
      // .find(query)
      .sort({
        date: -1
      })
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)
      }).catch(err => res.status(422).json(err));
  },
  // findStudentById: function(req, res) {
  //   console.log("AM I HERE?")
  //   db.Listing
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
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
  // createStudent: function(req, res) {
  //   db.Listing
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  createListing: function (req, res) {
    console.log("HITTING CREATE??", req.body)
    console.log(req.body)
    db.Listing
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateStudent: function (req, res) {
    db.Listing
      .findOneAndUpdate({
        _id: req.params.id
      }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // saveReview: function(req, res) {
  //   console.log("HIT REVIEWS", req.body)
  //  console.log(req.body)
  //   db.Listing
  //  .update(
  //     { _id: mongoose.Types.ObjectId(req.body.id)},
  //     { $push: { reviews: req.body } })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // saveStudentMessage: function(req, res) {
  //   console.log("STUDENT MESSAGE", req.body)
  //    db.Listing
  //   .update(
  //      { _id: mongoose.Types.ObjectId(req.body.id)},
  //      { $push: { messages: req.body } })
  //      .then(dbModel => res.json(dbModel))
  //      .catch(err => res.status(422).json(err));
  //  },
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
  // removeStudent: function(req, res) {
  //   db.Listing
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  removeListing: function (req, res) {
    db.Listing
      .findById({
        _id: req.params.id
      })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};