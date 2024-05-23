const Review = require("../../models/backoffice/Review");

exports.fetchAllReviews = (req, res) => {
  Review.getAll()
    .then((reviews) => {
      res.render("Review/reviewList", {
        reviews: reviews,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error:
          "Une erreur est survenue lors de la récupération de la liste des commentaires",
      });
    });
};
