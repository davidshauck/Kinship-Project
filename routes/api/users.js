const router = require("express").Router();
const siteController = require("../../controllers/siteController");

router.route("/listings").post(siteController.getListingsByUser)


module.exports = router;