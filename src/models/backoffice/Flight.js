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
};

module.exports = Flight;
