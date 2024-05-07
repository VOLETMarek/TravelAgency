const Flight = require("../../models/frontoffice/Flight");

exports.fetchAllFlights = (req, res) => {
  Flight.getAll()
    .then((flights) => {
      res.json(flights);
    })
    .catch((err) => {
      res.status(500).json({
        error:
          "Une erreur est survenue lors de la récupération de la liste des vols",
      });
    });
};

// Recuperation d'un vol
exports.fetchFlightDetails = (req, res) => {
  const flightId = req.params.flightId;

  Flight.getFlightById(flightId)
    .then((flight) => {
        res.json(flight);
    })
    .catch((err) => {
      res.status(500).json({
        error:
          "Une erreur est survenue lors de la récupération des détails d'un vol.",
      });
    });
};