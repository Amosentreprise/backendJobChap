const express = require("express");

const router = express.Router();
const authUser = require("../middleware/authUser");
const controllerPrestataire = require('../controllers/controllerPrestataire');

//Route pour l'inscription d'un prestataire
router.post("/inscription", controllerPrestataire.inscriptionPrestataire);
//Route pour la connexion d'un prestataire
router.post("/connexion",controllerPrestataire.connexionPrestataire);
//Route pour afficher profil d'un prestataire
router.get("/profilPrestataire", authUser,controllerPrestataire.getProfilPrestataire);
//Route pour editer profil d'un prestataire
router.put("/editProfilPrestataire", authUser,controllerPrestataire.EditProfilPrestataire);
//Route pour changer password d'un prestataire
router.put("/password",authUser, controllerPrestataire.changePasswordPrestataire);