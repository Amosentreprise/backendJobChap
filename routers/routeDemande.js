const express = require("express");

const router = express.Router();
const controllersDemande = require("../controllers/controllerDemande");
const authUser = require('../middleware/authUser');
//enregistrer une demande 
router.post('/demande', controllersDemande.saveDemande);
//voir les demandes 
router.get('/demandes',authUser, controllersDemande.getAllDemandes);