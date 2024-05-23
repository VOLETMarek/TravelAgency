const db = require("../../../db");

const Reservation = {
  getAll: function () {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM reservations";
      db.query(query, (err, results) => {
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
  }
};

module.exports = Reservation;
