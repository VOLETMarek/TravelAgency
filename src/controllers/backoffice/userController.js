const User = require("../../models/backoffice/User");
const bcrypt = require("bcrypt");

// AFficher la liste des utilisateurs
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

// Afficher le formulaire de création d'un utilisateur
exports.showCreateUser = (req, res) => {
  res.render("userCreate", {
    success: req.flash("success"),
    error: req.flash("error"),
  });
};

// Méthode pour créer un nouvel utilisateur (route post)
exports.createUser = async (req, res) => {
  // Récupérer les données du formulaire
  const { lastname, firstname, username, email, password, role } = req.body;

  // Hacher le mot de passe avant de l'insérer dans la base de données
  const hashedPassword = await bcrypt.hash(password, 10);

  // Appeler la fonction pour insérer les données de l'utilisateur dans la base de données
  User.createUser(
    lastname,
    firstname,
    username,
    email,
    hashedPassword,
    role,
    (err, result) => {
      if (err) {
        req.flash("error", "Fail to create, please contact administrator");
        res.redirect(req.originalUrl);
        return;
      }
      req.flash("success", "Successful creation");
      res.redirect(req.originalUrl);
    }
  );
};
