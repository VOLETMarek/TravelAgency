const db = require("../../../db");

const Rate = {
  getAll: function () {
    return new Promise((resolve, reject) => {
      const query = `
      SELECT rates.id, 
      rates.rating, 
      users.firstname, 
      users.lastname, 
      hotels.name AS hotel_name, 
      activities.name AS activity_name, 
      flights.airline AS flight_airline 
      FROM rates 
      LEFT JOIN users ON rates.user_id = users.id 
      LEFT JOIN hotels ON rates.hotel_id = hotels.id 
      LEFT JOIN activities ON rates.activity_id = activities.id 
      LEFT JOIN flights ON rates.flight_id = flights.id;
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

module.exports = Rate;
