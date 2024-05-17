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

// Récupération des commentaire d'un vol

exports.fetchFlightReviews = async (req, res) => {
  const flightId = req.params.flightId;

  try {
    const reviews = await Reviews.getByFlightId(flightId);
    if (reviews.length === 0) {
      return res
        .status(404)
        .json({ message: "No reviews found for this flight." });
    }
    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error fetching reviews: ", error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching reviews." });
  }
};
