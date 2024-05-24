const Reservation = require("../../models/backoffice/Reservation");

exports.fetchAllReservations = (req, res) => {
  Reservation.getAll()
    .then((reservations) => {
      res.render("Reservation/reservationList", {
        reservations: reservations,
        success: req.flash("success"),
        error: req.flash("error"),
      });
    })
    .catch((err) => {
      res.status(500).json({
        error:
          "Une erreur est survenue lors de la récupération de la liste des reservations",
      });
    });
};

exports.showReservationCreate = (req, res) => {
  res.render("Reservation/reservationCreate", {
    success: req.flash("success"),
    error: req.flash("error"),
  });
};

// Créer une réservation
exports.createReservation = (req, res) => {
  const {
    total_price,
    user_id,
    flight_id,
    activity_id,
    hotel_id,
    date
  } = req.body;

  const reservationData = {
    total_price,
    user_id,
    hotel_id: hotel_id || null,
    flight_id: flight_id || null,
    activity_id: activity_id || null,
    date
  };

  Reservation.createReservation(reservationData)
    .then((result) => {
      req.flash('success', 'Reservation created successfully');
      res.redirect('/backoffice/reservation-create'); 
    })
    .catch((err) => {
      console.error(err);
      req.flash('error', 'Failed to create reservation');
      res.redirect('/backoffice/reservation-create'); 
    });
};

// Fonction pour afficher les détails d'une reservation
exports.showReservationDetails = (req, res) => {
  const reservationId = req.params.reservationId;
  Reservation.getReservationById(reservationId, (err, reservation) => {
    if (err) {
      res
        .status(500)
        .send(
          "Une erreur est survenue lors de la récupération des détails d'une reservation"
        );
      return;
    }

    res.render("Reservation/reservationDetails", { reservation: reservation });
  });
};

// Afficher une reservation pour sa modification
exports.showUpdateReservation = (req, res) => {
  const reservationId = req.params.reservationId;

  Reservation.getReservationById(reservationId, (err, reservation) => {
    if (err) {
      res
        .status(500)
        .send(
          "Une erreur est survenue lors de la récupération des détails d'une reservation'"
        );
      return;
    }

    res.render("Reservation/reservationUpdate", {
      reservation: reservation,
      success: req.flash("success"),
      error: req.flash("error"),
    });
  });
};

// Mettre à jour les détails d'une réservation
exports.updateReservation = (req, res) => {
  const reservationId = req.params.id;
  const {
    total_price,
    user_id,
    flight_id,
    activity_id,
    hotel_id,
    date
  } = req.body;

  const reservationData = {
    total_price,
    user_id,
    flight_id,
    activity_id,
    hotel_id,
    date
  };

  Reservation.updateReservationDetails(reservationId, reservationData)
    .then((result) => {
      req.flash('success', 'Reservation updated successfully');
      res.redirect(req.originalUrl);
    })
    .catch((err) => {
      console.error(err);
      req.flash('error', 'Failed to update reservation');
      res.redirect(req.originalUrl);
    });
};

// Supprimer une reservation
exports.deleteReservation = (req, res) => {
  const reservationId = req.params.reservationId;

  Reservation.deleteReservationById(reservationId)
    .then(() => {
      req.flash("success", "Reservation deleted successfully");
      res.redirect("/backoffice/reservation-list");
    })
    .catch((err) => {
      console.error(err);
      req.flash("error", "Failed to delete reservation");
      res.redirect("/backoffice/Reservation-list");
    });
};