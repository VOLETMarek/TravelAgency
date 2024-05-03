const express = require("express");
const router = express.Router();

const homeController = require("../controllers/backoffice/homeController");
const flightController = require("../controllers/backoffice/flightController");
const hotelController = require("../controllers/backoffice/hotelController");
const activityController = require("../controllers/backoffice/activityController");
const reservationController = require("../controllers/backoffice/reservationController");
const reviewController = require("../controllers/backoffice/reviewController");
const rateController = require("../controllers/backoffice/rateController");
const userController = require("../controllers/backoffice/userController");

// Routes pour acceder à la page d'accueil
router.get("/", homeController.renderHomePage);

// -----Flights-----
router.get("/flight-list", flightController.fetchAllFlights);

// -----Hotels-----
router.get("/hotel-list", hotelController.fetchAllHotels);

// -----Activities-----
router.get("/activity-list", activityController.fetchAllActivities);

// -----Reservations-----
router.get("/reservation-list", reservationController.fetchAllReservations);

// -----Reviews-----
router.get("/review-list", reviewController.fetchAllReviews);

// -----Rates-----
router.get("/rate-list", rateController.fetchAllRates);

// -----Users-----
router.get("/user-list", userController.fetchAllUsers);

module.exports = router;
