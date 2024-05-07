const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/frontoffice/User");

const authController = {
  signin: async function (req, res) {
    const {lastname, firstname, username, password, email } = req.body;

    try {
      // Vérification de la validité du mot de passe
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(password)) {
        throw new Error("Password not strong enough");
      }

      // Vérification de la validité de l'e-mail
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error("Invalid Email");
      }

      // Hachage du mot de passe
      const hashedPassword = await bcrypt.hash(password, 10);

      // Enregistrement de l'utilisateur dans la base de données
      const userData = {
        lastname: lastname,
        firstname: firstname,
        username: username,
        password: hashedPassword,
        email: email,
      };

      // Enregistrer l'utilisateur dans la base de données, et récuperation de l'id de l'utilisateur pour l'associer et signer le token JWT
      const userId = await User.signin(userData);

      // Générer le token JWT et on le signe avec son id, et une clé secrete. Cette clé secrete sera utilisée pour verifier la validité des token envoyés par le client à l'avenir.
      const token = jwt.sign({ userId: userId }, process.env.JWT_SECRET);

      // Renvoyer le token JWT au front-end
      res.status(201).json({
        message: "Utilisateur enregistré avec succès",
        token: token,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = authController;
