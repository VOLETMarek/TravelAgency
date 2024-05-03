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
};

module.exports = Review;
