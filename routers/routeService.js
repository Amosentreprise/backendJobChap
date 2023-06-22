const express = require("express");

const router = express.Router();

const multer = require("../middleware/upload");
const controlerService = require("../controllers/controllerService");
const authUser = require("../middleware/authUser");
// Créer un nouveau service avec une image
router.post("/service",authUser, multer, controlerService.createService);
// modifier un service 
router.put("/service/:serviceId",authUser, multer, controlerService.putService);
// supprimer un service 
router.delete("/service/:serviceId",authUser, controlerService.deleteService);

// Afficher tous les services
router.get("/services",authUser, controlerService.getAllServices);

module.exports = router;
