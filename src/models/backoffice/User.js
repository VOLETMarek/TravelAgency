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
  createUser: function (
    lastname,
    firstname,
    username,
    email,
    hashedPassword,
    role,
    callback
  ) {
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

  // Récupération des informations d'un utilisateur
  getUserById: function (userId, callback) {
    db.query(
      "SELECT id, lastname, firstname, username, email, role FROM users WHERE id = ?",
      [userId],
      (err, result) => {
        if (err) {
          callback(err, null);
          return;
        }
        if (result.length) {
          callback(null, result[0]);
        } else {
          // Aucun utilisateur trouvé avec cet ID
          callback({ message: "Aucun utilisateur trouvé avec cet ID." }, null);
        }
      }
    );
  },

  // Mettre a jour l'utilisateur
  updateUserDetails: function (
    userId,
    lastname,
    firstname,
    username,
    email,
    role,
    callback
  ) {
    db.query(
      "UPDATE users SET lastname = ?, firstname = ?, username = ?, email = ?, role = ? WHERE id = ?",
      [lastname, firstname, username, email, role, userId],
      (err, result) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, result);
        }
      }
    );
  },

  // Suppression d'un utilisateur
  deleteByUserId: function (userId) {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM users WHERE id = ?", [userId], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
};

module.exports = User;
