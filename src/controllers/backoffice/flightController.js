const Flight = require("../../models/backoffice/Flight");

exports.fetchAllFlights = (req, res) => {
  Flight.getAll()
    .then((flights) => {
      res.render("Flight/flightList", {
        flights: flights,
        success: req.flash("success"),
        error: req.flash("error"),
      });
    })
    .catch((err) => {
      res.status(500).json({
        error:
          "Une erreur est survenue lors de la récupération de la liste des vols",
      });
    });
};

exports.showFlightCreate = (req, res) => {
  res.render("Flight/flightCreate", {
    success: req.flash("success"),
    error: req.flash("error"),
  });
};

exports.createFlight = (req, res) => {
  const {
    flight_number,
    airline,
    departure_airport,
    arrival_airport,
    price,
    remaining_seats,
    image,
    departure_date,
    arrival_date,
    duration,
    logo,
    rate,
  } = req.body;

  const flightData = {
    flight_number,
    airline,
    departure_airport,
    arrival_airport,
    price,
    remaining_seats,
    image,
    departure_date,
    arrival_date,
    duration,
    logo,
    rate,
  };

  Flight.createFlight(flightData)
    .then((results) => {
      req.flash("success", "Flight created successfully");
      res.redirect("/backoffice/flight-create");
    })
    .catch((err) => {
      console.error(err);
      req.flash("error", "Failed to create flight");
      res.redirect("/backoffice/flight-create");
    });
};

// Fonction pour afficher les détails d'un vol
exports.showFlightDetails = (req, res) => {
  const flightId = req.params.flightId;
  Flight.getFlightById(flightId, (err, flight) => {
    if (err) {
      res
        .status(500)
        .send(
          "Une erreur est survenue lors de la récupération des détails d'un vol'"
        );
      return;
    }

    res.render("Flight/flightDetails", { flight: flight });
  });
};

// Afficher un vol pour sa modification
exports.showUpdateFlight = (req, res) => {
  const flightId = req.params.flightId;

  Flight.getFlightById(flightId, (err, flight) => {
    if (err) {
      res
        .status(500)
        .send(
          "Une erreur est survenue lors de la récupération des détails du vol."
        );
      return;
    }

    res.render("Flight/flightUpdate", {
      flight: flight,
      success: req.flash("success"),
      error: req.flash("error"),
    });
  });
};

// Mettre à jour un vol
exports.updateFlight = (req, res) => {
  const flightId = req.params.flightId;
  console.log(flightId);

  const {
    flight_number,
    airline,
    departure_airport,
    arrival_airport,
    price,
    remaining_seats,
    image,
    departure_date,
    arrival_date,
    duration,
    logo,
    rate,
  } = req.body;

  const flightData = {
    flight_number,
    airline,
    departure_airport,
    arrival_airport,
    price,
    remaining_seats,
    image,
    departure_date,
    arrival_date,
    duration,
    logo,
    rate,
  };

  Flight.updateFlightDetails(flightId, flightData)
    .then((result) => {
      req.flash("success", "Flight updated successfully");
      res.redirect(req.originalUrl);
    })
    .catch((err) => {
      console.error(err);
      req.flash("error", "Failed to update flight");
      res.redirect(req.originalUrl);
    });
};

// Supprimer un vol
exports.deleteFlight = (req, res) => {
  const flightId = req.params.flightId;

  Flight.deleteFlightById(flightId)
    .then(() => {
      req.flash("success", "Flight deleted successfully");
      res.redirect("/backoffice/flight-list");
    })
    .catch((err) => {
      console.error(err);
      req.flash("error", "Failed to delete flight");
      res.redirect("/backoffice/flight-list");
    });
};
