const db = require("../../../db");

const Review = {
  getAll: function () {
    return new Promise((resolve, reject) => {
      const query = `
      SELECT reviews.id, reviews.content, reviews.published_date, users.firstname AS user_firstname, users.lastname AS user_lastname, users.username, hotels.name AS hotel_name, flights.airline AS flight_airline, activities.name AS activity_name
      FROM reviews
      LEFT JOIN users ON reviews.user_id = users.id
      LEFT JOIN hotels ON reviews.hotel_id = hotels.id
      LEFT JOIN flights ON reviews.flight_id = flights.id
      LEFT JOIN activities ON reviews.activity_id = activities.id;      
      `;

      db.query(query, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  // Créer une nouvelle critique
  createReview: function (reviewData) {
    return new Promise((resolve, reject) => {
      const query = `
          INSERT INTO reviews (content, published_date, user_id, hotel_id, flight_id, activity_id)
          VALUES (?, ?, ?, ?, ?, ?)
        `;

      const values = [
        reviewData.content,
        reviewData.published_date,
        reviewData.user_id,
        reviewData.hotel_id,
        reviewData.flight_id,
        reviewData.activity_id,
      ];

      db.query(query, values, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  // Récupération des informations d'u commentaire
  getReviewById: function (reviewId, callback) {
    db.query(
      "SELECT * FROM reviews WHERE id = ?",
      [reviewId],
      (err, result) => {
        if (err) {
          callback(err, null);
          return;
        }
        if (result.length) {
          callback(null, result[0]);
        } else {
          callback({ message: "Aucun commentaire trouvé avec cet ID." }, null);
        }
      }
    );
  },

  getReviewById: function (reviewId, callback) {
    db.query(
      "SELECT * FROM reviews WHERE id = ?",
      [reviewId],
      (err, result) => {
        if (err) {
          callback(err, null);
          return;
        }
        if (result.length) {
          callback(null, result[0]);
        } else {
          callback({ message: "Aucun commentaire trouvé avec cet ID." }, null);
        }
      }
    );
  },

  updateReviewDetails: function (id, content) {
    return new Promise((resolve, reject) => {
      const query = `
        UPDATE reviews 
        SET content = ?
        WHERE id = ?
      `;

      const values = [content, id]; 

      db.query(query, values, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  deleteReviewById: function (reviewId) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM reviews WHERE id = ?";

      db.query(query, [reviewId], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  deleteByUserId: function (userId) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM reviews WHERE user_id = ?";
      db.query(query, [userId], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
};

module.exports = Review;
