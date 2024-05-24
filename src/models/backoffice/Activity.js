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

  createActivity: function (activityData) {
    return new Promise((resolve, reject) => {
      const query = `
        INSERT INTO activities (name, location, description, price, image, start_date, end_date, duration, rate)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const values = [
        activityData.name,
        activityData.location,
        activityData.description,
        activityData.price,
        activityData.image,
        activityData.start_date,
        activityData.end_date,
        activityData.duration,
        activityData.rate,
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
  getActivityById: function (activityId, callback) {
    db.query(
      "SELECT * FROM activities WHERE id = ?",
      [activityId],
      (err, result) => {
        if (err) {
          callback(err, null);
          return;
        }
        if (result.length) {
          callback(null, result[0]);
        } else {
          // Aucune activité trouvée avec cet ID
          callback({ message: "Aucune ativité trouvée avec cet ID." }, null);
        }
      }
    );
  },

  // Mettre à jour les détails d'une activité
  updateActivityDetails: function (id, activityData) {
    return new Promise((resolve, reject) => {
      const query = `
        UPDATE activities 
        SET name = ?, location = ?, description = ?, price = ?, 
            image = ?, start_date = ?, end_date = ?, duration = ?, 
            rate = ?
        WHERE id = ?
      `;

      const values = [
        activityData.name,
        activityData.location,
        activityData.description,
        activityData.price,
        activityData.image,
        activityData.start_date,
        activityData.end_date,
        activityData.duration,
        activityData.rate,
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

  deleteActivityById: function (activityId) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM activities WHERE id = ?";

      db.query(query, [activityId], (err, results) => {
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
