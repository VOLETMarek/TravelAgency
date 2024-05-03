const User = require("../../models/backoffice/User");

exports.fetchAllUsers = (req, res) => {
  User.getAll()
    .then((users) => {
      res.render("userList", {
        users: users,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error:
          "Une erreur est survenue lors de la récupération de la liste des utilisateurs",
      });
    });
};
