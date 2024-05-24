const Review = require("../../models/frontoffice/Review");
const authUtils = require("../../utils/auth");

// Récupération des commentaire d'un vol

exports.fetchFlightReviews = async (req, res) => {
  const flightId = req.params.flightId;

  try {
    const reviews = await Review.getByFlightId(flightId);
    if (reviews.length === 0) {
      return res
        .status(404)
        .json({ message: "Aucun commentaire trouvé pour ce vol." });
    }
    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error fetching reviews: ", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récuperation des commentaires" });
  }
};

exports.fetchHotelReviews = async (req, res) => {
  const hotelId = req.params.hotelId;

  try {
    const reviews = await Review.getByHotelId(hotelId);
    if (reviews.length === 0) {
      return res
        .status(404)
        .json({ message: "Aucun commentaire trouvé pour cet hotel." });
    }
    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error fetching reviews: ", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récuperation des commentaires" });
  }
};

exports.fetchActivityReviews = async (req, res) => {
  const activityId = req.params.activityId;

  try {
    const reviews = await Review.getByActivityId(activityId);
    if (reviews.length === 0) {
      return res
        .status(404)
        .json({ message: "Aucun commentaire trouvé pour cette activité." });
    }
    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error fetching reviews: ", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récuperation des commentaires" });
  }
};

exports.createFlightReview = (req, res) => {
  const { flight_id, content } = req.body;
  const userId = authUtils.getUserIdFromToken(req);

  Review.insertFlightReview(userId, flight_id, content)
    .then((result) => {
      res.status(201).json({ message: "Commentaire ajouté avec succès." });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        message: "Une erreur s'est produite lors de l'ajout du commentaire.",
      });
    });
};

exports.createActivityReview = (req, res) => {
  const { activity_id, content } = req.body;
  const userId = authUtils.getUserIdFromToken(req);

  Review.insertActivityReview(userId, activity_id, content)
    .then((result) => {
      res.status(201).json({ message: "Commentaire ajouté avec succès." });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        message: "Une erreur s'est produite lors de l'ajout du commentaire.",
      });
    });
};

exports.createHotelReview = (req, res) => {
  const { hotel_id, content } = req.body;
  const userId = authUtils.getUserIdFromToken(req);

  Review.insertHotelReview(userId, hotel_id, content)
    .then((result) => {
      res.status(201).json({ message: "Commentaire ajouté avec succès." });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        message: "Une erreur s'est produite lors de l'ajout du commentaire.",
      });
    });
};
