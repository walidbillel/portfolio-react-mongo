const router = require("express").Router();
const userRoutes = require("./users");

// user routes
router.use("/contact", userRoutes);

module.exports = router;
