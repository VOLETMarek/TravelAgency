const db = require("../../../db");

const User = {
  signin: function (userData) {
    return new Promise((resolve, reject) => {
      const { lastname, firstname, username, password, email } = userData;

      db.query(
        "INSERT INTO users (lastname, firstname, username, password, email, role) VALUES (?, ?, ?, ?, ?, 'user')",
        [lastname, firstname, username, password, email],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result.insertId); // Renvoie l'ID de l'utilisateur inséré
          }
        }
      );
    });
  },

  findByUsername: function (username) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT id, lastname, firstname, username, email, password, role FROM users WHERE username = ?",
        [username],
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

module.exports = User;
