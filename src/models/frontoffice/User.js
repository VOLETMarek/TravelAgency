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
};

module.exports = User;
