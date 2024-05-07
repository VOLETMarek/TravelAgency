const express = require("express");
const router = express.Router();

const flightController = require("../controllers/frontoffice/flightController");
const activityController = require("../controllers/frontoffice/activityController");
const hotelController = require("../controllers/frontoffice/hotelController");


// -----Flights-----
router.get("/flight-list", flightController.fetchAllFlights);
// Récupération d'un vol en fonction de son id
router.get("/flight-details/:flightId", flightController.fetchFlightDetails);


// -----Activities-----
router.get("/activity-list", activityController.fetchAllActivities);
// Récupération d'une activité en fonction de son id
router.get("/activity-details/:activityId", activityController.fetchActivityDetails);

// -----Hotels-----
router.get("/hotel-list", hotelController.fetchAllHotels);
// Récupération d'un hotel en fonction de son id
router.get("/hotel-details/:hotelId", hotelController.fetchHotelDetails);

module.exports = router;