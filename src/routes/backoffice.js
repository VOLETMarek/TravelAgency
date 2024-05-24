const express = require("express");
const router = express.Router();

const homeController = require("../controllers/backoffice/homeController");
const flightController = require("../controllers/backoffice/flightController");
const hotelController = require("../controllers/backoffice/hotelController");
const activityController = require("../controllers/backoffice/activityController");
const reservationController = require("../controllers/backoffice/reservationController");
const reviewController = require("../controllers/backoffice/reviewController");
const userController = require("../controllers/backoffice/userController");

// Routes pour acceder à la page d'accueil
router.get("/", homeController.renderHomePage);

// -----Flights-----
router.get("/flight-list", flightController.fetchAllFlights);
router.get("/flight-create", flightController.showFlightCreate);
router.post("/flight-create", flightController.createFlight);
router.get("/flight-details/:flightId", flightController.showFlightDetails);
router.get("/flight-update/:flightId", flightController.showUpdateFlight);
router.post("/flight-update/:flightId", flightController.updateFlight);
router.post("/flight-delete/:flightId", flightController.deleteFlight);

// -----Hotels-----
router.get("/hotel-list", hotelController.fetchAllHotels);
router.get("/hotel-create", hotelController.showHotelCreate);
router.post("/hotel-create", hotelController.createHotel);
router.get("/hotel-details/:hotelId", hotelController.showHotelDetails);
router.get("/hotel-update/:hotelId", hotelController.showUpdateHotel);
router.post("/hotel-update/:hotelId", hotelController.updateHotel);
router.post("/hotel-delete/:hotelId", hotelController.deleteHotel);

// -----Activities-----
router.get("/activity-list", activityController.fetchAllActivities);
router.get("/activity-create", activityController.showActivityCreate);
router.post("/activity-create", activityController.createActivity);
router.get("/activity-details/:activityId", activityController.showActivityDetails);
router.get("/activity-update/:activityId", activityController.showUpdateActivity);
router.post("/activity-update/:activityId", activityController.updateActivity);
router.post("/activity-delete/:activityId", activityController.deleteActivity);

// -----Reservations-----
router.get("/reservation-list", reservationController.fetchAllReservations);
router.get("/reservation-create", reservationController.showReservationCreate);
router.post("/reservation-create", reservationController.createReservation);
router.get("/reservation-details/:reservationId", reservationController.showReservationDetails);
router.get("/reservation-update/:reservationId", reservationController.showUpdateReservation);
router.post("/reservation-update/:reservationId", reservationController.updateReservation);
router.post("/reservation-delete/:reservationId", reservationController.deleteReservation);

// -----Reviews-----
router.get("/review-list", reviewController.fetchAllReviews);
router.get("/review-create", reviewController.showReviewCreate);
router.post("/review-create", reviewController.createReview);
router.get("/review-details/:reviewId", reviewController.showReviewDetails);
router.get("/review-update/:reviewId", reviewController.showUpdateReview);
router.post("/review-update/:reviewId", reviewController.updateReview);
router.post("/review-delete/:reviewId", reviewController.deleteReview);

// -----Users-----
// Afficher la liste des utilisateurs
router.get("/user-list", userController.fetchAllUsers);
// Afficher la page de création d'un utilisateur
router.get("/user-create", userController.showCreateUser);
// Soumettre le formulare de création d'un utilisateur
router.post("/user-create", userController.createUser);
// Afficher la page de détail d'un utilisateur
router.get("/user-details/:userId", userController.fetchUserDetails);
// Afficher la page de mise à jour d'un utilisateur
router.get("/user-update/:userId", userController.showUpdateUser);
// Soumettre la mise à jour d'un utilisateur
router.post("/user-update/:userId", userController.updateUser);
// Supprimer un utilisateur
router.post("/user-delete/:userId", userController.deleteUser);


module.exports = router;
