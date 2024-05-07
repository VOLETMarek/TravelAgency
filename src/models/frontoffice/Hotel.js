const db = require("../../../db");

const Hotel = {
  getAll: function () {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM hotels", (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  // Recuperation d'un hotel
  getHotelById: function (hotelId) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM hotels WHERE id = ?",
        [hotelId],
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

module.exports = Hotel;
