const router = require("express").Router();
const siteController = require("../../controllers/siteController");
const isAuthenticated = require("../../config/isAuthenticated");
const auth = require("../../config/auth");
const db = require("../../models");

// Matches with "/api/listings"
router.route("/")
  .get(siteController.findAllListings)
  .post(siteController.createListing);

router.route("/messages")
  .post(siteController.saveListingMessage)

router.route("/search")
  .post(siteController.findAllListings)

router.route("/:id")
  .get(siteController.findListingById)
  // .put(siteController.saveReview)
  .delete(siteController.removeListing);

// Any route with isAuthenticated is protected and you need a valid token
// to access
router.route("account/:id").get(isAuthenticated, (req, res) => {
  db.Listing.findById(req.params.id)
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({
          success: false,
          message: "No user found"
        });
      }
    })
    .catch(err => res.status(400).send(err));
});

module.exports = router;