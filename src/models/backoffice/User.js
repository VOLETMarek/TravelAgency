const db = require("../../../db");

const User = {
  getAll: function () {
    return new Promise((resolve, reject) => {
      db.query("SELECT id, lastname, firstname, username, email, role FROM users", (err, results) => {
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
