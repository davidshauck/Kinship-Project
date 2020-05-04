const router = require("express").Router();
const listingRoutes = require("./listings");
const userRoutes = require("./users");
const uploadRoutes = require("./upload");

router.use("/listings", listingRoutes);
router.use("/user", userRoutes)
router.use("/upload", uploadRoutes)
module.exports = router;