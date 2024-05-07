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

  // Recuperation d'une activité
  getActivityById: function (activityId) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM activities WHERE id = ?",
        [activityId],
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

module.exports = Activity;
