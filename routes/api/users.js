const router = require("express").Router();

const usersController = require("../../controllers/usersController");

// Matches with "/api/books"
router.route("/server").get(usersController.findAll);

router.route("/server").post(usersController.create);

module.exports = router;
