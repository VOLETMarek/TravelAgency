const db = require("../../../db");

// Obtenir la liste des utilisateurs
const User = {
  getAll: function () {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT id, lastname, firstname, username, email, role FROM users",
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

  // Creation d'un utilisateur
  createUser: function (lastname, firstname, username, email, hashedPassword, role, callback) {
    db.query(
      "INSERT INTO users (lastname, firstname, username, email, password, role) VALUES (?, ?, ?, ?, ?, ?)",
      [lastname, firstname, username, email, hashedPassword, role],
      (err, result) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, result);
        }
      }
    );
  },
};

module.exports = User;