const router = require("express").Router();
const siteController = require("../../controllers/siteController");
const isAuthenticated = require("../../config/isAuthenticated");
const auth = require("../../config/auth");
const db = require("../../models");

// LOGIN ROUTE
router.route("/login").post((req, res) => {
  auth
    .logUserIn(req.body.email, req.body.password)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(400).json(err));
});

// Matches with "/api/students"
router.route("/")
  .get(siteController.findAllUsers)
  .put(siteController.saveStudentMessage)
  .post(siteController.createStudent);

// Matches with "/api/students/:id"
router.route("/:id")
  .get(siteController.findStudentById)
  .put(siteController.updateStudent)
  .delete(siteController.removeStudent);

// Any route with isAuthenticated is protected and you need a valid token
// to access
router.route("account/:id").get(isAuthenticated, (req, res) => {
  db.User.findById(req.params.id)
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: "No user found" });
      }
    })
    .catch(err => res.status(400).send(err));
});

module.exports = router;
