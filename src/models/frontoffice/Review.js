const db = require("../../../db");

const Review = {
  getByFlightId: (flightId) => {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT 
          reviews.id,
          reviews.content,
          reviews.published_date,
          users.username
        FROM 
          reviews
        JOIN 
          users 
        ON 
          reviews.user_id = users.id
        WHERE 
          reviews.flight_id = ?;
      `;
      db.query(query, [flightId], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  },

  getByActivityId: (activityId) => {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT 
          reviews.id,
          reviews.content,
          reviews.published_date,
          users.username
        FROM 
          reviews
        JOIN 
          users 
        ON 
          reviews.user_id = users.id
        WHERE 
          reviews.activity_id = ?;
      `;
      db.query(query, [activityId], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  },

  getByHotelId: (hotelId) => {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT 
          reviews.id,
          reviews.content,
          reviews.published_date,
          users.username
        FROM 
          reviews
        JOIN 
          users 
        ON 
          reviews.user_id = users.id
        WHERE 
          reviews.hotel_id = ?;
      `;
      db.query(query, [hotelId], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  },

  insertFlightReview: (userId, flightId, content) => {
    return new Promise((resolve, reject) => {
      const query = `
        INSERT INTO reviews (user_id, flight_id, content)
        VALUES (?, ?, ?);
      `;
      db.query(query, [userId, flightId, content], (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  },

  insertActivityReview: (userId, activityId, content) => {
    return new Promise((resolve, reject) => {
      const query = `
        INSERT INTO reviews (user_id, activity_id, content)
        VALUES (?, ?, ?);
      `;
      db.query(query, [userId, activityId, content], (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  },

  insertHotelReview: (userId, hotelId, content) => {
    return new Promise((resolve, reject) => {
      const query = `
        INSERT INTO reviews (user_id, hotel_id, content)
        VALUES (?, ?, ?);
      `;
      db.query(query, [userId, hotelId, content], (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  },
};

module.exports = Review;
