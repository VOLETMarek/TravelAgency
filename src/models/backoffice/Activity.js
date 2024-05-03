const db = require("../../../db");

const Activity = {
  getAll: function () {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM activities", (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
};

module.exports = Activity;
