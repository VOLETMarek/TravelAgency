const db = require("../../../db");

const Reservation = {
  getAll: function () {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT 
          reservations.id, 
          reservations.date,
          reservations.total_price, 
          users.firstname, 
          users.lastname, 
          flights.airline AS flight_airline, 
          flights.price AS flight_price, 
          activities.name AS activity_name, 
          activities.price AS activity_price, 
          hotels.name AS hotel_name, 
          hotels.price_per_night AS hotel_price 
        FROM 
          reservations 
        LEFT JOIN 
          users ON reservations.user_id = users.id 
        LEFT JOIN 
          flights ON reservations.flight_id = flights.id 
        LEFT JOIN 
          activities ON reservations.activity_id = activities.id 
        LEFT JOIN 
          hotels ON reservations.hotel_id = hotels.id;
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

module.exports = Reservation;
