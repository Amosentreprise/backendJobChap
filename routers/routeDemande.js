const express = require("express");

const  routeDemande = express.Router();
const controllersDemande = require("../controllers/controllerDemande");
const authUser = require('../middleware/authUser');
//enregistrer une demande  
routeDemande.post('/demande', controllersDemande.saveDemande);
//voir les demandes 
 routeDemande.get('/demandes',authUser, controllersDemande.getAllDemandes);

module.exports = routeDemande;