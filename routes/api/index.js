const router = require("express").Router();
const listingRoutes = require("./listings");
const userRoutes = require("./users");

router.use("/listings", listingRoutes);
router.use("/user", userRoutes)

module.exports = router;