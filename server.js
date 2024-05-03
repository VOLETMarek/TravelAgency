const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path"); // Ajout de cette ligne pour importer le module path
// Permet de stocker le role de l'uilisateur pour controler lacces aux pages du backoffice
// const session = require("express-session");
// Permet d'utiliser le module flash, pur beneficier des messages success et error pour le backoffice
// const flash = require("express-flash");

const app = express();

// Import des routes du front office
const frontOfficeRoutes = require("./src/routes/frontoffice");
// Import des routes du backoffice
const backOfficeRoutes = require("./src/routes/backoffice");

// Définir les options CORS pour autoriser uniquement le port 5173
const corsOptions = {
    origin: "http://localhost:3000",
  };

// Utilisation de express-flash
// app.use(flash());

// Déclarer le dossier public comme un répertoire statique
app.use(express.static("public"));

// Configuration du moteur de vue EJS
app.set("views", path.join(__dirname, "src/views/pages"));
app.set("view engine", "ejs");

app.use(cors(corsOptions));

// // Middleware pour le body parser JSON pour interpreter les requetes du front office
const jsonBodyParser = bodyParser.json();

// // Middleware pour le body parser URL encodé (pour interpreter les requetes du backoffice)
const urlencodedBodyParser = bodyParser.urlencoded({ extended: true });

// Utilisation du body parser JSON pour les routes front
app.use("/front", jsonBodyParser);

// Utilisation du body parser URL encodé pour les routes back
app.use("/backoffice", urlencodedBodyParser);

// Utilisation des routes du front office sur le chemin "/"
app.use("/front", frontOfficeRoutes);

// Utilisation des routes du back office sur le chemin "/backoffice"
app.use("/backoffice", backOfficeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  (`Serveur en cours d'exécution sur le port ${PORT}`);
});