const db = require("../../../db");

const Reservation = {
  // On initialise les services à null si jamais l'utilisateur ne reserve qu'1 ou 2 services.
  create: function (
    user_id,
    flight_id = null,
    activity_id = null,
    hotel_id = null,
    total_price
  ) {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO reservations (user_id, flight_id, activity_id, hotel_id, total_price) VALUES (?, ?, ?, ?, ?)",
        [user_id, flight_id, activity_id, hotel_id, total_price],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },

  getByUserId: function (userId) {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT 
            reservations.total_price, 
            reservations.date AS reservation_date,
            flights.flight_number, 
            flights.airline, 
            flights.departure_airport, 
            flights.arrival_airport, 
            flights.price, 
            flights.departure_date AS flight_departure_date, 
            flights.arrival_date AS flight_arrival_date,  
            flights.duration AS flight_duration,
            activities.name AS activity_name, 
            activities.location, 
            activities.description, 
            activities.price AS activity_price, 
            activities.start_date AS activity_start_date, 
            activities.end_date AS activity_end_date, 
            activities.duration AS activity_duration,
            hotels.name AS hotel_name, 
            hotels.location, 
            hotels.price_per_night, 
            hotels.start_date AS hotel_start_date, 
            hotels.end_date AS hotel_end_date, 
            hotels.duration AS hotel_duration
        FROM 
            reservations
            LEFT JOIN flights ON reservations.flight_id = flights.id
            LEFT JOIN activities ON reservations.activity_id = activities.id
            LEFT JOIN hotels ON reservations.hotel_id = hotels.id
        WHERE
            reservations.user_id = ?
      `;
      db.query(query, [userId], (err, results) => {
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
