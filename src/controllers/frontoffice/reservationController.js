const Reservation = require("../../models/frontoffice/Reservation");
const authUtils = require("../../utils/auth");

exports.create = (req, res) => {
  const { flight_id, activity_id, hotel_id, total_price } = req.body;
  const userId = authUtils.getUserIdFromToken(req);
  Reservation.create(userId, flight_id, activity_id, hotel_id, total_price)
    .then((result) => {
      res.status(201).json({ message: "Réservation créée avec succès." });
    })
    .catch((error) => {
      console.error(error);
      res
        .status(500)
        .json({
          message:
            "Une erreur s'est produite lors de la création de la réservation.",
        });
    });
};

exports.fetchAllReservations = (req, res) => {
    const userId = authUtils.getUserIdFromToken(req);
    Reservation.getByUserId(userId)
      .then((reservations) => {
        // Créer des tableaux pour stocker les détails de chaque type
        const totalPriceAndDate = [];
        const flightDetails = [];
        const activityDetails = [];
        const hotelDetails = [];

        // Parcourir chaque réservation
        reservations.forEach((reservation) => {
          // Créer un objet pour chaque type de détail
          const totalPriceAndDateObj = {
            total_price: reservation.total_price,
            reservation_date: reservation.reservation_date
          };
          const flightDetailsObj = {
            flight_number: reservation.flight_number,
            airline: reservation.airline,
            departure_airport: reservation.departure_airport,
            arrival_airport: reservation.arrival_airport,
            price: reservation.price,
            flight_departure_date: reservation.flight_departure_date,
            flight_arrival_date: reservation.flight_arrival_date,
            flight_duration: reservation.flight_duration
          };
          const activityDetailsObj = {
            activity_name: reservation.activity_name,
            location: reservation.location,
            description: reservation.description,
            activity_price: reservation.activity_price,
            activity_start_date: reservation.activity_start_date,
            activity_end_date: reservation.activity_end_date,
            activity_duration: reservation.activity_duration
          };
          const hotelDetailsObj = {
            hotel_name: reservation.hotel_name,
            price_per_night: reservation.price_per_night,
            hotel_start_date: reservation.hotel_start_date,
            hotel_end_date: reservation.hotel_end_date,
            hotel_duration: reservation.hotel_duration
          };

          // Ajouter les objets aux tableaux correspondants
          totalPriceAndDate.push(totalPriceAndDateObj);
          flightDetails.push(flightDetailsObj);
          activityDetails.push(activityDetailsObj);
          hotelDetails.push(hotelDetailsObj);
        });

        // Envoyer la réponse avec les détails séparés
        res.json({
          totalPriceAndDate,
          flightDetails,
          activityDetails,
          hotelDetails
        });
      })
      .catch((err) => {
        res.status(500).json({
          error:
            "Une erreur est survenue lors de la récupération des réservations",
        });
      });
  };
