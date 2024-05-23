const db = require("../../../db");

const Flight = {
  getAll: function () {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM flights", (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  createFlight: function (flightData) {
    return new Promise((resolve, reject) => {
      const query = `
        INSERT INTO flights (
          flight_number, airline, departure_airport, arrival_airport, price, 
          remaining_seats, image, departure_date, arrival_date, duration, 
          logo, rate
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const values = [
        flightData.flight_number,
        flightData.airline,
        flightData.departure_airport,
        flightData.arrival_airport,
        flightData.price,
        flightData.remaining_seats,
        flightData.image,
        flightData.departure_date,
        flightData.arrival_date,
        flightData.duration,
        flightData.logo,
        flightData.rate,
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

  // Récupération des informations d'un vol
  getFlightById: function (flightId, callback) {
    db.query(
      "SELECT * FROM flights WHERE id = ?",
      [flightId],
      (err, result) => {
        if (err) {
          callback(err, null);
          return;
        }
        if (result.length) {
          callback(null, result[0]);
        } else {
          // Aucun vol trouvé avec cet ID
          callback({ message: "Aucun vol trouvé avec cet ID." }, null);
        }
      }
    );
  },

  updateFlightDetails: function (id, flightData) {
    return new Promise((resolve, reject) => {
      const query = `
        UPDATE flights 
        SET flight_number = ?, airline = ?, departure_airport = ?, arrival_airport = ?, price = ?, 
            remaining_seats = ?, image = ?, departure_date = ?, arrival_date = ?, duration = ?, 
            logo = ?, rate = ?
        WHERE id = ?
      `;

      const values = [
        flightData.flight_number,
        flightData.airline,
        flightData.departure_airport,
        flightData.arrival_airport,
        flightData.price,
        flightData.remaining_seats,
        flightData.image,
        flightData.departure_date,
        flightData.arrival_date,
        flightData.duration,
        flightData.logo,
        flightData.rate,
        id,
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

  deleteFlightById: function (flightId) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM flights WHERE id = ?";

      db.query(query, [flightId], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
};

module.exports = Flight;
