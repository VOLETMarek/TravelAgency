const Review = require("../../models/backoffice/Review");

exports.fetchAllReviews = (req, res) => {
  Review.getAll()
    .then((reviews) => {
      res.render("Review/reviewList", {
        reviews: reviews,
        success: req.flash("success"),
        error: req.flash("error"),
      });
    })
    .catch((err) => {
      res.status(500).json({
        error:
          "Une erreur est survenue lors de la récupération de la liste des commentaires",
      });
    });
};

exports.showReviewCreate = (req, res) => {
  res.render("Review/reviewCreate", {
    success: req.flash("success"),
    error: req.flash("error"),
  });
};

// Créer une nouvelle critique
exports.createReview = (req, res) => {
  const {
    content,
    published_date,
    user_id,
    hotel_id,
    flight_id,
    activity_id
  } = req.body;

  const reviewData = {
    content,
    published_date,
    user_id,
    hotel_id: hotel_id || null,
    flight_id: flight_id || null,
    activity_id: activity_id || null
  };

  Review.createReview(reviewData)
    .then((result) => {
      req.flash('success', 'Review created successfully');
      res.redirect('/backoffice/review-create');
    })
    .catch((err) => {
      console.error(err);
      req.flash('error', 'Failed to create review');
      res.redirect('/backoffice/review-create');
    });
};

// Fonction pour afficher les détails d'un commentaire
exports.showReviewDetails = (req, res) => {
  const reviewId = req.params.reviewId;
  Review.getReviewById(reviewId, (err, review) => {
    if (err) {
      res
        .status(500)
        .send(
          "Une erreur est survenue lors de la récupération des détails du commentaire'"
        );
      return;
    }

    res.render("Review/reviewDetails", { review: review });
  });
};

exports.showUpdateReview = (req, res) => {
  const reviewId = req.params.reviewId;

  Review.getReviewById(reviewId, (err, review) => {
    if (err) {
      res
        .status(500)
        .send(
          "Une erreur est survenue lors de la récupération des détails du commentaire"
        );
      return;
    }

    res.render("Review/reviewUpdate", {
      review: review,
      success: req.flash("success"),
      error: req.flash("error"),
    });
  });
};

exports.updateReview = (req, res) => {
  const reviewId = req.params.reviewId;
  const content = req.body.content

  Review.updateReviewDetails(reviewId, content)
    .then((result) => {
      req.flash("success", "Review updated successfully");
      res.redirect(req.originalUrl);
    })
    .catch((err) => {
      console.error(err);
      req.flash("error", "Failed to update review");
      res.redirect(req.originalUrl);
    });
};

exports.deleteReview = (req, res) => {
  const reviewId = req.params.reviewId;

  Review.deleteReviewById(reviewId)
    .then(() => {
      req.flash("success", "Review deleted successfully");
      res.redirect("/backoffice/review-list");
    })
    .catch((err) => {
      console.error(err);
      req.flash("error", "Failed to delete review");
      res.redirect("/backoffice/Review-list");
    });
};