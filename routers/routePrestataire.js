const express = require("express");

const routePrestataire = express.Router();
const authUser = require("../middleware/authUser");
const controllerPrestataire = require('../controllers/controllerPrestataire');

//Route pour l'inscription d'un prestataire
routePrestataire.post("/inscription", controllerPrestataire.inscriptionPrestataire);
//Route pour la connexion d'un prestataire
routePrestataire.post("/connexion",controllerPrestataire.connexionPrestataire);
//Route pour afficher profil d'un prestataire
routePrestataire.get("/profilPrestataire", authUser,controllerPrestataire.getProfilPrestataire);
//Route pour editer profil d'un prestataire
routePrestataire.put("/editProfilPrestataire", authUser,controllerPrestataire.EditProfilPrestataire);
//Route pour changer password d'un prestataire
routePrestataire.put("/password",authUser, controllerPrestataire.changePasswordPrestataire);

module.exports = routePrestataire;