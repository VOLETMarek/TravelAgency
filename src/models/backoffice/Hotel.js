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
};

module.exports = Hotel;
