const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/frontoffice/User");
const authUtils = require("../../utils/auth");

const authController = {
  signin: async function (req, res) {
    const { lastname, firstname, username, password, email } = req.body;

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

  // La méthode login gère la connexion utilisateur
  login: function (req, res) {
    const { username, password } = req.body;
    let foundUser;

    User.findByUsername(username)
      .then((user) => {
        // Si aucun utilisateur trouvé, on retourne au client une erreur
        if (!user) {
          return res
            .status(401)
            .json({ message: "Invalid username or password" });
        }
        // On stocke l'utilisateur trouvé dans foundUser pour qu'elle soit accessible aux autres bloc de then
        foundUser = user;
        return bcrypt.compare(password, user.password);
      })

      // Si le mot de passe ne match pas, on retourne au client une erreur
      .then((match) => {
        if (!match) {
          return res
            .status(401)
            .json({ message: "Invalid username or password" });
        }
        // Si ca match, on signe le token JWT avec l'id de l'utilisateur retourné par la requete
        const token = jwt.sign(
          { userId: foundUser.id },
          process.env.JWT_SECRET
        );

        res.status(200).json({
          message: "Connexion réussie",
          token: token,
          username: foundUser.username,
          lastname: foundUser.lastname,
          firstname: foundUser.firstname,
          email: foundUser.email,
          role: foundUser.role,
        });
      })
      .catch((error) => {
        res.status(500).json({
          message:
            "Une erreur s'est produite lors de la connexion de l'utilisateur",
        });
      });
  },

  update: function (req, res) {
    const { lastname, firstname, username, email } = req.body;
    // Extraire l'ID de l'utilisateur du token JWT
    const userId = authUtils.getUserIdFromToken(req);
    // Modification en BDD
    User.updateUserDetails(userId, lastname, firstname, username, email)
      .then((result) => {
        res.status(200).json({
          message: "Utilisateur modifié avec succès",
        });
      })
      .catch((error) => {
        res.status(500).json({
          message:
            "Une erreur s'est produite lors de la modification de l'utilisateur",
        });
      });
  },
};

module.exports = authController;
