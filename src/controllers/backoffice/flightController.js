const Flight = require("../../models/backoffice/Flight");

exports.fetchAllFlights = (req, res) => {
  Flight.getAll()
    .then((flights) => {
      res.render("flightList", {
        flights: flights,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error:
          "Une erreur est survenue lors de la récupération de la liste des vols",
      });
    });
};
