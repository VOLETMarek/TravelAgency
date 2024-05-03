const Reservation = require("../../models/backoffice/Reservation");

exports.fetchAllReservations = (req, res) => {
  Reservation.getAll()
    .then((reservations) => {
      res.render("reservationList", {
        reservations: reservations,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error:
          "Une erreur est survenue lors de la récupération de la liste des reservations",
      });
    });
};
