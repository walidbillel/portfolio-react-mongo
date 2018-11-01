const router = require("express").Router();

const usersController = require("../../controllers/usersController");

// Matches with "/api/books"
router.route("/").get(usersController.findAll);

router.route("/").post(usersController.create);

module.exports = router;

