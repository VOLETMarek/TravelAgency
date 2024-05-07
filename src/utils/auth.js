const jwt = require("jsonwebtoken");

// Fonction pour vérifier le token utilisateur
function verifyToken(req) {
  const token = req.headers.authorization.split(" ")[1]; 
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return true; 
  } catch (error) {
    return false; 
  }
}

// Fonction pour extraire l'ID de l'utilisateur du token JWT
function getUserIdFromToken(req) {
  const token = req.headers.authorization.split(" ")[1]; 
  const decodedToken = jwt.decode(token); 
  return decodedToken.userId; 
}

module.exports = { verifyToken, getUserIdFromToken };