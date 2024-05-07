const db = require("../../../db");

const Flight = {
  getAll: function () {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM flights",
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  },

  // Recuperation d'un vol
  getFlightById: function (flightId) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM flights WHERE id = ?",
        [flightId],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results[0]);
          }
        }
      );
    });
  },
};

module.exports = Flight;
