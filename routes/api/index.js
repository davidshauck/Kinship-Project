const router = require("express").Router();
// const studentRoutes = require("./students");
// const tutorRoutes = require("./tutors");
// const videoRoutes = require("./videoVD");
const listingRoutes = require("./listings");


// Routes
// router.use("/students", studentRoutes);
// router.use("/tutors", tutorRoutes);
// video Routes
router.use("/listings", listingRoutes);
// end video Routes

module.exports = router;
