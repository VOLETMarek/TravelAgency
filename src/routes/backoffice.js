const express = require("express");
const router = express.Router();

const homeController = require("../controllers/backoffice/homeController")

// Routes pour acceder à la page d'accueil
router.get("/", homeController.renderHomePage);

module.exports = router;