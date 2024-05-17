const express = require("express");
const router = express.Router();

const flightController = require("../controllers/frontoffice/flightController");
const activityController = require("../controllers/frontoffice/activityController");
const hotelController = require("../controllers/frontoffice/hotelController");
const authController = require("../controllers/frontoffice/authController");
const reservationController = require("../controllers/frontoffice/reservationController");
const reviewController = require("../controllers/frontoffice/reviewController");


// -----Flights-----
router.get("/flight-list", flightController.fetchAllFlights);
// Récupération d'un vol en fonction de son id
router.get("/flight-details/:flightId", flightController.fetchFlightDetails);
// Récupération des commentaires d'un vol
router.get("/flight-reviews/:flightId", reviewController.fetchFlightReviews);
// Route pour insertion d'un commentaire
router.post("/flight-review", reviewController.createFlightReview);

// -----Activities-----
router.get("/activity-list", activityController.fetchAllActivities);
// Récupération d'une activité en fonction de son id
router.get("/activity-details/:activityId", activityController.fetchActivityDetails);
// Récupération des commentaires d'une activité
router.get("/activity-reviews/:activityId", reviewController.fetchActivityReviews);
// Route pour insertion d'un commentaire
router.post("/activity-review", reviewController.createActivityReview);

// -----Hotels-----
router.get("/hotel-list", hotelController.fetchAllHotels);
// Récupération d'un hotel en fonction de son id
router.get("/hotel-details/:hotelId", hotelController.fetchHotelDetails);
// Récupération des commentaires d'un vol
router.get("/hotel-reviews/:hotelId", reviewController.fetchHotelReviews);
// Route pour insertion d'un commentaire
router.post("/hotel-review", reviewController.createHotelReview);

// -----Authentification-----
// Route pour l'inscription
router.post("/signin", authController.signin);

// Route pour l'authentification
router.post("/login", authController.login);

// Route pour la modification des informations utilisateurs
router.post("/update", authController.update);

// Route afficher les informations utilisateurs
router.post("/user", authController.fetchUserData);

// Route pour lister les reservations
router.get("/reservation-list", reservationController.fetchAllReservations);

// Route pour l'insertion d'une reservation
router.post("/reservation", reservationController.create);

module.exports = router;