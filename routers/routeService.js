const express = require("express");

const routeService = express.Router();

const multer = require("../middleware/upload");
const controlerService = require("../controllers/controllerService");
const authUser = require("../middleware/authUser");
// Créer un nouveau service avec une image
routeService.post("/service",authUser,multer, controlerService.createService);
// modifier un service 
routeService.put("/service/:serviceId",authUser,multer,  controlerService.putService);
// supprimer un service 
routeService.delete("/service/:serviceId",authUser, controlerService.deleteService);
routeService.get("/service/:serviceId", controlerService.getService);
// Afficher tous les services
routeService.get("/services", controlerService.getAllServices);
routeService.get("/services/user",authUser, controlerService.getServiceForUser);

module.exports = routeService;
