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

  createReservation: function (reservationData) {
    return new Promise((resolve, reject) => {
      const query = `
        INSERT INTO reservations (total_price, user_id, flight_id, activity_id, hotel_id, date)
        VALUES (?, ?, ?, ?, ?, ?)
      `;

      const values = [
        reservationData.total_price,
        reservationData.user_id,
        reservationData.flight_id,
        reservationData.activity_id,
        reservationData.hotel_id,
        reservationData.date,
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

  // Récupération des informations d'une reservation
  getReservationById: function (reservationId, callback) {
    db.query(
      "SELECT * FROM reservations WHERE id = ?",
      [reservationId],
      (err, result) => {
        if (err) {
          callback(err, null);
          return;
        }
        if (result.length) {
          callback(null, result[0]);
        } else {
          callback({ message: "Aucune reservation trouvée" }, null);
        }
      }
    );
  },

  // Mettre à jour les détails d'une réservation
  updateReservationDetails: function (reservationId, reservationData) {
    return new Promise((resolve, reject) => {
      const query = `
        UPDATE reservations 
        SET total_price = ?, user_id = ?, flight_id = ?, activity_id = ?, hotel_id = ?, date = ?
        WHERE id = ?
      `;

      const values = [
        reservationData.total_price,
        reservationData.user_id,
        reservationData.flight_id,
        reservationData.activity_id,
        reservationData.hotel_id,
        reservationData.date,
        reservationId,
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

  deleteByUserId: function (userId) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM reservations WHERE user_id = ?";
      db.query(query, [userId], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  deleteReservationById: function (reservationId) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM reservations WHERE id = ?";

      db.query(query, [reservationId], (err, results) => {
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
